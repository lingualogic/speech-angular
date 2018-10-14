# Speech-Angular Schnelleinstieg für Listen

In unseren Schnelleinstiegen wollen wir Angluar Apps erstellen und sie um Sprachdienste erweitern. Den Code findet Ihr im /examples Ordner.

**Neues Feature:**
Ab Version 0.5.1 verfügt Speech-Angular über den **ListenService**. Dieser ermöglicht neue Sprachdienste für [Spracherkennung](https://de.wikipedia.org/wiki/Spracherkennung).

Das Beispiel könnt Ihr direkt im Speech-Angular Projektverzeichnis, ohne in den /examples Ordner wechseln zu müssen, ausführen:

	$ npm run listen

Im Folgenden erklären wir den Entwicklungsprozess Schritt für Schritt.

Wir haben die [Angular CLI](https://github.com/angular/angular-cli/wiki) verwendet, bitte installiert sie, falls ihr sie noch nicht habt.

    $ npm install -g @angular/cli

Als Ausgangspunkt wird ein neues Projekt für die 'mySpeech' App erzeugt.

    $ ng new my-speech-listen
    $ cd my-speech-listen

Um die App um Sprachdienste erweitern zu können, installieren wir speech-angular.

Das NPM-Paket 'speech-angular-0.5.1.tgz' kopieren oder verschieben wir dafür in den 'mySpeech' Order. Dann können wir die Installation vornehmen.

    $ npm install speech-angular-0.5.1.tgz

Weiter geht es in der App. Zur Programmierung können wir [VScode](https://code.visualstudio.com/) empfehlen.

## ListenService

Mit dem neuen ListenService wollen wir [Spracherkennung](https://de.wikipedia.org/wiki/Spracherkennung) realisieren.

In 'app.module.ts' importieren wir den Service und stellen ihn als Provider zur Verfügung. 

    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule } from '@angular/forms';        // <== fuers TwoWayBinding
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';

    import { ListenService } from 'speech-angular';      // <== Import ListenService

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            FormsModule
        ],
        providers: [
            ListenService                                // <== Provider
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule {}

Nun steht der Service in unseren Komponenten zur Verfügung. 
Wir öffenen 'app.component.ts' und importieren den ListenService. Im Konstruktor der Klasse erzeugen wir über Dependency Injection ein ListenService Objekt. Die Funktionalität des Services kann [hier](https://lingualogic.de/speech-angular/docs/latest/api/classes/speech_listen.listenservice.html) nachgelesen werden.

Als Beispiel soll ein gesprochener Text erkannt und ausgegeben werden. Der Eingangsparameter bekommt den @Input-Decorator.
Die Funktion 'start()' soll die Spracherkennung starten.

    import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
    import { ListenService } from 'speech-angular'; // <== Import ListenService

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {

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

Allerdings erfolgt die Ergebnis-Rückgabe asynchron. 
Daher verwenden wir [Events](https://lingualogic.de/speech-angular/docs/latest/api/classes/speech_listen.listenservice.html#mlistenresultevent), um das Ergebnis aufzufangen. 
Das 'listenResult' wird ausgeführt, wenn eine Spracheingabe erkannt wurde. Es gibt den erkannten Text zurück, dieser soll gesetzt werden. Anschließend muss der View aktualisiert werden.
Die Integration findet in der 'ngOnInit' Funktion der 'AppComponent' Klasse statt, die zuvor um das OnInit-Interface erweitert wurde.

Um die Spracherkennung zu testen, bearbeiten wir die Template Datei 'app.component.html'. Wir fügen einen Input - der den erkannten Text anzeigt - und einen Button - der die 'start()' Funktion aufruft - hinzu.

    <div style="text-align:center">
        <h1>
            Willkommen zu {{ title }}!
        </h1>

        <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">

        <h2>Diese App kann Sprache erkennen:</h2>

        <input type="text" placeholder="  " [(ngModel)]='textInput' name="textInput" style="padding: 15px 32px; font-size: 16px;" />
        <button (click)="start()" style="padding: 15px 32px; font-size: 16px;">Drück mich!</button>
    </div>

Damit das Two-Way-Binding vom TextInput funktioniert haben wir zuvor in 'app.module.ts' das FormsModule hinzugefügt.
Nun kann die App gestartet und getestet werden.

    $ ng serve --open

In Chrome öffnen wir anschließend [http://localhost:4200/](http://localhost:4200/). Drückt den 'Drück mich!' Button und sagt etwas.

Hat die App Euch verstanden?

Den Code zu diesem Teil findet ihr unter examples/my-speech-listen.
