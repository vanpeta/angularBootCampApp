import { Component } from '@angular/core';

import { videoData } from '../../data';
import { Video } from '../../types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent {
  videoList = videoData;
  selectedVideo: Video | undefined;

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
