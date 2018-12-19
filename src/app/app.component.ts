// angular

import { Component, OnInit } from '@angular/core';

// speech

import {
    SPEECHSERVICE_API_VERSION,
} from './../speech';


// App-Komponente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Speech-Angular-App';

  constructor() {}

  ngOnInit(): void {
    console.log('Speech-Angular Version:', SPEECHSERVICE_API_VERSION);
  }

}
