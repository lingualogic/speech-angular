# Speech-Angular

Speech-Angular ist eine Angular Typescript-Bibliothek zur Integration von Sprachdiensten, wie Sprachausgabe (TTS), Spracherkennung (ASR), Sprachverstehen (NLU), Dialogverarbeitung (NLP) und Aktionsausführung in eine Angular Web-Seite oder Web-App. Kern von Speech-Angular ist ein **BotService**, der Dialoge eines Dialogskripts ausführen kann.

Daneben git es folgende einzeln verwendbare Dienste:

* **SpeakService** für die Sprachausgabe
* **ListenService** für die Spracherennung
* **IntentService** für das Sprachverstehen
* **ActionService** für die Aktionserzeugung
* **DialogService** für die Dialogausführung

In Speech-Angular kann für die Sprachausgabe (TTS) und das Sprachverstehen (NLU) auch ein Clouddienst von Amazon, Google oder Microsoft verwendet werden. Dazu wird ein eigener Clouddienst Account des jeweiligen Clouddienst-Anbieters benötigt.


## Speech-Framework

Die Speech-Angular Bibliothek benötigt das Speech-Framework, welches unter [https://github.com/lingualogic/speech-framework](https://github.com/lingualogic/speech-framework) in Github zu finden ist.

Um in eigenen Projekten Speech-Angular nutzen zu können, muss das Speech-Framework NPM-Package von der [LinguaLogic-Seite](https://lingualogic.de) heruntergeladen werden, in den eigenen Projektordner kopiert werden und vor Speech-Angular installiert sein. Das Speech-Framework NPM-Package wird mit folgendem Befehl installiert:

    $ npm install speech-framework-0.5.19.tgz

Alternativ kann das Speech-Framework auch über das offizielle globale NPM-Repository installiert werden:

    $ npm install speech-framework

Wird speech-angular aus dem globalen NPM-Repository installert, wird speech-framework automatisch mitinstalliert.


## Letzte Version

* 0.5.19.0037 Release vom 11.04.2020 [Release Notizen](./CHANGELOG.md)


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

Will man den Clouddienst verwenden, muss ein eigener Clouddienst Account eingerichtet werden und die Clouddienst-Komponente des Speech-Frameworks separat in die eigene App eingebunden werden. Wie man dies macht, findet man unter [docs/cloud/Cloud.md](./docs/cloud/Cloud.md)


## Installation

Die Installation kann vom globalen NPM-Repository aus erfolgen, oder als lokale Installation erzeugt man sich sein NPM-Package selbst.

### NPM-Package

Zur Installation von Speech-Angular ins eigene Projekt, im Projektverzeichnis folgenden Befehl eingeben:

    $ npm install speech-angular

Installiert man speech-angular auf diese Art, wird speech-framework automatisch mitinstalliert.

### lokales Package

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

Das im dist/ Ordner erzeugte npm-Paket 'speech-angular-0.5.18.tgz' kann in den eigenen Angular Projektordner kopiert werden.

Die Installation des speech-angular npm-Paketes erfolgt im eigenen Angular Projektordner mit folgendem Befehl:

    $ npm install speech-angular-0.5.18.tgz

Danach kann Speech-Angular im eigenen Angular-Projekt verwendet werden. Probiert es einfach mit einem unserer [Schnelleinstiege](./docs/quickstart/README.md) aus.

Alternativ kann das fertige Speech-Angular npm-Paket auch von der [LinguaLogic-Webseite](https://lingualogic.de) heruntergeladen werden.


## Deinstallation

Speech-Angular kann mit folgendem Befehl wieder deinstalliert werden:

    $ npm uninstall speech-angular


## gebrochener Code gegenüber der Vorversion

* wird das Google-Module eingebunden, muss jetzt auch der Parameter googleServerUrl bei den googleCredentials eingetragen und der Konfiguration mitübergeben werden.


## Bekannte Probleme

* Nuance hat seine Sprachdienste abgeschaltet und steht als Cloud-Dienst nicht mehr zur Verfügung
* Unter Chrome in iOS funktioniert die Spracheingabe nicht


## Dokumentation

[**Schnelleinstieg**](./docs/quickstart/README.md)

[**Architektur**](./docs/design/Design.md)

[**Services**](./docs/service/Service.md)

[**Cloud-Dienste**](./docs/cloud/Cloud.md)

[**Plattformen**](./docs/platform/README.md)

[**API-Referenz**](https://lingualogic.de/speech-angular/docs/latest/api)

[**Roadmap**](./docs/roadmap/README.md)

[**Release Notizen**](./CHANGELOG.md)


## Beispiel-Apps

Im examples Ordner sind mehrere kleine Beispiele für die einzelnen Services von Speech-Angular zu finden.
Zum Ausführen der Beispiele darf nicht in den Beispielordner gewechselt werden. Von dort aus funktioniert
der Start der jeweiligen Beispiel-App nicht, da globale NPM-Packages aus dem Projektverzeichnis benötigt werden.

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

* [**Nepos-App**](https://nepos.app) - Beispiel für den SpeakService und Dialog von [nepos.de](https://nepos.de)
* [**whoelse-Prototyp**](https://app.whoelse.ai) - Beispiel für den IntentService von [uns.ai](https://uns.ai)

## Danksagung

Wir haben das Entstehen und die Entwicklung des Projektes vielen Personen zu danken, vor allem dem gesamten Team der [Nepos GmbH](https://nepos.de).

-------------------

## Lizenz

Speech-Angular wurde als Open Source unter der [MIT-Lizenz](./docs/LICENSE.md) veröffentlicht.
