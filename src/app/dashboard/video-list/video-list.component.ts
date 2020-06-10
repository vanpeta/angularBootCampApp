import { Component, Input } from '@angular/core';

import { Video } from '../../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() videos: Video[] = [];
  selectedVideo: Video | undefined;

  videoClicked(video: Video) {
    console.log(video);
    this.selectedVideo = video;
  }
}
