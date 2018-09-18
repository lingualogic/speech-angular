import { Component, OnInit, OnDestroy } from '@angular/core';
import { BotService } from 'speech-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bot',
  template: `bot works!`,
  styles: []
})

export class BotComponent implements OnInit, OnDestroy {

  stopEvent: any;

  constructor(
    private botService: BotService,
    private router: Router)  { }

  ngOnInit() {
    this.botService.state = 'bot';

    this.stopEvent = this.botService.stopEvent.subscribe(() => {
      this.router.navigateByUrl('/');
    });

    this.botService.start();
  }

  ngOnDestroy(): void {
    this.stopEvent.unsubscribe();
  }
}
