import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { WebService } from './web.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
