import { Component, OnInit } from '@angular/core';           // <== Import OnInit Interface
import { SpeakService, ActionService } from 'speech-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {                // <== Implement OnInit Interface
    title = 'mySpeech';
    counter = 0;                                             // <== Zähler Attribut

    constructor(
      private speakService: SpeakService,
      private actionService: ActionService ) { }

    ngOnInit(): void {
      this.speakService.audio = false; // <== Sprachausgabe per TTS einstellen
      this.actionService.addFunction('incrementCounter', (action) => {  // <== Action Name
          this.increment();           // <== Startfunktion
          return 0;
      }, () => 0);                    // <== Stopfunktion
    }

    increment(): void {                                     // <== Funktion zum Erhöhen des Zählers
      this.counter += 1;
    }

    start(): void {
      this.actionService.action = 'incrementCounter';       // <== Action setzen
      this.actionService.element = 'counter';               // <== Zielelement der Aktion
      this.actionService.start();                           // <== Startfunktion ausführen
      this.actionService.stop();                            // <== Stopfunktion ausführen
    }
}
