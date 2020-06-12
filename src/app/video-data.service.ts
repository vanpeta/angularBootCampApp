import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { map, switchMap, shareReplay, withLatestFrom } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { Video } from './types';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  currentlySelectedVideoHttp: Observable<Video | null>;
  currentlySelectedVideoCombined: Observable<Video | null>;

  filteredVideoList: Observable<Video[]>;

  private videosFilter = new BehaviorSubject('');

  constructor(private http: HttpClient, route: ActivatedRoute) {
    const videoId: Observable<string | null> = route.queryParamMap.pipe(
      map((params) => params.get('videoId'))
    );

    this.filteredVideoList = this.videosFilter.pipe(
      switchMap((filter) => this.getVideos(filter)),
      shareReplay(1)
    );

    // truthy ({}, 'asd', -1, 1, []), falsy ('', 0, null, undefined)
    // !falsey => true
    // !truthy => false

    // !!falsey => false
    // !!truthy => true

    // '5' == 5 (true)
    // '5' === 5 (false)

    this.currentlySelectedVideoHttp = videoId.pipe(
      switchMap((id) => {
        if (!!id) {
          return http.get<Video>(`${environment.apiUrl}/videos/${id}`);
        } else {
          return of(null);
        }
      }),
      shareReplay(1)
    );

    // withLatestFrom
    // Can only use this if the `this.videos` global observable exists
    // this.currentlySelectedVideoCombined = videoId.pipe(
    //   withLatestFrom(this.videos),
    //   map(args => {})
    // );

    // combineLatest
    this.currentlySelectedVideoCombined = combineLatest([
      videoId,
      this.getTransformedVideos(),
    ]).pipe(
      map(([id, videos]) => {
        return videos.find((video) => video.id === id) || null;
      }),
      shareReplay(1)
    );
  }

  getVideos(q?: string): Observable<Video[]> {
    return this.http.get<Video[]>(
      `${environment.apiUrl}/videos${q ? `?q=${q}` : ''}`
    );
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

  searchVideos(searchTerm: string) {
    this.videosFilter.next(searchTerm);
  }
}
