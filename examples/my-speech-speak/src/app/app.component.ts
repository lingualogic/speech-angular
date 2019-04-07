import { Component, LOCALE_ID, Inject } from '@angular/core';
import { SpeakService } from 'speech-angular'; // <== Import SpeakService

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'mySpeech';

    constructor( private speakService: SpeakService,                // <== Dependency Injection
                 @Inject(LOCALE_ID) private localeId: string) { }

    start(): void {
        if (this.localeId === 'en') {
            this.speakService.text = 'Hello World!';
            this.speakService.language = 'en';
        } else {
            this.speakService.text = 'Hallo Welt!';
        }
        this.speakService.start();
    }
}
