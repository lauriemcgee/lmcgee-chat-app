import { Component } from '@angular/core';
import { WebService } from '../web.service';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html'
})
export class ChatsComponent {
  chats = [];
  constructor (private webService: WebService) {}

// called once constructor initializes
  async ngOnInit() {
    let response = await this.webService.getChats();
    this.chats = response.json();
  }
 }
