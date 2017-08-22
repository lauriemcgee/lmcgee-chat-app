import { Component } from '@angular/core';
import { WebService } from '../web.service';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  providers: [ WebService ]
})
export class ChatsComponent {
  constructor(public webService: WebService) {}
 }
