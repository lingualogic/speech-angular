# Speech-Angular Schnelleinstieg für Intent

In unseren Schnelleinstiegen wollen wir Angluar Apps erstellen und sie um Sprachdienste erweitern. Den Code findet Ihr im /examples Ordner.

**Neues Feature:**
Ab Version 0.5.3 verfügt Speech-Angular über den **IntentService**. Dieser ermöglicht neue Sprachdienste für die [Sprachanalyse](https://de.wikipedia.org/wiki/Sprachanalyse).

Das Beispiel könnt Ihr direkt im Speech-Angular Projektverzeichnis, ohne in den /examples Ordner wechseln zu müssen, ausführen:

	$ npm run intent

Im Folgenden erklären wir den Entwicklungsprozess Schritt für Schritt.

Wir haben die [Angular CLI](https://github.com/angular/angular-cli/wiki) verwendet, bitte installiert sie, falls ihr sie noch nicht habt.

    $ npm install -g @angular/cli

Als Ausgangspunkt wird ein neues Projekt für die *mySpeech* App erzeugt.

    $ ng new my-speech-intent
    $ cd my-speech-intent

Um die App um Sprachdienste erweitern zu können, installieren wir speech-angular.

Das NPM-Paket *speech-angular-0.5.4.tgz* kopieren oder verschieben wir dafür in den Order von *mySpeech*. Dann können wir die Installation vornehmen.

    $ npm install speech-angular-0.5.4.tgz

Weiter geht es in der App. Zur Programmierung können wir [VScode](https://code.visualstudio.com/) empfehlen.

## IntentService

Mit dem neuen IntentService wollen wir [Sprachverstehen](https://de.wikipedia.org/wiki/Sprachanalyse) mit Hilfe von Intents realisieren.

Hierzu wird ein Natural Language Understanding (NLU) Modell benötigt. Diesen realisieren wir mit dem [Nuance Cloud-Dienst](./cloud/Nuance.md). Um dieses zu verwenden müssen zunächst folgende Voraussetzungen erfüllt werden.

### Voraussetzungen für den Nuance Cloud-Dienst

Um den Nuance Cloud-Dienst nutzen zu können, muss ein Nuance-Mix Account eingerichtet sein und die Nuance-Credentials heruntergeladen werden. Dann legt man die Datei nuance-credentials.ts im Unterverzeichnis *src/config* von *mySpeech* an und trägt folgende Konstanten ein:

* **APP_ID**  - Nuance App-ID vom Nuance-Mix Account
* **APP_KEY** - Nuance App-Key vom Nuance-Mix Account
* **NLU_TAG** - Nuance Nlu-Tag vom Nuance-Mix Account

Die **Datei src/config/nuance-credentials.ts** sollte folgendes beinhalten:

	/**
	 * Nuance Credentials
	 */
	
	export const APP_ID = ''; 			// <--- Hier die eigene Nuance APPID eintragen
	export const APP_KEY = '';       	// <--- Hier den eigenen Nuance APPKEY eintragen 
	export const NLU_TAG = '';       // <--- Hier en eigenen Nuance NLUTAG eintragen


Diese Datei darf nicht in ein Git-Repository übernommen werden. Dazu wird in der .gitignore Datei von *mySpeech* Name der Konfigdateien eingetragen.
 
	# Konfigdateien

	nuance-credentials*
	
### Integration des NuanceModule von Speech-Angular


Nachdem wir die Voraussetzungen umgesetzt haben kann die Integration des NuanceModels in die *mySpeech* App folgen. Es muss das NuanceModule von Speech-Angular in die **src/main.ts** Datei von der *mySpeech* App eingebaut werden, wie im nachfolgend Beispielcode gezeigt.

	import { enableProdMode } from '@angular/core';
	import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
	
	import { AppModule } from './app/app.module';
	import { environment } from './environments/environment';
	
	
	// Speech-Angular 
	
	import { NuanceModule } from 'speech-angular';
	
	
	// Nuance-Credentials
	
	// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
	import { APP_ID, APP_KEY, NLU_TAG } from './config/nuance-credentials';
	const nuanceOption = {
	  nuanceAppId: APP_ID,
	  nuanceAppKey: APP_KEY,
	  nuanceNluTag: NLU_TAG
	};
	
	
	// Initialisierung des Nuance Cloud-Dienstes
	
	NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
	  console.log('Nuance:', aNuanceFlag);
	
	  // Initialisierung der Angular-Anwendung 

	  if (environment.production) {
	    enableProdMode();
	  }
	
	  platformBrowserDynamic().bootstrapModule(AppModule)
	    .catch(err => console.log(err));
	
	});


### IntentService mit Nuance Cloud-Dienst verwenden

In *app.module.ts* importieren wir den IntentService und stellen ihn als Provider zur Verfügung. 

	import { BrowserModule } from '@angular/platform-browser';
	import { FormsModule } from '@angular/forms';        // <== TwoWayBinding
	import { NgModule } from '@angular/core';
	
	import { AppComponent } from './app.component';
	
	import { IntentService } from 'speech-angular';      // <== Import IntentService
	
	@NgModule({
	    declarations: [
	        AppComponent
	    ],
	    imports: [
	        BrowserModule,
	        FormsModule
	    ],
	    providers: [
	        IntentService                                // <== Provider
	    ],
	    bootstrap: [AppComponent]
	})
	export class AppModule {}


Nun steht der Service in unseren Komponenten zur Verfügung. 

Wir öffenen **app.component.ts** und importieren den IntentService. Im Konstruktor der Klasse erzeugen wir über Dependency Injection ein IntentService Objekt. Die Funktionalität des Services kann [hier](https://lingualogic.de/speech-angular/docs/latest/api/classes/speech_intent.intentservice.html) nachgelesen werden.

Als Beispiel soll ein Text an das hinterlegte Sprachmodel gesendet werden und der gefundene Intent ausgegeben werden. Die Funktion 'start()' soll die Sprachanalyse starten. Hierzu muss der eingegebene Text und die Sprache des Sprachmodells (*de* oder *en*) übergeben werden.

    import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
    import { IntentService } from 'speech-angular'; // <== Import IntentService

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements OnInit {

        title = 'mySpeech';

        @Input() textInput: string;

        intentResult: any;

        constructor(
            private intentService: IntentService,   // <== Dependency Injection
            private ref: ChangeDetectorRef ) { }

        ngOnInit(): void {
            this.intentResult = this.listenService.resultEvent.subscribe(aIntent => {
                    this.intent = aIntent;
                    this.ref.detectChanges();
                });
        }
        start(): void {
            this.intentService.start();
        }
    }

Allerdings erfolgt die Ergebnis-Rückgabe asynchron. 
Daher verwenden wir [Events](https://lingualogic.de/speech-angular/docs/latest/api/classes/speech_intent.intentservice.html#resultevent), um das Ergebnis aufzufangen. 
Das *intentResult* wird ausgeführt, wenn eine Spracheingabe erkannt wurde. Es gibt den erkannten Intent zurück, dieser soll gesetzt werden. Anschließend muss der View aktualisiert werden.
Die Integration findet in der *ngOnInit* Funktion der *AppComponent* Klasse statt, die zuvor um das OnInit-Interface erweitert wurde.

Um die Sprachanalyse zu testen, bearbeiten wir die Template Datei **app.component.html**. Wir fügen einen Input - der den erkannten Intent anzeigt - und einen Button - der die *start()* Funktion aufruft - hinzu.

    <div style="text-align:center">
	  <h1>
	      Willkommen zu {{ title }}!
	  </h1>
	
	  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
	
	  <h2>Diese App kann Texte analysieren:</h2>
	
	  <input type="text" placeholder="  " [(ngModel)]='textInput' name="textInput" style="padding: 15px 32px; font-size: 16px;" />
	  <button (click)="start()" style="padding: 15px 32px; font-size: 16px;">Drück mich!</button>
	
	  <h2>Der gefundene Intent lautet: {{intentName}}</h2>
	</div>

Damit das Two-Way-Binding vom TextInput funktioniert haben wir zuvor in 'app.module.ts' das FormsModule hinzugefügt.

Nun kann die App gestartet und getestet werden.

    $ ng serve --open

In Chrome öffnen wir anschließend [http://localhost:4200/](http://localhost:4200/). Drückt den 'Drück mich!' Button und sagt etwas.

Hat die App den richtig Intent erkannt?

Den Code zu diesem Teil findet ihr unter *examples/my-speech-intent*.
