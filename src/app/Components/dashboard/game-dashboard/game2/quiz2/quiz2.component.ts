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
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.scss']
})
export class Quiz2Component implements OnInit {

  quizStarted = false;
  showRules = true;
  quizFinished = false;
  questions: Question[] = [
    {
      question: 'සරල රේඛා ඛණ්ඩ තුනකින් සමන්විත සංවෘත තල රූපය කුමක්ද?',
      answers: [
        { text: 'ත්‍රිකෝණය', correct: true },
        { text: 'සමචතුරස්‍රය', correct: false },
        { text: 'සෘජුකෝණාස්‍රය', correct: false },
        { text: 'වෘත්තය', correct: false }
      ]
    },
    {
      question: 'සරල රේඛා ඛණ්ඩ තුනකින් සමන්විත සංවෘත තල රූපය කුමක්ද?',
      answers: [
        { text: 'ත්‍රිකෝණය', correct: true },
        { text: 'චතුරස්‍රය', correct: false },
        { text: 'සෘජුකෝණාස්‍රය', correct: false },
        { text: 'වෘත්තය', correct: false }
      ]
    },
    {
      question: 'එක් සම්මුඛ පාද යුගලයක් පමණක් එකම පරතරයක්කින් පිහිටන චතුරස්‍රය කුමක්ද?',
      answers: [
        { text: 'ත්‍රපීසියම', correct: true },
        { text: 'සමචතුරස්‍රය', correct: false },
        { text: 'සෘජුකෝණාස්‍රය', correct: false },
        { text: 'වෘත්තය', correct: false }
      ]
    },
    {
      question: 'එක් එක් සම්මුඛ පාද යුගලය එකම පරතරයක්කින් පිහිටන චතුරස්‍රය කුමක්ද?',
      answers: [
        { text: 'ත්‍රපීසියම', correct: false },
        { text: 'සමාන්ත්‍රාස්‍රය', correct: true },
        { text: 'සෘජුකෝණාස්‍රය', correct: false },
        { text: 'වෘත්තය', correct: false }
      ]
    },
    {
      question: 'සියලුම කෝණ සෘජුකෝණ වන සමාන්ත්‍රාස්‍රය මේ අතරින් කුමක්ද?',
      answers: [
        { text: 'ත්‍රිකෝණය', correct: false },
        { text: 'සමචතුරස්‍රය', correct: false },
        { text: 'සෘජුකෝණාස්‍රය', correct: true },
        { text: 'වෘත්තය', correct: false }
      ]
    },
    {
      question: 'සියලුම පාද දිගින් සමාන වූ සෘජුකෝණාස්‍රය මින් කුමක්ද?',
      answers: [
        { text: 'ත්‍රිකෝණය', correct: false },
        { text: 'සමචතුරස්‍රය', correct: true },
        { text: 'සෘජුකෝණාස්‍රය', correct: false },
        { text: 'වෘත්තය', correct: false }
      ]
    },
    {
      question: 'එකම තලයක අදින ලද රූප ගණිතයේදි හදුන්වන නම කුමක්ද?',
      answers: [
        { text: 'විෂම රූප', correct: false },
        { text: 'තල රූප', correct: true },
        { text: 'බහු රූප', correct: false },
        { text: 'සාමන්‍ය රූප', correct: false }
      ]
    },
    {
      question: 'රේඛා ඛණ්ඩ වලින් සම්පූර්ණයෙන් වටවී ඇති රූප හදුන්වන නම කුමක්ද?',
      answers: [
        { text: 'සංවෘත තල රූප', correct: true },
        { text: 'විවෘත තල රූප', correct: false },
        { text: 'සවිධි තල රූප', correct: false },
        { text: 'මින් කිසිවක් නොවේ', correct: false }
      ]
    },
    {
      question: 'බෝලයක් තල රූපයක් නොවන්නේ ඇයි?',
      answers: [
        { text: 'වෘත්තාකාර නිසා', correct: false },
        { text: 'මතුපිට ගොරෝසු නිසා', correct: false },
        { text: 'මතුපිට සමතල නොවන නිසා', correct: true },
        { text: 'කිසිදු පිලිතුරක් නිවැරදි නොවේ', correct: false }
      ]
    },
    {
      question: 'රේඛා ඛණ්ඩ වලින් සම්පූර්ණයෙන් වටවී නොමැති රූප හදුන්වන නම කුමක්ද?',
      answers: [
        { text: 'සංවෘත තල රූප', correct: false },
        { text: 'විවෘත තල රූප', correct: true },
        { text: 'සවිධි තල රූප', correct: false },
        { text: 'මින් කිසිවක් නොවේ', correct: false }
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
    window.location.href = '/dashboard/game-dashboard/game2/levels-g2';
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
