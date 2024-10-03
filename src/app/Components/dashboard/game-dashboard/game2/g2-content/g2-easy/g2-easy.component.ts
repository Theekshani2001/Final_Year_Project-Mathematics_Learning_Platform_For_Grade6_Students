import {Component, OnInit, OnDestroy, Renderer2} from '@angular/core';

interface Card {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-g2-easy',
  templateUrl: './g2-easy.component.html',
  styleUrls: ['./g2-easy.component.scss']
})
export class G2EasyComponent implements OnInit, OnDestroy {
  cards: Card[] = [];
  state = {
    totalFlips: 0,
    totalTime: 0,
    loop: null as any
  };
  isGameWon: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    const images = ['circle.png', 'hexagon.png', 'octagon.png', 'parallelogram.png', 'pentagon.png', 'square.png', 'trapezoid.png', 'triangle.png'];

    this.cards = this.shuffleArray(
      images.flatMap((image, index) => [
        { id: index * 2, image: `./assets/images/Game2-E/${image}`, flipped: false, matched: false },
        { id: index * 2 + 1, image: `./assets/images/Game2-E/${image}`, flipped: false, matched: false }
      ])
    );

    this.state.totalFlips = 0;
    this.state.totalTime = 0;
    this.isGameWon = false;

    if (this.state.loop) {
      clearInterval(this.state.loop);
    }

    this.state.loop = setInterval(() => {
      this.state.totalTime++;
    }, 1000);
  }

  flipCard(card: Card): void {
    if (!card.matched && !card.flipped) {
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
          }, 1000);
        }
      }
    }
  }

  checkWinCondition(): void {
    if (this.cards.every(card => card.matched)) {
      this.isGameWon = true;
      this.showSuccessMessage();
      clearInterval(this.state.loop);
    }
  }

  shuffleArray(array: any[]): any[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  ngOnDestroy(): void {
    if (this.state.loop) {
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

      const overlay = document.getElementById('overlay');
      const nextGameButton = document.getElementById('next-game');
      if (overlay && nextGameButton) {
        overlay.style.display = 'block';
        nextGameButton.style.display = 'block';
      }
    }, 5000); // Adjust duration to match fireworks and message timing
  }

  goToNextGame(): void {
    // Redirect to the next game
    window.location.href = '/dashboard/game-dashboard/game2/levels-g2'; // Replace with your next game URL
    //this.router.navigateByUrl('/dashboard/game-dashboard/game1/game1-content/game1-easy/game1-easy-content2');
  }


}
