import { Component, OnInit } from '@angular/core';
import { LeasewebService } from '../../service/leaseweb.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'leaseweb-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  listData;
  constructor(private service: LeasewebService) {}
  totalNumber = 0;
  ngOnInit() {
    this.service.resultSubject
      .pipe(
        switchMap(p => {
          return this.service.getListData(p);
        })
      )
      .subscribe(res => {
        this.listData = res;
        this.totalNumber = this.listData.length;
      });
  }
}
