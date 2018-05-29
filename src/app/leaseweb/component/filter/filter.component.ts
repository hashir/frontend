import { Component, OnInit } from '@angular/core';
import { LeasewebService } from '../../service/leaseweb.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'leaseweb-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
  constructor(private service: LeasewebService) {}
  filterParams = {};
  clear = false;
  ngOnInit() {
    this.service.defaultFilterSubject
      .pipe(
        tap(x => {
          this.getFiltered(x);
        })
      )
      .subscribe();
  }
  getFiltered(filter) {
    this.clear = false;
    this.filterParams = { ...this.filterParams, ...filter };
    this.service.resultSubject.next(this.filterParams);
  }
  clearFilters() {
    this.clear = true;
    this.filterParams = {};
    this.service.resultSubject.next({});
  }
}
