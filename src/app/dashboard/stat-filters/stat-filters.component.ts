import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css'],
})
export class StatFiltersComponent {
  videoSearch = new FormControl('', [], []);

  constructor() {
    this.videoSearch.valueChanges.subscribe((searchVal: number) =>
      console.log(typeof searchVal)
    );
  }
}
