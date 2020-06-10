import { Component } from '@angular/core';
import { videoData } from '../../data';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  videos = videoData;
}
