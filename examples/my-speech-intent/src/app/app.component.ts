import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { IntentService } from 'speech-angular'; // <== Import IntentService


// Hier wird die Sprache festgelegt, die auch im Modell verwendet wird

const LANGUAGE = 'de';
// const LANGUAGE = 'en';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    title = 'mySpeech';

    @Input() textInput: string;

    // Events

    intentResultEvent: any = null;
    errorEvent: any = null;

    // Intent

    intentActiveFlag = false;
    intentName = '';
    languageText = '';

    // Error

    errorText = '';


    constructor(
        private intentService: IntentService,   // <== Dependency Injection
        private ref: ChangeDetectorRef ) { }


    ngOnInit(): void {
        this.intentResultEvent = this.intentService.resultEvent.subscribe((aIntent: any) => {
            console.log('===> Intent:', aIntent.intent ); // , ' Confidence:', aIntent.confidence);
            this.intentName = aIntent.intent; // + ' (Confidence = ' + aIntent.confidence + ')';
            this.errorText = '';
            this.ref.detectChanges();
        });
        this.errorEvent = this.intentService.errorEvent.subscribe((aError: any) => {
            if ( this.intentActiveFlag ) {
                console.log('===> Error:', aError.message);
                this.errorText = aError.message;
                this.ref.detectChanges();
            }
        });
        // pruefen auf vorhandene Google-NLU
        if ( this.intentService.setNLU( 'NLUGoogle' ) === 0 ) {
            console.log('Google Cloud-Dienst ist bereit');
            this.intentActiveFlag = true;
            this.errorText = '';
            // Sprache einstellen
            this.intentService.language = LANGUAGE;
            if ( this.intentService.language === 'de' ) {
                this.languageText = 'deutsche';
            } else if ( this.intentService.language === 'en' ) {
                this.languageText = 'englische';
            }
        } else {
            console.log('Google Cloud-Dienst ist nicht bereit');
            this.intentActiveFlag = false;
            this.errorText = 'Der Google Cloud-Dienst ist nicht bereit, bitte die Nuance-Credentials prüfen!';
        }
    }


    ngOnDestroy(): void {
        if ( this.intentResultEvent ) {
            this.intentResultEvent.unsubscribe();
            this.intentResultEvent = null;
        }
        if ( this.errorEvent ) {
            this.errorEvent.unsubscribe();
            this.errorEvent = null;
        }
    }


    // NLU starten

    start(): void {
        // pruefen auf vorhandene NLU
        if ( this.intentActiveFlag ) {
            this.errorText = '';
            this.intentService.text = this.textInput;
            this.intentService.start();
        }
    }

}
