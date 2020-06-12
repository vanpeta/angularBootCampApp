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
  selectedVideo: Observable<Video | null>;

  constructor(vds: VideoDataService) {
    this.videoList = vds.filteredVideoList;

    this.selectedVideo = vds.currentlySelectedVideoCombined;
  }
}
