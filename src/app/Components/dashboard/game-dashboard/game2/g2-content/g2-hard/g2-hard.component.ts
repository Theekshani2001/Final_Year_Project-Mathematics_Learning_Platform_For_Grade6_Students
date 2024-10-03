import {Component, OnInit, Renderer2} from '@angular/core';

interface Card {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-g2-hard',
  templateUrl: './g2-hard.component.html',
  styleUrls: ['./g2-hard.component.scss']
})
export class G2HardComponent implements OnInit {
  cards: Card[] = [];
  state = {
    totalFlips: 0,
    totalTime: 0,
    moveLimit: 60, // Example limit
    timeLimit: 360, // Example limit
    loop: null as any
  };
  isGameWon: boolean = false;
  isGameOver: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    const images = ['circle.png', 'hexagon.png', 'octagon.png', 'parallelogram.png','4Star.png','archUp.png','banner.png','heart.png','pill.png', 'pentagon.png', 'square.png', 'trapezoid.png', 'triangle.png', 'cross.png', 'diamond.png'];

    this.cards = this.shuffleArray(
      images.flatMap((image, index) => [
        { id: index * 2, image: `./assets/images/Game2-E/${image}`, flipped: false, matched: false },
        { id: index * 2 + 1, image: `./assets/images/Game2-E/${image}`, flipped: false, matched: false }
      ])
    );

    this.state.totalFlips = 0;
    this.state.totalTime = 0;
    this.isGameWon = false;
    this.isGameOver = false;

    if (this.state.loop) {
      clearInterval(this.state.loop);
    }

    this.state.loop = setInterval(() => {
      this.state.totalTime++;
      if (this.state.totalTime >= this.state.timeLimit || this.state.totalFlips >= this.state.moveLimit) {
        this.endGame();
      }
    }, 1000);
  }

  flipCard(card: Card): void {
    if (!card.matched && !card.flipped && this.state.totalFlips < this.state.moveLimit && !this.isGameOver) {
      card.flipped = true;
      this.state.totalFlips++;

      const flippedCards = this.cards.filter(c => c.flipped && !c.matched);

      if (flippedCards.length === 2) {
        if (flippedCards[0].image === flippedCards[1].image) {
          flippedCards[0].matched = true;
          flippedCards[1].matched = true;
          this.checkWinCondition();
        } else {
          setTimeout(() => {
            flippedCards.forEach(c => c.flipped = false);
          }, 1000); // Adjust the delay as needed
        }
      }
    }
  }

  checkWinCondition(): void {
    if (this.cards.every(card => card.matched)) {
      this.isGameWon = true;
      this.isGameOver = true;
      this.showSuccessMessage();
      clearInterval(this.state.loop);
    }
  }

  showSuccessMessage(): void {
    const body = document.body;

    // Display "Great Job" message
    const message = this.renderer.createElement('div');
    this.renderer.addClass(message, 'great-job');
    this.renderer.setProperty(message, 'innerText', 'විශිෂ්ටයි..!');
    this.renderer.appendChild(body, message);

    // Trigger fireworks animation
    const fireworks = this.renderer.createElement('div');
    this.renderer.addClass(fireworks, 'fireworks');
    this.renderer.appendChild(body, fireworks);

    // Play fireworks sound
    const audioElement = document.getElementById('fireworks-sound') as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }

    // Show Next Game button and overlay after fireworks
    setTimeout(() => {
      this.renderer.removeChild(body, message);
      this.renderer.removeChild(body, fireworks);

      const overlay = document.getElementById('overlayWin');
      const nextGameButton = document.getElementById('next-game');
      if (overlay && nextGameButton) {
        overlay.style.display = 'block';
        nextGameButton.style.display = 'block';
      }
    }, 5000); // Adjust duration to match fireworks and message timing
  }


  endGame(): void {
    this.isGameOver = true;
    clearInterval(this.state.loop);
    this.renderer.setStyle(document.getElementById('overlay'), 'display', 'flex');
    setTimeout(() => {
      this.showGameOverButtons();
    }, 5000); // Display the message for 10 seconds
  }

  showGameOverButtons(): void {
    this.renderer.setStyle(document.getElementById('game-over-buttons'), 'display', 'flex');
  }

  tryAgain(): void {
    this.renderer.setStyle(document.getElementById('game-over-buttons'), 'display', 'none');
    this.renderer.setStyle(document.getElementById('overlay'), 'display', 'none');
    this.startGame();
  }

  goHome(): void {
    this.renderer.setStyle(document.getElementById('game-over-buttons'), 'display', 'none');
    this.renderer.setStyle(document.getElementById('overlay'), 'display', 'none');
    // Implement redirection to home page
    window.location.href = '/dashboard/game-dashboard/game2/levels-g2';
  }


  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  ngOnDestroy(): void {
    if (this.state.loop) {
      clearInterval(this.state.loop);
    }
  }

  goToNextGame(): void {
    // Redirect to the next game
    window.location.href = '/dashboard/game-dashboard/gameHome';
  }
}
