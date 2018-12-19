import { Component } from '@angular/core';
import { SpeakService } from 'speech-angular'; // <== Import SpeakService

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'mySpeech';

    constructor( private speakService: SpeakService ) { }    // <== Dependency Injection

    start(): void {
        this.speakService.text = 'Hallo Welt!';
        this.speakService.start();
    }
}
