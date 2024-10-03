import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-m-multiplication',
  templateUrl: './m-multiplication.component.html',
  styleUrls: ['./m-multiplication.component.scss']
})
export class MMultiplicationComponent implements OnInit {

  num1!: number;
  num2!: number;
  options!: number[];
  correctAnswer!: number;
  userAnswer: string = ''; // The input answer field
  correctAnswers: number = 0;
  elapsedTime: number = 0;
  timeLimit: number = 300;
  isCorrect: boolean = false;
  isWrong: boolean = false;
  feedbackMessage: string = '';
  gameOver: boolean = false;
  timeOver: boolean = false;
  errorCount: number = 0;
  score: number = 0;
  private totalEquations: number = 20;
  private timer: any;
  private presentedEquations: Set<string> = new Set<string>(); // To track presented equations

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.generateEquation();
    this.startTimer();
  }

  generateEquation() {
    do {
      this.num1 = this.getRandomNumber1();
      this.num2 = this.getRandomNumber2();
    } while (this.presentedEquations.has(`${this.num1}*${this.num2}`)); // Ensure the equation is unique

    this.correctAnswer = this.num1 * this.num2;
    this.options = this.generateOptions(this.correctAnswer);
    this.presentedEquations.add(`${this.num1}*${this.num2}`); // Track the equation
  }

  getRandomNumber1(): number {
    return Math.floor(Math.random() * (999 - 101 + 1)) + 101;
  }
  getRandomNumber2(): number {
    return Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  }




  generateOptions(correctAnswer: number): number[] {
    const options = new Set<number>();
    options.add(correctAnswer);
    while (options.size < 3) {
      const randomAnswer = this.getRandomNumber1() * this.getRandomNumber2();
      if (!options.has(randomAnswer) && randomAnswer !== correctAnswer) {
        options.add(randomAnswer);
      }
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
  }

  checkAnswer(selectedOption: number) {
    this.userAnswer = selectedOption.toString(); // Set the student's answer in the input box

    if (selectedOption === this.correctAnswer) {
      this.isCorrect = true;
      this.isWrong = false;
      this.feedbackMessage = 'නිවැරදි!..';
      this.score += 20; // Add 20 points for a correct answer
      this.correctAnswers++;
      if (this.correctAnswers < this.totalEquations) {
        setTimeout(() => {
          this.isCorrect = false;
          this.userAnswer = ''; // Clear the input box for the next equation
          this.feedbackMessage = ''; // Clear the feedback message
          this.generateEquation();
        }, 1000);
      } else {
        this.endGame(true);
      }
    } else {
      this.isCorrect = false;
      this.isWrong = true;
      this.feedbackMessage = 'වැරදි!..නැවත උත්සහ කරන්න';
      this.score -= 10; // Subtract 10 points for a wrong answer
      this.errorCount++; // Increment error count
    }
  }


  startTimer(): void {
    this.timer = setInterval(() => {
      this.elapsedTime++;
      if (this.elapsedTime >= this.timeLimit) {
        this.endGame(false);
      }
    }, 1000);
  }

  endGame(won: boolean): void {
    clearInterval(this.timer);
    this.timeOver = !won;
    this.gameOver = won;
    if(this.timeOver){
      this.lostGame();
    }
    if (this.gameOver){
      this.showSuccessMessage();
    }
  }




  resetGame(): void {
    this.score = 0;
    this.elapsedTime = 0;
    this.feedbackMessage='';
    this.userAnswer='';
    this.timeOver = false;
    this.gameOver = false;
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


  lostGame(): void {
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
    this.resetGame();
  }

  goHome(): void {
    this.renderer.setStyle(document.getElementById('game-over-buttons'), 'display', 'none');
    this.renderer.setStyle(document.getElementById('overlay'), 'display', 'none');
    // Implement redirection to home page
    window.location.href = '/dashboard/game-dashboard/game3/g3-content/g3-medium/m-choose';
  }

  goToNextGame(): void {
    window.location.href = '/dashboard/game-dashboard/game3/g3-content/g3-medium/m-choose';
  }

}


