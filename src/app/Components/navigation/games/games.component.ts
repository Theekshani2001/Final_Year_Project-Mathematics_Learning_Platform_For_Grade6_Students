import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games = [
    {
      name: 'ඝන වස්තු ප්‍රෙහෙලිකාව',
      description: '"ඝන වස්තු ප්‍රෙහෙලිකාව" යනු සිසුන්ට විනෝදජනකව, ආකර්ෂණීයව ඝන වස්තු හඳුනා ගැනීමේ හැකියාව සංවර්ධනය කරන ප්‍රෙහෙලිකා ක්‍රීඩාවකි. මෙම ක්‍රීඩාවේදී ඝන වස්තු කැබලිවලට බිඳී පවතී, මෙහිදී සිසුන් ඝන වස්තුව හඳුනාගෙන ක්‍රීඩාව අවසන් කළ යුතුය.',
      lesson: 'ඝනවස්තු',
      teacherBenefits: 'Track student progress, Identify areas for improvement',
      studentBenefits: 'Interactive learning, Builds foundational skills',
      image: 'assets/images/Logos/game1Logo.png'
    },
    {
      name: 'හැඩ තරගය',
      description: 'හැඩ තරගය යනු මනස පුහුණු කරන ක්‍රීඩාවක් වන අතර, මෙහිදී ඔබට කාඩ්පත්වල පිහිටුනු සමාන හැඩතල අමතක නොකර, සොයා ගත යුතුය. මෙම ක්‍රීඩාව මඟින් ඔබේ මතක ශක්තිය වර්ධනය කිරීමේ හැකියාව ලැබෙන අතර, විනෝදජනක අත්දැකීමක් ලබා ගත හැකිය.',
      lesson: 'සරල රේඛීය තල රූප',
      teacherBenefits: 'Real-time assessment, Engages students with visual learning',
      studentBenefits: 'Visual learning, Reinforces geometric concepts',
      image: 'assets/images/Logos/game2Logo.png'
    },
    {
      name: 'ගණන් හදමු',
      description: '"ගණන් හදමු" යනු අඩු කිරීම, එකතු කිරීම, ගුණනය කිරීම සහ බෙදීම යන මූලික ගණිත ක්‍රම භාවිතා කරමින් ගණිත චින්තනය වර්ධනය කරවන ගණිත ක්‍රීඩාවකි. මෙම ක්‍රීඩාව, ගණිතමය කුසලතා වැඩිදියුණු කිරීමට සහ ගණිතය විනෝදදායක ලෙස අධ්‍යයනය කිරීමට උදව් වේ.',
      lesson: 'පූර්ණ සංඛ්‍යා මත ගණිත ක්‍රම',
      teacherBenefits: 'Customizable quizzes, Detailed analytics',
      studentBenefits: 'Challenges critical thinking, Strengthens algebra skills',
      image: 'assets/images/Logos/game3Logo.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
