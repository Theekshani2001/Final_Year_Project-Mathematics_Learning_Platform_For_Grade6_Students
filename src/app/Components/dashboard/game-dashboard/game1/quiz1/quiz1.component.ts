import { Component, OnInit } from '@angular/core';

interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.scss']
})
export class Quiz1Component implements OnInit {
  quizStarted = false;
  showRules = true;
  quizFinished = false;
  questions: Question[] = [
    {
      question: 'ඝනකයක ඇති මුහුණත් ගණන කීයද?',
      answers: [
        { text: '6', correct: true },
        { text: '4', correct: false },
        { text: '5', correct: false },
        { text: '7', correct: false }
      ]
    },
    {
      question: 'ඝනකයක ඇති දාර ගණන කීයද?',
      answers: [
        { text: '16', correct: false },
        { text: '12', correct: true },
        { text: '8', correct: false },
        { text: '10', correct: false }
      ]
    },
    {
      question: 'ඝනකයක ඇති ශීර්ෂ ගණන කීයද?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true },
        { text: '4', correct: false },
        { text: '10', correct: false }
      ]
    },
    {
      question: 'ඝනකයක ඇති මුහුණතක හැඩය කුමක්ද?',
      answers: [
        { text: 'සිලින්ඩරාකාර', correct: false },
        { text: 'සමචතුරස්‍රාකාර', correct: true },
        { text: 'ත්‍රිකෝණාකාර', correct: false },
        { text: 'වෘත්තාකාර', correct: false }
      ]
    },
    {
      question: 'ඝනකාභයක ඇති දාර ගණන කීයද?',
      answers: [
        { text: '16', correct: false },
        { text: '12', correct: true },
        { text: '20', correct: false },
        { text: '14', correct: false }
      ]
    },
    {
      question: 'ඝනකාභයක ඇති ශීර්ෂ ගණන කීයද?',
      answers: [
        { text: '12', correct: false },
        { text: '8', correct: true },
        { text: '10', correct: false },
        { text: '6', correct: false }
      ]
    },
    {
      question: 'ඝවිධි චතුස්තලයක ඇති දාර ගණන කීයද?',
      answers: [
        { text: '10', correct: false },
        { text: '6', correct: true },
        { text: '8', correct: false },
        { text: '4', correct: false }
      ]
    },
    {
      question: 'ඝවිධි චතුස්තලයක ඇති ශීර්ෂ ගණන කීයද?',
      answers: [
        { text: '3', correct: false },
        { text: '4', correct: true },
        { text: '5', correct: false },
        { text: '6', correct: false }
      ]
    },
    {
      question: 'ඝවිධි චතුස්තලයක ඇති මුහුණතක හැඩය කුමක්ද?',
      answers: [
        { text: 'සිලින්ඩරාකාර', correct: false },
        { text: 'සමචතුරස්‍රාකාර', correct: false },
        { text: 'ත්‍රිකෝණාකාර', correct: true },
        { text: 'වෘත්තාකාර', correct: false }
      ]
    },
    {
      question: 'ඝනකාභයක ඇති මුහුණතක හැඩය කුමක්ද?',
      answers: [
        { text: 'සෘජුකෝණාස්‍රාකාර', correct: true },
        { text: 'සමචතුරස්‍රාකාර', correct: false },
        { text: 'ත්‍රිකෝණාකාර', correct: false },
        { text: 'වෘත්තාකාර', correct: false }
      ]
    }
  ];

  currentQuestionIndex = 0;
  selectedAnswers: number[] = [];
  showCorrect = false;
  timeLeft = 60;
  timer: any;
  correctAnswersCount = 0;

  constructor() {}

  ngOnInit(): void {}

  startQuiz(): void {
    this.quizStarted = true;
    this.showRules = true;
    this.currentQuestionIndex = 0;
    this.correctAnswersCount = 0;
    this.selectedAnswers = [];
    this.shuffleQuestions();
    this.shuffleAnswers();
    this.resetTimer();
  }

  continueQuiz(): void {
    this.showRules = false;
    this.startTimer();
  }

  exitQuiz(): void {
    window.location.href = '/dashboard/game-dashboard/game1/levels-game1';
  }

  startTimer(): void {
    this.resetTimer();
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.handleTimeUp();
      }
    }, 1000);
  }

  resetTimer(): void {
    this.timeLeft = 60;
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  handleTimeUp(): void {
    clearInterval(this.timer);
    this.showCorrect = true;
    setTimeout(() => {
      this.nextQuestion();
    }, 5000); // 5-second delay
  }

  selectAnswer(index: number): void {
    if (this.selectedAnswers[this.currentQuestionIndex] !== undefined) {
      return; // Prevent changing answer once selected
    }

    this.selectedAnswers[this.currentQuestionIndex] = index;
    clearInterval(this.timer);

    if (this.questions[this.currentQuestionIndex].answers[index].correct) {
      this.correctAnswersCount++;
    }

    this.showCorrect = true;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.resetQuestionState();
    } else {
      this.finishQuiz();
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.resetQuestionState();
    }
  }

  resetQuestionState(): void {
    this.showCorrect = false;
    this.resetTimer();
    this.startTimer();
  }

  finishQuiz(): void {
    clearInterval(this.timer);
    this.quizFinished = true;
  }

  replayQuiz(): void {
    this.resetTimer();
    this.quizFinished = false;
    this.startQuiz();
    this.resetQuestionState();
  }

  getSelectedAnswerIndex(): number {
    return this.selectedAnswers[this.currentQuestionIndex] ?? -1;
  }

  getCorrectAnswerIndex(): number {
    return this.questions[this.currentQuestionIndex].answers.findIndex(answer => answer.correct);
  }

  shuffleQuestions(): void {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  shuffleAnswers(): void {
    this.questions.forEach(question => {
      for (let i = question.answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
      }
    });
  }
}
