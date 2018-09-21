import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// bot

import { BotService } from './../speech/bot/bot-service';

// action

import { ActionService } from './../speech/action/action-service';
import { ActionComponent } from './action/action.component';

// speak

import { SpeakService } from './../speech/speak/speak-service';
import { SpeakComponent } from './speak/speak.component';
import { BotComponent } from './bot/bot.component';



@NgModule({
  declarations: [
    AppComponent,
    SpeakComponent,
    ActionComponent,
    BotComponent
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
