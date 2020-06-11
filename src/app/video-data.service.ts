import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { Video } from './types';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(environment.apiUrl + '/videos');
  }

  getTransformedVideos(): Observable<Video[]> {
    return this.getVideos().pipe(
      map((videos) =>
        videos.map((video) => ({
          ...video,
          title: video.title.toUpperCase(),
        }))
      )
    );
  }
}
