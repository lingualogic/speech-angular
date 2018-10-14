import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SpeakService, ActionService, BotService } from 'speech-angular';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { BotComponent } from './bot/bot.component';      // <== Import Services

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BotComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        SpeakService,
        ActionService,
        BotService                                              // <== Provider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
