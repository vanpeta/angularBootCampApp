import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from '../../types';
import { VideoDataService } from 'src/app/video-data.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent {
  videoList: Observable<Video[]>;
  selectedVideo: Video | undefined;

  constructor(vds: VideoDataService) {
    this.videoList = vds.getTransformedVideos();
  }

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
