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
  selector: 'app-quiz3',
  templateUrl: './quiz3.component.html',
  styleUrls: ['./quiz3.component.scss']
})
export class Quiz3Component implements OnInit {

  quizStarted = false;
  showRules = true;
  quizFinished = false;
  questions: Question[] = [
    {
      question: 'පාසලක පිරිමි ළමයි 486 ක් ද ගැහැනු ළමයි 658 ක් ද සිටිති. එම පාසලේ සිටින මුළු ළමයි සංඛ්‍යාව කීයද?',
      answers: [
        { text: '1144', correct: true },
        { text: '1155', correct: false },
        { text: '1398', correct: false },
        { text: '1541', correct: false }
      ]
    },
    {
      question: 'ඉඩමක ඇති පොල් ගස්වලින් ජනවාරි මාසයේ දී පොල් ගෙඩි 1846 ක් ද මාර්තු මාසයේ දී පොල් ගෙඩි 1384 ක් ද කඩන ලදි. මෙම මාස දෙකේ දී කඩන ලද මුළු පොල් ගෙඩි ගණන කීයද?',
      answers: [
        { text: '3230', correct: true },
        { text: '3220', correct: false },
        { text: '3400', correct: false },
        { text: '3290', correct: false }
      ]
    },
    {
      question: 'පොල් ගෙඩි 475 ක් රැගෙන ගිය නිමල් ඉන් පොල් ගෙඩි 297 ක් විකුණු වේ නම්, ඉතිරි පොල් ගෙඩි ගණන කොපමණ ද?',
      answers: [
        { text: '178', correct: true },
        { text: '188', correct: false },
        { text: '168', correct: false },
        { text: '158', correct: false }
      ]
    },
    {
      question: 'රැස්වීමකට සහභාගි වූ 300කින්, පිරිමින් 192 ක් සිටියේ නම් එහි සිටි ගැහැනුන් ගණන කොපමණද?',
      answers: [
        { text: '118', correct: false },
        { text: '108', correct: true },
        { text: '102', correct: false },
        { text: '128', correct: false }
      ]
    },
    {
      question: 'ශාලාවක එක් පෙළක පුටු 57 බැගින් පේළි 35 ක් ඇත. ශාලාවේ ඇති පුටු සංඛ්‍යාව කොපමණ ද?',
      answers: [
        { text: '1885', correct: false },
        { text: '1996', correct: false },
        { text: '1995', correct: true },
        { text: '1795', correct: false }
      ]
    },
    {
      question: 'සහල් මල්ලක මිල රු 1225 ක් වේ. එබඳු සහල් මලු 75ක මිල කොපමණද?',
      answers: [
        { text: '91675', correct: false },
        { text: '91875', correct: true },
        { text: '91775', correct: false },
        { text: '92000', correct: false }
      ]
    },
    {
      question: 'පාසල් බස් රථයක ගමන් කළ හැකි උපරිම සිසුන් ගණන 55 කි. එවැනි බස් රථ 6ක ගමන් කළ හැකි උපරිම සිසුන් ගණන කොපමණද?',
      answers: [
        { text: '230', correct: false },
        { text: '330', correct: true },
        { text: '430', correct: false },
        { text: '300', correct: false }
      ]
    },
    {
      question: '16 දෙනකු යන වෑන් රථයකට අය කරනු ලබන ගාස්තුව රු 10 800කි. එම ගාස්තුව පහළොස් දෙනෙකු අතර සමව බෙදා ගන්නේ නම්, එක් අයකු ගෙවිය යුතු මුදල කීයද?',
      answers: [
        { text: '720', correct: true },
        { text: '620', correct: false },
        { text: '520', correct: false },
        { text: '820', correct: false }
      ]
    },
    {
      question: 'සබන් කැට 25 ක් බැගින් ඇති පෙට්ටි 12ක ඇති සබන් කැට, සේවකයන් පහළොස් දෙනකු අතර සමානව බෙදූ විට එක් අයකුට ලැබෙන සබන් කැට ගණන කීයද?',
      answers: [
        { text: '40', correct: false },
        { text: '30', correct: false },
        { text: '20', correct: true },
        { text: '50', correct: false }
      ]
    },
    {
      question: 'පුටු 6480 ක් පාසල් 20 කට සම සේ බෙදා දිය යුතු ව ඇත්නම් එක් පාසලකට ලැබෙන පුටු සංඛ්‍යාව කීයද?',
      answers: [
        { text: '124', correct: false },
        { text: '324', correct: true },
        { text: '424', correct: false },
        { text: '224', correct: false }
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
