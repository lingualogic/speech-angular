# Speech-Angular

Das Speech-Angular ist ein SDK und dient zur Integration von Sprachdiensten, wie Sprachein- und ausgabe, als Angular-Services in eine Angular Web-Seite oder Web-App.

## Voraussetzungen

Wir haben das SDK auf Mac OS X 10.11, Mac OS X 10.13,
Win 10 und Ubuntu 18.04 getestet.

Als Browser sollte standardmäßig Chrome ab Version 60 genutzt werden. Grundsätzlich ist das SDK auch in Firefox, Opera, Safari und Edge nutzbar.

NodeJS muss in Version 8.9 oder neuer installiert sein.

## Installation

Klonen des Github-Repsitories unter github.com/lingualogic/speech-angular:

    $ git clone https://github.com/lingualogic/speech-angular
    $ cd speech-angular

Installieren der NPM-Pakete von Speech-Angular:

    $ npm install

Testen von Speech-Angular:

    $ npm test

Erzeugen des Speech-Angular NPM-Pakets in Dist-Ordner:

    $ npm run build
    $ cd dist

Das im Dist-Ordner erzeugte NPM-Paket 'speech-angular-0.5.0.tgz' kann in den eigenen Angular Projektordner kopiert werden. Probiert es einfach aus mit unserem Schnelleinstieg.

Die API-Deferenzdokumentation findet Ihr [hier](http://lingualogic.de/speech-angular/docs/latest/api).


## Schnelleinstieg

In unserem Schnelleinstieg wollen wir eine Angluar App erstellen und sie um Sprachdienste erweitern. Den Code findet ihre im [Example-Ordner](./examples).

Die Beispiele könnt Ihr direkt ausführen:

    $ npm run speak

oder

    $ npm run bot

Im Folgenden erklären wir den Entwicklungprozess Schritt für Schritt.

Wir haben die [Angular CLI](https://github.com/angular/angular-cli/wiki) verwendet, bitte installiert sie, falls ihr sie nicht habt.

    $ npm install -g @angular/cli

Als Ausgangspunkt wird die 'mySpeech' App erzeugt.

    $ ng new my-speech
    $ cd my-speech

Um die App um Sprachdienste erweitern zu können, installieren wir speech-angular.

Das NPM-Paket 'speech-angular-0.5.0.tgz' kopieren oder verschieben wir dafür in den 'mySpeech' Order. Dann können wir die Installation vornehmen.

    $ npm install speech-angular-0.5.0.tgz

Weiter geht es in der App. Zur Programmierung können wir [VScode](https://code.visualstudio.com/) empfehlen.

### Sprachausgaben

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

Im Konstruktor des AppModules können Eigenschaften des Speaksservices mittels Optionen gesetzt werden. Für dieses Beispiel reichen uns die Defaultwerte. Weiteres zu Optionen [hier](http://lingualogic.de/speech-angular/docs/latest/api/interfaces/speech_speak.speakserviceoptioninterface.html).

Nun steht der Service in unseren Komponenten zur Verfügung. Wir wollen ihn in der AppComponent nutzen.
Dafür öffen wir 'app.component.ts' und importieren den SpeakService. Im Konstruktor der Klasse erzeugen wir über Dependency Injection ein SpeakService Objekt. Die Funktionalität des Services kann [hier](http://lingualogic.de/speech-angular/docs/latest/api/classes/speech_speak.speakservice.html) nachgelesen werden.

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

        speak(): void {
            this.speakService.text = 'Hallo Welt!';
            this.speakService.start();
        }
    }

Wir ergänzen eine Funktion 'speak()', die den zu sprechenden Text setzt und die Sprachausgabe startet.
Um die Funktion auszuführen, bearbeiten wir die Template Datei 'app.component.html'. Wir fügen einen Button hinzu, der bei einem Klick-Ereignis die 'speak()' Funktion aufruft.

    <div style="text-align:center">
        <h1>
            Willkommen zu {{ title }}!
        </h1>

        <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">

        <h2>Diese App kann sprechen: </h2>

        <button (click)="speak()" style="padding: 15px 32px; font-size: 16px;">Press me!</button>

    </div>

Nun kann die App gestartet und getestet werden.

    $ ng serve --open

In Chrome öffnen wir anschließend [http://localhost:4200/](http://localhost:4200/). Und drücken den 'Press me!' Button.

Herzlichen Glückwunsch. Ihre App kann jetzt sprechen.

### Abspielen von Audiodateien

Nicht auf allen Plattformen oder Browsern steht eine angenehme Sprachsynthese zur Verfügung.
Audiodateien haben zudem den Vorteil, dass sie ohne Latenz und offline abgespielt werden können.
Daher wollen wir im nächsten Schritt mit mySpeech eine Audiodatei abspielen.

Zur Erstellung der Audiodateien bieten sich neben eigenen Aufnahmen auch Clouddienste, wie [Amazon Polly](https://aws.amazon.com/de/polly/) an. Für dieses Beispiel haben wir eine [mp3-Datei](./examples/my-speech-speak/src/assets) mit Polly vorbereitet. Diese kopieren wir in den Assets-Ordner von mySpeech.

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

Ihre App kann jetzt auch Audiodatein abspielen. Den Code zu diesem Teil findet ihr unter [examples/my-speech-speak](./examples/my-speech-speak).

### Sprachen und Funktionalität verbinden

Die Sprachausgabe allein ist für manche Anwendungen bestimmt ein nettes Gimmick. Richtig nützlich wird sie allerdings, wenn sie die Funktionalität der App nutzt, um dem Benutzer beispielsweise zu assistieren.

Im zweiten Teil unserer Kurzanleitung, wollten wir an einem Beispiel zeigen, wie Speech-Angular die Entwicklung solcher Szenarien ermöglicht.
Hierzu werden ActionService und BotService genutzt.

In 'app.module.ts' importieren wir die Services und fügen sie entsprechend dem Provider-Array hinzu.

    import { SpeakService, ActionService, BotService } from 'speech-angular';

    ...

    providers: [
        SpeakService,
        ActionService,
        BotService
    ]

    ...

Als Beispiel soll ein Zähler implementiert werden, der sowohl durch uns als auch durch einen Bot erhöht werden kann.

Den Zähler initalisieren wir in 'app.component.ts'. Und fügen eine Funktion 'increment()'  hinzu, die den Zähler um Eins erhöht.

    export class AppComponent implements OnInit {

        title = 'mySpeech';
        counter = 0;                            // <== Zähler Attribut

        ...

        increment(): void { // <== Funktion zum Erhöhen des Zählers
            this.counter += 1;
        }

        ...

Um die Funktionalität auszuführen, überarbeiten wir die Template Datei 'app.component.html' wie folgt:

    <div style="text-align:center">
        <h1>
            Willkommen zu {{ title }}!
        </h1>
        <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">

        <h2>Diese App kann Sprachausgabe und Aktionen simultan ausführen: </h2>
        <button (click)="increment()" style="padding: 15px 32px; font-size: 16px;">Drück mich!</button>
        <h3>Zähler:  {{counter}} </h3>

    </div>

Der Button erhöht jetzt den Zähler. Zudem wird der aktuelle Zählerstand angezeigt.
Ihr könnt die App starten und es ausprobieren.

    $ ng serve

Doch noch kann der Bot den Zählerstand nicht erhöhen, dies gehen wir jetzt an.

### Actionservice

In 'app.component.ts' ergänzen wir den Import von ActionService. Und überarbeiten die Initialisierungsfunktion.

    import { SpeakService, ActionService } from 'speech-angular';

    ...

        constructor(
            private speakService: SpeakService,
            private actionService: ActionService) {}

        ngOnInit(): void {
            this.speakService.audio = false; // <== Sprachausgabe per TTS einstellen
            this.actionService.addFunction('incrementCounter', (action) => {     // <== Startfunktion
                this.increment();
                return 0;
            }, () => 0);                    // <== Stopfunktion
        }

        increment(): void {
            this.counter += 1;
        }

    }

Hinweis: Der Speakservice und die 'speak()' Funktion werden für dieses Beispiel nicht benötig, und könnten daher gelöscht oder auskommentiert werden. Tut man dies nicht, ist es wichtig den Speakservice wieder auf Sprachausgabe per TTS um zustellen.

Die 'addFunction()' des [ActionServices](http://lingualogic.de/speech-angular/docs/latest/api/classes/speech_action.actionservice.html#addfunction) hat drei Parameter. Im ersten Parameter wird ein Name vergeben, der die Funktion identifiziert. Der zweite Parameter definiert die Startfunktion, die beim Aufruf der Action durch den Bot ausgeführt wird. Der dritte Parameter definiert eine Stopfunktion, die ausgeführt wird, wenn der auf die Action folgende Speak endet. In unserem Beispiel soll in der Stopfunktion nichts passieren.

### Bot - unser Chatbot

Das Ausführen von Speaks und Actions übernimmt unser Bot. Der ähnlich eines [Chatbots](https://de.wikipedia.org/wiki/Chatbot) über eine zusätzlichen Aktionschnittstelle mit der App interagieren kann.

Wichtig für einen Bot ist es, den Kontext (Zustand der App, in der sich der Benutzer befindet) zu erhalten, damit die passende Interaktion erfolgen kann.

Unsere mySpeech-App hat momentan nur einen Zustand. Mit Hilfe des Routings wollen wir einen zweiten Zustand erzeugen zwischen dem der Besucher wechseln kann.

Zunächst erzeugen wir das Routing-Modul,

    $ ng generate module app-routing --flat --module=app

dann die Home-Komponente, in der der Besucher den Zähler erhöht und die Bot-Komponente, in der der Bot den Zähler erhöht.

    $ ng generate component home --inline-style
    $ ng generate component bot -s, -t

Das Routing in 'app-routing.module.ts' setzen wir wie folgt:

    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

    import { HomeComponent } from './home/home.component';
    import { BotComponent } from './bot/bot.component';

    const routes: Routes = [
        { path: '',    component: HomeComponent },
        { path: 'bot', component: BotComponent }
    ];

    @NgModule({
        imports: [ RouterModule.forRoot(routes) ],
        exports: [ RouterModule ]
    })
    export class AppRoutingModule {}

Die Einbindung erfolgt in der Template-Datei 'app.component.html' vor dem letzten schließendem Block.

        ...

        <router-outlet></router-outlet>
    </div>

Dieser Zustand kann getestet werden. Wenn wir die App starten und [http://localhost:4200/](http://localhost:4200/) aufrufen, steht unter dem Button 'home arbeitet!', dann wechseln wir zu [http://localhost:4200/bot](http://localhost:4200/bot) 'bot arbeitet!'.

Dieser Wechsel soll nun per Link erfolgen. Daher passen wir die Template-Datei 'home.component.html' an.

    <a routerLink="/bot">Lass den Bot das für Dich tun</a>

### Botservice

Als nächstes wollen wir dem Bot den Zustand mitteilen, in dem sich das Routing befindet. Dazu importieren wir den Botservice aus speech-angluar, erzeugen über Dependency Injection ein Objekt und tragen den jeweiligen State sein. Hier der entsprechende Code für home in 'home.component.ts'.

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

Im Bot wird analog vorgegangen. Allerdings wird in der 'ngOnInit()' Funktion zusätzlich der Bot gestartet.

    import { BotService } from 'speech-angular';

    ...

        constructor(
            private botService: BotService
        ) { }

        ...

        ngOnInit() {
            this.botService.state = 'bot';
            this.botService.start();
        }

    ...

Was der Bot tun soll wird in einer Text-Datei definiert, die als 'speech.def' in den Assets der App gespeichert wird. Diese Datei verfügt über ihre eigene Syntax, die [hier](./docs/design/DialogScript.md) nachgelesen werden kann

    DIALOG main

        STATE home
            SPEAK 7, Wenn du willst, dass ich das mache, musst du den richtigen State setzten.

        STATE bot
            SPEAK 3, Hallo - Jetzt übernehme ich!
            ACTION incrementCounter, field, counter
            SPEAK 4, Und erhöhe den Zähler um eins.

Neben den Sprachausgaben in den entsprechenden States, wird im Bot unsere zuvor definierte Action ausgeführt. Die beiden hinteren Parameter sind Dummy-Werte die zwar befüllt, jedoch nicht ausgelesen werden.

### Events

Startet man jetzt die App, kann man den Bot einmalig den Zählerstand erhöhen lassen. Wir wollen allerdings zusätzlich, dass der Bot anschließend zurück in den home State routet.

Hierzu verwenden wir [Events](http://lingualogic.de/speech-angular/docs/latest/api/classes/speech_bot.botservice.html), die uns der Botservice bereitstellt. Das 'stopEvent' wird ausgegeben, wenn der Dialog für einem State ausgegeben wurde. Es wird in die 'ngOnInit' Funktion von
'bot.component.ts' integriert.

    import { Component, OnInit, OnDestroy } from '@angular/core';
    import { BotService } from 'speech-angular';
    import { Router } from '@angular/router';

    @Component({
        selector: 'app-bot',
        template: `bot arbeitet!`,
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

Zusätzlich muss sichergesstellt werden, dass das Event beim Wechseln der Komponente unsubscribed wird. Hierzu wird Angulars 'ngOnDestroy' Funktion verwendet, die wie oben in den Code der Bot-Komponete integiert wird. Den Code zu diesem Teil findet ihr unter [examples/my-speech-bot](./examples/my-speech-bot).

-------------------

## Lizenz

MIT
