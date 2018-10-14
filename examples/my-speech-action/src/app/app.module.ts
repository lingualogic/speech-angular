import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SpeakService, ActionService } from 'speech-angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
      SpeakService,
      ActionService
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
