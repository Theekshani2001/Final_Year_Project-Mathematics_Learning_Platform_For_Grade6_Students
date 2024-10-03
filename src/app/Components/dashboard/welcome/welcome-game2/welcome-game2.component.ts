import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-welcome-game2',
  templateUrl: './welcome-game2.component.html',
  styleUrls: ['./welcome-game2.component.scss']
})
export class WelcomeGame2Component implements OnInit {

  @ViewChild('backgroundVideo', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  isMuted: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleVolume(): void {
    if (this.videoElement) {
      this.isMuted = !this.isMuted;
      this.videoElement.nativeElement.muted = this.isMuted;

      const icon = document.getElementById('volume-icon') as HTMLElement;
      if (this.isMuted) {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
      } else {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
      }
    }
  }
}
