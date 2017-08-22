import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { WebService } from './web.service';
import { NewChatComponent } from './new-chat/new-chat.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    NewChatComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
