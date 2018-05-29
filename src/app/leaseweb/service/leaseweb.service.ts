import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class LeasewebService {
  public resultSubject = new Subject();
  public defaultFilterSubject = new Subject();

  constructor(private http: HttpClient) {}

  getListData(param = {}): Observable<any> {
    return this.http.get(`/servers/list?${this.parseParam(param)}`);
  }
  private parseParam(param) {
    const pKeys = Object.keys(param);
    const params = [];
    pKeys.forEach(k => {
      params.push(`${k}=${param[k]}`);
    });
    return params.join('&');
  }
  getLocationList(): Observable<any> {
    return this.http.get(`/locations/list`);
  }
}
