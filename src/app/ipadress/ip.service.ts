import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ipService {
  constructor(private http: HttpClient) {}

  getIPvalue(location: any) {
    return this.http.get('http://ip-api.com/json/' + location);
  }
}
