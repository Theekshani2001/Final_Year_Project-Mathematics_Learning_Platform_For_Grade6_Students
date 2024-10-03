import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-levels-g1',
  templateUrl: './levels-g1.component.html',
  styleUrls: ['./levels-g1.component.scss']
})
export class LevelsG1Component implements OnInit {

  @ViewChild('backgroundVideo', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  isMuted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.preloadVideo();
  }

  preloadVideo(): void {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    if (video) {
      video.preload = 'auto';
      video.load();
      video.play().catch(error => {
        console.error("Error trying to play the video automatically:", error);
      });
    }
  }


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
