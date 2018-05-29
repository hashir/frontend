import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { LeasewebService } from '../../service/leaseweb.service';
import { FilterInterface } from '../filter/filterInterface';

@Component({
  selector: 'leaseweb-filter-location',
  templateUrl: './filter-location.component.html'
})
export class FilterLocationComponent implements FilterInterface, OnInit, OnChanges {
  @Output() filtered = new EventEmitter();
  @Input() clear = false;
  constructor(private service: LeasewebService) {}
  locationList = [];
  location;
  ngOnInit() {
    this.service.getLocationList().subscribe(res => (this.locationList = res));
  }
  emitValue(event) {
    this.filtered.emit({ location: event });
  }
  ngOnChanges(e) {
    if (e.clear.currentValue) {
      this.location = null;
    }
  }
}
