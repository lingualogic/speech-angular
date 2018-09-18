import { Component, OnInit } from '@angular/core';    // <== Import OnInit Interface
import { SpeakService, ActionService } from 'speech-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {        // <== Implement OnInit Interface
  title = 'mySpeech';
  counter = 0; 			// <== Zähler Attribut

  constructor(
    private speakService: SpeakService,
    private actionService: ActionService) { }

  ngOnInit(): void {
    this.speakService.audio = false; // <== Sprachausgabe per TTS einstellen
      this.actionService.addFunction('incrementCounter', (action) => {
        this.increment();	 return 0; // <== Startfunktion
      }, () => 0);					   // <== Stopfunktion
    }

  increment(): void { // <== Funktion zum Erhöhen des Zählers
    this.counter += 1;
  }

}
