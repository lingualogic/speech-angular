import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// bot

import { BotService } from './../speech/bot/bot-service';
import { BotComponent } from './bot/bot.component';

// action

import { ActionService } from './../speech/action/action-service';
import { ActionComponent } from './action/action.component';

// speak

import { SpeakService } from './../speech/speak/speak-service';
import { SpeakComponent } from './speak/speak.component';

// listen

import { ListenService } from './../speech/listen/listen-service';
import { ListenComponent } from './listen/listen.component';



@NgModule({
  declarations: [
    AppComponent,
    SpeakComponent,
    ActionComponent,
    BotComponent,
    ListenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BotService, ActionService, SpeakService, ListenService],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor() {
        // console.log('AppModule: constructor');
        // BotService-Konfiguration
        const botServiceConfig = BotService.getConfig();
        botServiceConfig.errorOutputFlag = true;
        // ActionService-Konfiguration
        const actionServiceConfig = ActionService.getConfig();
        actionServiceConfig.errorOutputFlag = true;
        // SpeakService-Konfiguration
        const speakServiceConfig = SpeakService.getConfig();
        speakServiceConfig.errorOutputFlag = true;
        // ListenService-Konfiguration
        const listenServiceConfig = ListenService.getConfig();
        listenServiceConfig.errorOutputFlag = true;
    }

}
