import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent {
  videoList: Video[] = [];
  selectedVideo: Video | undefined;

  constructor(http: HttpClient) {
    http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .subscribe((response) => {
        this.videoList = response;
      });
  }

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
