import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  lessons = [
    {
      name: 'ඝනවස්තු',
      number: '  17',
      summary: 'මෙම පාඩම හදාරා, ඔබට ඝනකය, ඝනකාභය, සහ සවිධි චතුස්තලය වැනි ඝන වස්තු ආකෘති නිර්මාණය කිරීමට, ඒවායේ මුහුණත් ගණන, දාර, සහ ශීර්ෂ ගණන පිළිබඳව අවබෝධයක් ලබා ගත හැකි වන අතර, ඝන වස්තු සඳහා පතරම් නිර්මාණය කළ හැකි වේ.',
      image: 'assets/images/Logos/lesson1Logo.png'
    },
    {
      name: 'සරල රේඛීය තල රූප',
      number: ' 12',
      summary: 'මෙම පාඩමෙන්, ඔබට ත්‍රිකෝණ, ඍජුකෝණාස්‍ර, සම චතුරස්‍ර, ත්‍රපීසියම්, සහ සමාන්තරාස්‍ර රූපවල විශේෂ ලක්ෂණ හඳුනා ගැනීමට හැකි වනු ඇත.',
      image: 'assets/images/Logos/lesson2Logo.png'
    },
    {
      name: 'පූර්ණ සංඛ්‍යා මත ගණිත ක්‍රම',
      number: ' 3',
      summary: 'මෙම පාඩම අධ්‍යයනය කිරීමෙන් ඔබට පූර්ණ සංඛ්‍යා එකතු කිරීම, අඩු කිරීම, ගුණ කිරීම, සහ බෙදීම පිළිබඳ දැඩි හැකියාවක් ලබා ගත හැක.',
      image: 'assets/images/Logos/lesson3Logo.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
