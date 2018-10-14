import { Component, OnInit } from '@angular/core';
import { BotService } from 'speech-angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    constructor(
        private botService: BotService
    ) { }

    ngOnInit() {
        this.botService.state = 'home';
    }
}
