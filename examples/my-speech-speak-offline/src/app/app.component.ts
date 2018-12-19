import { Component, OnInit } from '@angular/core';    // <== Import OnInit Interface
import { SpeakService } from 'speech-angular'; // <== Import SpeakService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {        // <== Implement OnInit Interface
  title = 'mySpeech';

  constructor( private speakService: SpeakService ) { }    // <== Dependency Injection

  ngOnInit(): void {
    this.speakService.audio = true;
    this.speakService.file = 'HalloWelt';
  }

  speak(): void {
      this.speakService.text = 'Hallo Welt!';
      this.speakService.start();
    }
}
