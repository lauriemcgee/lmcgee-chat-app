import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

  constructor(private http: Http) {
  }

  getChats() {
    return this.http.get('http://localhost:3000/api/v1/races').toPromise();
  }
}
