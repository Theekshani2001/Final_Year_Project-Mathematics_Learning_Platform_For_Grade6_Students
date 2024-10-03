import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit {
  @ViewChild('lessonVideo', { static: false }) lessonVideo!: ElementRef<HTMLVideoElement>;

  isPlaying = false;
  isMuted = false;

  constructor() { }

  ngOnInit(): void {}

  togglePlayPause(): void {
    const video = this.lessonVideo.nativeElement;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  toggleMute(): void {
    const video = this.lessonVideo.nativeElement;
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }

  toggleFullscreen(): void {
    const video = this.lessonVideo.nativeElement;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullScreen) {
      (video as any).webkitRequestFullScreen();
    } else if ((video as any).mozRequestFullScreen) {
      (video as any).mozRequestFullScreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  }
}
