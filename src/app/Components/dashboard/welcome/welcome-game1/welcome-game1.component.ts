// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-welcome-game1',
//   templateUrl: './welcome-game1.component.html',
//   styleUrls: ['./welcome-game1.component.scss']
// })
// export class WelcomeGame1Component implements OnInit {
//
//   private videoElement: HTMLVideoElement | null = null;
//   isMuted: boolean = false;
//
//   constructor() { }
//
//   ngOnInit(): void {
//     this.videoElement = document.getElementById('background-video') as HTMLVideoElement;
//   }
//
//   toggleVolume(): void {
//     if (this.videoElement) {
//       this.isMuted = !this.isMuted;
//       this.videoElement.muted = this.isMuted;
//
//       const icon = document.getElementById('volume-icon') as HTMLElement;
//       if (this.isMuted) {
//         icon.classList.remove('fa-volume-up');
//         icon.classList.add('fa-volume-mute');
//       } else {
//         icon.classList.remove('fa-volume-mute');
//         icon.classList.add('fa-volume-up');
//       }
//     }
//   }
//
// }
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome-game1',
  templateUrl: './welcome-game1.component.html',
  styleUrls: ['./welcome-game1.component.scss']
})
export class WelcomeGame1Component implements OnInit {

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
