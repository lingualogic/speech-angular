# Speech-Angular

Speech-Angular ist eine Angular Typescript-Bibliothek zur Integration von Sprachdiensten, wie Sprachausgabe (TTS), Spracherkennung (ASR), Sprachverstehen (NLU), Dialogverarbeitung (NLP) und Aktionsausführung in eine Angular Web-Seite oder Web-App. Kern von Speech-Angular ist ein **BotService**, der Dialoge eines Dialogskripts ausführen kann.

Daneben git es folgende einzeln verwendbare Dienste: 

* **SpeakService** für die Sprachausgabe
* **ListenService** für die Spracherennung
* **IntentService** für das Sprachverstehen
* **ActionService** für die Aktionserzeugung

In Speech-Angular kann für die Sprachausgabe (TTS) und das Sprachverstehen (NLU) auch der Nuance-Clouddienst verwendet werden. Dazu wird ein eigener Nuance-Mix Account benötigt.


## Speech-Framework

Die Speech-Angular Bibliothek benötigt das Speech-Framework, welches unter [https://github.com/lingualogic/speech-framework](https://github.com/lingualogic/speech-framework) in Github zu finden ist.

Um in eigenen Projekten Speech-Angular nutzen zu können, muss das Speech-Framework NPM-Package von der [LinguaLogic-Seite](https://lingualogic.de) heruntergeladen werden, in den eigenen Projektordner kopiert werden und vor Speech-Angular installiert sein. Das Speech-Framework NPM-Package wird mit folgendem Befehl installiert:

    $ npm install speech-framework-0.5.4.tgz


## Letzte Version

* 0.5.4.0020 Alpha vom 29.01.2019 [Release Notizen](./CHANGELOG.md)

Speech-Angular ist noch in einem frühen Entwicklungsstadium und sollte noch nicht für den produktiven Einsatz verwendet werden.


## Voraussetzungen

Wir haben Speech-Angular auf Mac OS X 10.11, Mac OS X 10.13, Win 10 und Ubuntu 18.04 getestet. Als Plattformen können eingesetzt werden:

* Mac OS X >= 10.9
* Windows >= 7
* aktuelles Linux (z.B. Ubuntu 18.04)

Es wird die aktuellste Angular-Version empfohlen

* Angular >= 7.2


Grundsätzlich ist das Speech-Framework in Chrome, Firefox, Opera, Safari und Edge nutzbar, allerdings hängt die Sprachausgabe unter diesen Browsern von der zugrunde liegenden Text-to-Speech Engine der jeweiligen Plattformen ab. Die Spracheingabe funktioniert bisher nur in Chrome ohne die Nutzung von Nuance. Mit Nuance kann die Spracheingabe in allen hier aufgeführten Browsern verwendet werden.

* Chrome >= 71   Windows/Linux/MacOS (Html5: TTS, ASR)(Nuance: TTS, ASR, NLU)
* Firefox >= 64  Windows/Linux/MacOS (Html5: TTS)(Nuance: TTS, ASR, NLU) 
* Opera >= 58    Windows/MacOS (Html5: TTS)(Nuance: TTS, ASR, NLU) Linux (kein Html5)
* Safari >= 12   MacOS/iOS (Html5: TTS)(Nuance: ASR, NLU) 
* Edge >= 42     Windows (Html5: TTS)(Nuance: TTS, ASR, NLU)


NodeJS muss installiert sein.

* NodeJS >= 10.X (LTS-Version)

Als weitere Plattformen können Android und iOS mit Cordova verwendet werden:

* Cordova >= 8 für Android  >= 5.1 und iOS >= 10

Für Cordova müssen weitere Programme zur Entwicklung von Android- und iOS-Apps installiert werden.
Informationen hierzu finden sich unter [docs/platform/Cordova.md](./docs/platform/Cordova.md).

Will man den Nuance-Clouddienst verwenden, muss ein eigener Nuance-Mix Account eingerichtet werden und die Nuance-Komponente des Speech-Frameworks separat in die eigene App eingebunden werden.


## Installation

Zuerst muss das Speech-Angular Github-Repsitory unter [https://github.com/lingualogic/speech-angular](https://github.com/lingualogic/speech-angular) mit folgendem Befehl geklont werden:

    $ git clone https://github.com/lingualogic/speech-angular
    $ cd speech-angular

danach werden alle NPM-Pakete für Speech-Angular mit folgendem Befehl installiert:

    $ npm install

anschließend kann man optional die Unit-Tests von Speech-Angular starten:

    $ npm test

zum Schluß wird das NPM-Paket für Speech-Angular im dist/ Ordner erzeugt:

    $ npm run build

Die API-Dokumentation kann mit folgenden Befehl in docs/api erzeugt werden:

    $ npm run docs

Das im dist/ Ordner erzeugte npm-Paket 'speech-angular-0.5.4.tgz' kann in den eigenen Angular Projektordner kopiert werden.

Die Installation des 'speech-angular-0.5.4.tgz' npm-Paketes erfolgt im eigenen Angular Projektordner mit folgendem Befehl:

    $ npm install speech-angular-0.5.4.tgz

Danach kann Speech-Angular im eigenen Angular-Projekt verwendet werden. Probiert es einfach mit unserem [Schnelleinstieg](./docs/QuickStart.md) aus.

Alternativ kann das fertige Speech-Angular npm-Paket auch von der [LinguaLogic-Webseite](https://lingualogic.de) heruntergeladen werden.


## Deinstallation

Speech-Angular kann mit folgendem Befehl wieder deinstalliert werden:

    $ npm uninstall speech-angular


## Bekannte Probleme

* Unter Safari MacOS/iOS funktioniert die Nuance-TTS im SpeakService zur Zeit nicht


## Dokumentation

[**Schnelleinstieg für Speak, Action und Bot**](./docs/QuickStart.md)

[**Schnelleinstieg für Listen**](./docs/QuickStart-Listen.md)

[**Schnelleinstieg für Intent**](./docs/QuickStart-Intent.md)

[**Grundlagen**](./docs/design/README.md)

[**Cloud-Dienste**](./docs/cloud/README.md)

[**Plattformen**](./docs/platform/README.md)

[**API-Referenz**](https://lingualogic.de/speech-angular/docs/latest/api)

[**Roadmap**](./docs/roadmap/Roadmap-2018.md)

[**Release Notizen**](./CHANGELOG.md)


## Beispiel-Apps

Im examples Ordner sind mehrere kleine Beispiele für die einzelnen Services von Speech-Angular zu finden.
Zum Ausführen der Beispiele muss nicht in den Beispielordner gewechselt werden.

Folgende Befehle sind für die SpeakService-Beispiele einzugeben:

    $ npm run speak

für die TextToSpeech-Version oder

    $ npm run speak-offline

für die Audio-Version.

Für das ListenService-Beispiel ist folgender Befehl einzugeben:

    $ npm run listen

Für das IntentService-Beispiel ist folgender Befehl einzugeben:

    $ npm run intent

Für für das ActionService-Beispiel ist folgender Befehl einzugeben:

    $ npm run action

Der BotService kann mit folgenden Befehlen gestartet werden:

    $ npm run bot

für die TextToSpeech-Version oder

    $ npm run bot-offline

für die Audio-Version.


## Projektverantwortliche (LinguaLogic Team)

Projektorganisation: **Leo Füchsel** (leo@lingualogic.de)

Technische Entwicklung: **Stefan Brauer** (stefan@lingualogic.de)


## Mitwirkende

## In Projekten verwendet

* [**whoelse-Prototyp**](https://whoelse.xyz) - Beispiel für den IntentService von [uns.ai](https://uns.ai)

## Danksagung

Wir haben das Entstehen und die Entwicklung des Projektes vielen Personen zu danken, vor allem dem gesamten Team der [Nepos GmbH](https://nepos.de).

-------------------

## Lizenz

Speech-Angular wurde als Open Source unter der [MIT-Lizenz](./docs/LICENSE.md) veröffentlicht.
