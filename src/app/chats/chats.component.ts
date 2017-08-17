import { Component } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html'
})
export class ChatsComponent {
  chats = [
    { message: 'Hey you kids', userName: 'user123456'},
    { message: 'Get off my lawn', userName: 'user654321'},
    { message: 'Hope this works', userName: 'user123978'}
  ];
 }
