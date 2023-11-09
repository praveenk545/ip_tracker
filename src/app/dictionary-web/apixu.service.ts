import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getvalues(location: any) {
    return this.http.get(
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + location
    );
  }
}
