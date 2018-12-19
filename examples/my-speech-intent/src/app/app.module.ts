import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';        // <== TwoWayBinding
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { IntentService } from 'speech-angular';      // <== Import IntentService

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        IntentService                                // <== Provider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
