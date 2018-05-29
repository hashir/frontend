import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';
import { FilterInterface } from '../filter/filterInterface';
import { LeasewebService } from '../../service/leaseweb.service';

@Component({
  selector: 'leaseweb-filter-ram',
  templateUrl: './filter-ram.component.html'
})
export class FilterRamComponent implements FilterInterface, OnInit, OnChanges {
  @Output() filtered = new EventEmitter();
  @Input() clear = false;
  constructor(private service: LeasewebService) {}
  ramCheckbox = [
    { key: '2', display: '2GB', value: false },
    { key: '4', display: '4GB', value: true },
    { key: '8', display: '8GB', value: false },
    { key: '12', display: '12GB', value: false },
    { key: '16', display: '16GB', value: false },
    { key: '24', display: '24GB', value: false },
    { key: '32', display: '32GB', value: false },
    { key: '48', display: '48GB', value: false },
    { key: '64', display: '64GB', value: false },
    { key: '96', display: '96GB', value: false }
  ];
  ngOnInit() {
    this.service.defaultFilterSubject.next(this.getRamCheckBoxValue());
  }

  emitValue() {
    this.filtered.emit(this.getRamCheckBoxValue());
  }

  getRamCheckBoxValue() {
    return {
      ram: this.ramCheckbox
        .filter(a => a.value === true)
        .map(a => a.key)
        .join(',')
    };
  }
  ngOnChanges(e) {
    if (e.clear.currentValue) {
      this.ramCheckbox.map(a => (a.value = false));
    }
  }
}
