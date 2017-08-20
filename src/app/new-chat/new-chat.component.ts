import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-chats',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent {
  constructor(private webService: WebService) { }

  newChatText = {
    currentUser: 'Laurie',
    text: '',
  };

  post() {
    console.log(this.newChatText.text);
  }

}
