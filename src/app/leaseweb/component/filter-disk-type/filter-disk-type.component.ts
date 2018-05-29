import { Component, EventEmitter, OnInit, Output, OnChanges, Input } from '@angular/core';
import { DiskTypeConfig } from './filter-disk-type.config';
import { FilterInterface } from '../filter/filterInterface';

@Component({
  selector: 'leaseweb-filter-disk-type',
  templateUrl: './filter-disk-type.component.html'
})
export class FilterDiskTypeComponent implements FilterInterface, OnInit, OnChanges {
  @Output() filtered = new EventEmitter();
  @Input() clear = false;
  storageType;
  constructor() {}
  diskTyps = DiskTypeConfig;
  ngOnInit() {}

  emitValue(event) {
    if (event) {
      this.filtered.emit({ hdType: event });
    }
  }
  ngOnChanges(e) {
    if (e.clear.currentValue) {
      this.storageType = null;
    }
  }
}
