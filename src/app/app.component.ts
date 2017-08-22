import { Component, ViewChild } from '@angular/core';
import { ChatsComponent } from './chats/chats.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { WebService } from './web.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChatsComponent) chats: ChatsComponent;

  onPosted(newChatText) {
    this.chats.webService.chats.push(newChatText);
  }
}
