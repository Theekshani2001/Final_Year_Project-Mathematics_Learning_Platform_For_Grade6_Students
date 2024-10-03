import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-g1-medium-content2',
  templateUrl: './g1-medium-content2.component.html',
  styleUrls: ['./g1-medium-content2.component.scss']
})
export class G1MediumContent2Component implements OnInit {

  private correctOrder: string[] = [
    'block1', 'block2', 'block3',
    'block4', 'block5', 'block6',
    'block7', 'block8', 'block9'
  ];
  private puzzleSolved: boolean = false;
  private turnCount: number = 0;
  private startTime: number = 0;
  private timerInterval: any;

  // constructor(private renderer: Renderer2) { }
  // constructor(private router: Router) {}
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.shufflePuzzle();
    this.startTime = Date.now();
    this.startTimer();
  }

  drag(event: DragEvent): void {
    event.dataTransfer?.setData("text", (event.target as HTMLElement).id);
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  drop(event: DragEvent): void {
    event.preventDefault();
    const data = event.dataTransfer?.getData("text");
    const element = document.getElementById(data!);
    if (element) {
      (event.target as HTMLElement).appendChild(element);
    }
    this.turnCount++;
    this.updateTurnCount();
    this.checkIfSolved();
  }

  resetPuzzle(): void {
    window.location.reload();
  }

  shufflePuzzle(): void {
    const parent = document.getElementById('drag');
    const frag = document.createDocumentFragment();
    while (parent?.children.length) {
      frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent?.appendChild(frag);
  }

  checkIfSolved(): void {
    const dropBoxes = document.querySelectorAll('.board .dropBox');
    let isSolved = true;

    dropBoxes.forEach((box, index) => {
      const child = box.firstChild as HTMLElement;
      if (!child || child.id !== this.correctOrder[index]) {
        isSolved = false;
      }
    });

    if (isSolved && !this.puzzleSolved) {
      this.puzzleSolved = true;
      this.stopTimer();
      this.showSuccessMessage();
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

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      const minutes = Math.floor(elapsed / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);
      const timerElement = document.getElementById('timer');
      if (timerElement) {
        timerElement.innerText = `${this.formatNumber(minutes)}:${this.formatNumber(seconds)}`;
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timerInterval);
  }

  updateTurnCount(): void {
    const turnElement = document.getElementById('turn-count');
    if (turnElement) {
      turnElement.innerText = this.turnCount.toString();
    }
  }

  formatNumber(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  goToNextLevel(): void {
    // Redirect to the next game
    window.location.href = '/dashboard/game-dashboard/game1/levels-game1'; // Replace with your next game URL
    //this.router.navigateByUrl('/dashboard/game-dashboard/game1/game1-content/game1-easy/game1-easy-content2');
  }
}
