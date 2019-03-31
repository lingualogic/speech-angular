import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// bot

import { BotComponent } from './bot/bot.component';

// action

import { ActionComponent } from './action/action.component';

// speak

import { SpeakComponent } from './speak/speak.component';

// listen

import { ListenComponent } from './listen/listen.component';

// intent

import { IntentComponent } from './intent/intent.component';


@NgModule({
  declarations: [
    AppComponent,
    SpeakComponent,
    ActionComponent,
    BotComponent,
    ListenComponent,
    IntentComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
