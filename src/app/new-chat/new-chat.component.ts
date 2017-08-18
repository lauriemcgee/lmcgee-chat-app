import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-new-chats',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent {

  constructor(private webService : WebService) { }

}
