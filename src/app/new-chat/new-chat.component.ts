import { Component, Output, EventEmitter } from '@angular/core';
import { WebService } from '../web.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-chats',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent {

  @Output() onPosted = new EventEmitter();
  constructor(private webService: WebService) { }

  newChatText = {
    name: 'Laurie',
    sizeInfo: '',
  };

  post() {
    this.webService.postChat(this.newChatText);
    this.onPosted.emit(this.newChatText);
  }

}
