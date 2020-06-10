import { Component } from '@angular/core';

import { videoData } from '../../data';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent {
  videoList = videoData;
}
