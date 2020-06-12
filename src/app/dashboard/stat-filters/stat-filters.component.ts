import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VideoDataService } from 'src/app/video-data.service';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css'],
})
export class StatFiltersComponent implements OnDestroy {
  videoSearch = new FormControl('', [], []);
  destroy = new Subject();

  constructor(vds: VideoDataService) {
    this.videoSearch.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged(), takeUntil(this.destroy))
      .subscribe((searchVal: string) => {
        vds.searchVideos(searchVal);
      });
  }

  ngOnDestroy() {
    this.destroy.next(); // clean up observable
    this.destroy.complete(); // cleans up the subject
  }
}
