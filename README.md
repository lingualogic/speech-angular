# Speech-Angular

Speech-Angular ist eine Bibliothek zur Integration von Sprachdiensten, wie Sprachein- und ausgabe, Dialogverarbeitung und Aktionsausführung als Angular-Services in eine Angular Web-Seite oder Web-App. Kern von Speech-Angular ist ein Bot, der Dialoge eines Dialogskripts ausführen kann.


## Letzte Version

* 0.5.0.0016 Alpha vom 21.09.2018 [Release Notizen](./CHANGELOG.md)

Speech-Angular ist noch in einem frühen Entwicklungsstadium und sollte noch nicht für den produktiven Einsatz verwendet werden.


## Voraussetzungen

Wir haben Speech-Angular auf Mac OS X 10.11, Mac OS X 10.13, Win 10 und Ubuntu 18.04 getestet. Als Plattformen können eingesetzt werden:

* Mac OS X >= 10.9
* Windows >= 7
* aktuelles Linux (z.B. Ubuntu 18.04)

Als Browser sollte standardmäßig Chrome ab Version 65 genutzt werden. Wir empfehlen, Speech-Angular nur unter Chrome einzusetzen.

* Chrome >= 65 (dringend empfohlen)

Grundsätzlich ist Speech-Angular auch in Firefox, Opera, Safari und Edge nutzbar, allerdings hängt die Sprachausgabe unter diesen Browsern von der zugrunde liegenden Text-to-Speech Engine der jeweiligen Plattformen ab. Die Spracheingabe funktioniert bisher nicht.

* Firefox >= 60 (mit Einschränkungen, nur Sprachausgabe)
* Opera >= 55 (mit Einschränkungen, nur Sprachausgabe)
* Safari >= 11 (mit Einschränkungen, nur Sprachausgabe)
* Edge >= 42 (mit Einschränkungen, nur Sprachausgabe)

NodeJS muss installiert sein.

* NodeJS >= 8.9


## Installation

Zuerst muss das Speech-Angular Github-Repsitory unter [https://github.com/lingualogic/speech-angular](https://github.com/lingualogic/speech-angular) mit folgendem Befehl geklont werden:

    $ git clone https://github.com/lingualogic/speech-angular
    $ cd speech-angular

danach werden alle NPM-Pakete für Speech-Angular mit folgendem Befehl installiert:

    $ npm install

anschließend kann man optional die Unit-Tests von Speech-Angular starten:

    $ npm test

zum Schluß wird das NPM-Paket für Speech-Angular in dist/ Ordner erzeugt:

    $ npm run build
    $ cd dist

Das im dist/ Ordner erzeugte npm-Paket 'speech-angular-0.5.0.tgz' kann in den eigenen Angular Projektordner kopiert werden.

Die Installation des 'speech-angular-0.5.0.tgz' npm-Paketes erfolgt in eurem Angular Projektordner mit folgendem Befehl:

    $ npm install --save speech-angular-0.5.0.tgz

Danach kann Speech-Angular in eurem Angular-Projekt verwendet werden. Probiert es einfach mit unserem [Schnelleinstieg](./docs/QuickStart.md) aus.


## Dokumentation

[**Schnelleinstieg**](./docs/QuickStart.md)

[**Grundlagen**](./docs/design/README.md)

[**API-Referenz**](https://lingualogic.de/speech-angular/docs/latest/api).

[**Roadmap**](./docs/roadmap/Roadmap-2018.md)

[**Release Notizen**](./CHANGELOG.md)


## Projektverantwortliche

**Stefan Brauer**: stefan@lingualogic.de

**Leo Füchsel**: leo@lingualogic.de


## Mitwirkende


## Dank

Wir haben das Entstehen und die Entwicklung des Projektes vielen Personen zu danken, vor allem dem gesamten Team der [Nepos GmbH](https://nepos.de).

-------------------

## Lizenz

Speech-Angular wurde als Open Source unter der [MIT-Lizenz](./docs/LICENSE.md) veröffentlicht.
