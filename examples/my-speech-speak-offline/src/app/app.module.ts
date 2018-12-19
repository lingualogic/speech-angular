import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SpeakService } from 'speech-angular';      // <== Import SpeakService

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SpeakService                                    // <== Provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
