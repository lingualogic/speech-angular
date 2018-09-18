import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// bot

import { BotService } from './../speech/bot/bot-service';

// action

import { ActionService } from './../speech/action/action-service';

// speak

import { SpeakService } from './../speech/speak/speak-service';
import { SpeakComponent } from './speak/speak.component';


@NgModule({
  declarations: [
    AppComponent,
    SpeakComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BotService, ActionService, SpeakService],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor() {
        // console.log('AppModule: constructor');
        // BotService-Konfiguration
        const botServiceConfig = BotService.getConfig();
        botServiceConfig.errorOutputFlag = true;
    }

}
