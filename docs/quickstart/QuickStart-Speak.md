# Speech-Angular Schnelleinstieg für Speak

In unserem Schnelleinstieg wollen wir eine Angluar App erstellen und sie um Sprachdienste erweitern. Den Code findet Ihr im /examples Ordner.

Die Beispiele könnt Ihr direkt im Speech-Angular Projektverzeichnis, ohne in den /examples Ordner wechseln zu müssen, ausführen:

für das Speak-Beispiel:

    $ npm run speak

für die Offline Version mit Audiodateien: 

    $ npm run speak-offline

für das Listen-Beispiel:

	$ npm run listen

für das Action-Beispiel:

	$ npm run action
	
und für das Bot-Beispiel:

	$ npm run bot

für die Offline Version mit Audiodateien: 

    $ npm run bot-offline


Im Folgenden erklären wir den Entwicklungprozess Schritt für Schritt.

Wir haben die [Angular CLI](https://github.com/angular/angular-cli/wiki) verwendet, bitte installiert sie, falls ihr sie noch nicht habt.

    $ npm install -g @angular/cli

Als Ausgangspunkt wird ein neues Projekt für die 'mySpeech' App erzeugt.

    $ ng new my-speech
    $ cd my-speech

Um die App um Sprachdienste erweitern zu können, installieren wir speech-angular.

Das NPM-Paket 'speech-angular-0.5.4.tgz' kopieren oder verschieben wir dafür in den 'mySpeech' Order. Dann können wir die Installation vornehmen.

    $ npm install speech-angular-0.5.4.tgz

Weiter geht es in der App. Zur Programmierung können wir [VScode](https://code.visualstudio.com/) empfehlen.


## Sprachausgabe

Im ersten Schritt wollen wir die Sprachausgabe mittels [Sprachsynthese](https://de.wikipedia.org/wiki/Sprachsynthese) realisieren.

In 'app.module.ts' importieren wir den SpeakService und stellen ihn als Provider zur Verfügung. 

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';

    import { SpeakService } from 'speech-angular';      // <== Import SpeakService

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule
        ],
        providers: [
            SpeakService                                // <== Provider
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

Im Konstruktor des AppModules können Eigenschaften des SpeakServices mittels Optionen gesetzt werden. Für dieses Beispiel reichen uns die Defaultwerte. Weiteres zu Optionen [hier](https://lingualogic.de/speech-angular/docs/latest/api/interfaces/speech_speak.speakserviceoptioninterface.html).

Nun steht der Service in unseren Komponenten zur Verfügung. Wir wollen ihn in der AppComponent nutzen.
Dafür öffen wir 'app.component.ts' und importieren den SpeakService. Im Konstruktor der Klasse erzeugen wir über Dependency Injection ein SpeakService Objekt. Die Funktionalität des Services kann [hier](https://lingualogic.de/speech-angular/docs/latest/api/classes/speech_speak.speakservice.html) nachgelesen werden.

    import { Component } from '@angular/core';
    import { SpeakService } from 'speech-angular'; // <== Import SpeakService

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        title = 'mySpeech';

        constructor( private speakService: SpeakService ) { }    // <== Dependency Injection

        start(): void {
            this.speakService.text = 'Hallo Welt!';
            this.speakService.start();
        }
    }

Wir ergänzen eine Funktion 'start()', die den zu sprechenden Text setzt und die Sprachausgabe startet.
Um die Funktion auszuführen, bearbeiten wir die Template Datei 'app.component.html'. Wir fügen einen Button hinzu, der bei einem Klick-Ereignis die start()' Funktion aufruft.

    <div style="text-align:center">
        <h1>
            Willkommen zu {{ title }}!
        </h1>

        <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">

        <h2>Diese App kann sprechen: </h2>

        <button (click)="start()" style="padding: 15px 32px; font-size: 16px;">Drück mich!</button>

    </div>

Nun kann die App gestartet und getestet werden.

    $ ng serve --open

In Chrome öffnen wir anschließend [http://localhost:4200/](http://localhost:4200/). Und drücken den 'Drück mich!' Button.

Herzlichen Glückwunsch. Eure App kann jetzt sprechen.

Den Code zu diesem Teil findet ihr unter examples/my-speech-speak.

## Weitere Stimmen

Für weitere Stimmen können auch Sprachsynthesen von Cloud-Diensten genutzt werden. Seit 0.5.3 steht in Speech-Angular der [Nuance Cloud-Dienst](./../cloud/Cloud.md) zur Verfügung. Wenn man die Voraussetzungen erfüllt hat, können in der Funktion *start()* die TTS, Sprache und Stimme geändert werden.

    start(): void {
        this.speakService.tts = 'TTSNuance';  // Default: 'TTSHtml5'
        this.speakService.language = 'de';    // Default: 'de' Option: 'en'
        this.speakService.voice = 'Anna-ML';  // Default: 'Anna'
        ...
    }

Hinweis: Die Stimmenauswahl hängt von der gesetzten TTS und Sprache ab. Mit der *getVoiceList()* Funktion des SpeakService kann man eine dynamisch Liste der gültigen Stimmen zur Laufzeit erzeugen.

## Abspielen von Audiodateien

Nicht auf allen Plattformen oder Browsern steht eine angenehme Sprachsynthese zur Verfügung.
Audiodateien haben zudem den Vorteil, dass sie ohne Latenz und offline abgespielt werden können.
Daher wollen wir im nächsten Schritt mit mySpeech eine Audiodatei abspielen.

Zur Erstellung der Audiodateien bieten sich neben eigenen Aufnahmen auch Clouddienste, wie [Amazon Polly](https://aws.amazon.com/de/polly/) an. Für dieses Beispiel haben wir eine mp3-Datei unter examples/my-speech-speak/src/assets mit Polly vorbereitet. Diese kopieren wir in den Assets-Ordner von mySpeech.

Anschließend passen wir 'app.component.ts' an. Die 'AppComponent' Klasse wird um das OnInit-Interface erweitert, was entsprechend importiert werden muss. Das Interface stellt die 'ngOnInit()' Funktion zur Verfügung, die bei der Initalisierung der Komponente ausgeführt wird. In ihr schalten wir die Eigenschaft Audio an und setzen den Namen für die Audiodatei. Weitere Eigenschaften, wie das Format und den Pfad können optional geändert werden.

    import { Component, OnInit } from '@angular/core';    // <== Import OnInit Interface

    ...

    export class AppComponent implements OnInit {        // <== Implement OnInit Interface

        ...

        ngOnInit(): void {
            this.speakService.audio = true;
            this.speakService.file = 'HalloWelt';
        }

        ...

    }

Nun starten wir die App erneut. (Achtung: Sollte die App noch laufen, muss sie zunächst mit Crlt+C abgebrochen werden. Da ansonsten die hinzugefügte Audiodatei nicht geladen werden kann.)

    $ ng serve --open

In Chrome öffnen wir anschließend [http://localhost:4200/](http://localhost:4200/). Und drücken den 'Drück mich!' Button.

Eure App kann jetzt auch Audiodatein abspielen. Den Code zu diesem Teil findet ihr unter examples/my-speech-speak-offline.


## Sprachausgabe und Funktionalität verbinden

Die Sprachausgabe allein ist für manche Anwendungen bestimmt ein nettes Gimmick. Richtig nützlich wird sie allerdings, wenn die Funktionalität der App genutzt wird, um den Benutzer beispielsweise zu assistieren.

