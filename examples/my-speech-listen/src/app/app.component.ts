import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ListenService } from 'speech-angular'; // <== Import ListenService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mySpeech';

  @Input() textInput: string;

  listenResult: any;

  constructor(
    private listenService: ListenService,   // <== Dependency Injection
    private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.listenResult = this.listenService.resultEvent.subscribe(aText => {
      this.textInput = aText;
      this.ref.detectChanges();
    });
  }

  start(): void {
    this.listenService.start();
  }
}
