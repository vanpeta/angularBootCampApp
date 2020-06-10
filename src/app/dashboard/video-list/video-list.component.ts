import { Component } from '@angular/core';

import { videoData } from '../../data';
import { Video } from '../../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  videos = videoData;
  selectedVideo: Video | undefined;

  videoClicked(video: Video) {
    console.log(video);
    this.selectedVideo = video;
  }
}
