import { Component, OnInit, EventEmitter, Output, OnChanges, Input } from '@angular/core';
import { FilterInterface } from '../filter/filterInterface';
import { FilterDiskConfig } from './filter-disk.config';

@Component({
  selector: 'leaseweb-filter-disk',
  templateUrl: './filter-disk.component.html'
})
export class FilterDiskComponent implements FilterInterface, OnInit, OnChanges {
  @Output() filtered = new EventEmitter();
  @Input() clear = false;
  value = [0, 10];
  constructor() {}
  diskData = FilterDiskConfig;

  ngOnInit() {}

  emitValue(event) {
    this.value = event;
    const minHdd = this.diskData[event[0]].value;
    const maxHdd = this.diskData[event[1]].value;
    this.filtered.emit({ minHdd: minHdd, maxHdd: maxHdd });
  }
  ngOnChanges(e) {
    if (e.clear.currentValue) {
      this.value = [0, 10];
    }
  }
}
