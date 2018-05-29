import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  FilterComponent,
  FilterDiskComponent,
  FilterDiskTypeComponent,
  FilterLocationComponent,
  FilterRamComponent,
  ListComponent
} from './component';

import { RangeSliderModule } from 'ngx-range-slider';
import { LeasewebService } from './service/leaseweb.service';
import { HttpClientModule } from '@angular/common/http';
import { UiSliderModule } from '../ui-slider/ui-slider.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RangeSliderModule,
    UiSliderModule
  ],
  declarations: [
    FilterComponent,
    FilterRamComponent,
    FilterDiskComponent,
    FilterDiskTypeComponent,
    FilterLocationComponent,
    ListComponent
  ],
  exports: [FilterComponent, ListComponent],
  providers: [
    HttpClientModule,
    LeasewebService
  ]
})
export class LeasewebModule { }
