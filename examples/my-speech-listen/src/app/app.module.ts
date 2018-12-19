import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';        // <== fuers TwoWayBinding
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ListenService } from 'speech-angular';      // <== Import ListenService

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        ListenService                                // <== Provider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
