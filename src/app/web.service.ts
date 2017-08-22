import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3000/api/v1/races';
  chats = [];
  constructor(private http: Http) {
    this.getChats();
  }

  async getChats() {
    try {
      const response = await this.http.get(this.BASE_URL).toPromise();
      this.chats = response.json();
    } catch (error) {
      console.log('Could not get chats!');
    }
  }

  postChat(newChatText) {
    return this.http.post(this.BASE_URL, newChatText).toPromise();
  }
}
