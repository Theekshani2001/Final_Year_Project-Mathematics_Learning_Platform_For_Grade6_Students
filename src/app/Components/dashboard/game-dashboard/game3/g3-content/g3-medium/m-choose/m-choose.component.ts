import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-m-choose',
  templateUrl: './m-choose.component.html',
  styleUrls: ['./m-choose.component.scss']
})
export class MChooseComponent implements OnInit {

  buttonsVisible: boolean = false;
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

  startGame(): void {
    this.buttonsVisible = true;
    setTimeout(() => {
      document.querySelector('.overlay')?.classList.add('buttons-visible');
    }, 0); // Immediately start the movement
  }

  additionPage(): void {
    window.location.href = '/dashboard/game-dashboard/game3/g3-content/g3-medium/m-addition';
  }
  subtractionPage(): void {
    window.location.href = '/dashboard/game-dashboard/game3/g3-content/g3-medium/m-subtraction';
  }
  multiplicationPage(): void {
    window.location.href = '/dashboard/game-dashboard/game3/g3-content/g3-medium/m-multiplication';
  }
  divisionPage(): void {
    window.location.href = '/dashboard/game-dashboard/game3/g3-content/g3-medium/m-division';
  }
}
