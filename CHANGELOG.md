# Speech-Angular Release Notizen


## 0.5.23.0041 Release (05.10.2021)

### Fix

Aktualisierung aller NPM-Packages.
Aktualisierung auf Angular 12.



## 0.5.22.0040 Release (31.08.2020)

### Fix

Fehlerbeseitigung in Google Cloud-Dienst, Speak, Listen und Intent.


## 0.5.21.39 Release (21.06.2020)

### Features

* **Listen:** Ausbau von Listen, um den NoMatch-Event zu senden.
* **Google:** In Google Dialogflow wurden Session-Id und EventName eingebaut, um
              die Versionierung des Sprachmodells und parallele Sessions verschiedener
              Nutzer zuzulassen.


## 0.5.20.0038 Release (17.05.2020)

### Features

* **Google:** In Google kann zwischen verschiedenen Servern über setConfig umgeschaltet werden.

### Fix

* **Gulp:** Umstellung auf Gulp4, um kompatibel zu Node12 zu sein.


## 0.5.19.0037 Release (11.04.2020)

### Features

* **Listen:** Einbau eines Dicate-Mode in die HTML5-ASR für das Diktieren von Texten (nur Chrome-Browser).
              Einbau von Mkrofon-Events in Listen zur Anzeige, wann das Mikrofon an und aus geht.


## 0.5.18.0036 Release (28.03.2020)

### Features

* **Google:** Vollständige Einbindung von Dialogflow V2 in den CloudPort von Google, einschließlich Spracheingabe und Sprachausgabe.

### Fix

* **Google:** Fehlerkorrektur in der Google-Komponente, um den Stop-Event in ASR und TTS zu erzeugen.


## 0.5.17.0035 Release (16.02.2020)

### Features

* **Google:** Erweiterung der Google-Komponente um ASR mit Verbindung zum Google Token-Server.


## 0.5.16.0034 Beta (17.12.2019)

### Features

* **Google:** Erweiterung der Google-Komponente um TTS mit Verbindung zum Google Token-Server.


## 0.5.15.0033 Beta (19.10.2019)

### Features

* **Dialog:** Erweiterung der Dialog-Komponente um das Einlesen von JSON-Daten anstelle einer Def-Datei.
* **Google:** Erweiterung der Google-Komponente um Dialogflow Version 2.


## 0.5.14.0032 Beta (31.08.2019)

### Features

* **Microsoft:** der Microsoft Cloud-Dienst (LUIS) für die NLU wurde eingebaut, um Microsofts NLU für die Sprachanalyse verwenden zu können


## 0.5.13.0031 Alpha (10.08.2019)

### Fix

kleinere Korrekturen


## 0.5.13.0030 Alpha (23.07.2019)

### Features

* **Rasa:** die URL des Rasa-Servers wird jetzt in den rasa-credentials mit eingetragen


## 0.5.13.0029 Alpha (18.07.2019)

### Features

* **Rasa:** der Rasa Cloud-Dienst für die NLU wurde eingebaut, um einen eigenen Rasa-Server nutzen zu können


## 0.5.12.0028 Alpha (08.07.2019)

### Features

* **Microsoft:** der Microsoft Cloud-Dienst für die TTS wurde eingebaut, um Microsofts TTS für die Sprachsynthese verwenden zu können


## 0.5.11.0027 Alpha (25.06.2019)

### Features

* **Microsoft:** der Microsoft Cloud-Dienst für die ASR wurde eingebaut, um Microsofts ASR für die Spracherkennung verwenden zu können


## 0.5.10.0026 Alpha (27.05.2019)

### Fixes

* **NuanceService:** wurde als Deprecated markiert, fällt ab Version 0.6 weg


## 0.5.9.0025 Alpha (12.05.2019)

### Features

* **IntentService:** beinhaltet jetzt die Google Dialogflow-NLU
* **GoogleService:** es wurde der GoogleService eingebaut, um nachtraeglich Credentials zu aendern
* **GoogleModule:** es wurde GoogleModule eingebaut, um den Google Cloud-Dienst einzubinden


## 0.5.8.0024 Alpha (07.04.2019)

### Features

* **AmazonService:** es wurde der AmazonService eingebaut, um nachtraeglich Credentials zu aendern
* **AmazonModule:** es wurde AmazonModule eingebaut, um den Amazon Cloud-Dienst einzubinden


## 0.5.7.0023 Alpha (31.03.2019)

### Features

* **DialogService:** es wurde der DialogService eingebaut, um Dialoge fuer Textausgaben ablaufen zu lassen


## 0.5.6.0022 Alpha (22.03.2019)

### Features

* **NuanceService:** es wurde der NuanceService eingebaut, um nachträglich Credentials zu ändern


## 0.5.5.0021 Alpha (22.02.2019)

### Features

* **Speech-Framework:** komplett neue Integration von Speech-Framework als unabhängiges NPM-Package
* **Dokumentation:** Dokumentation überarbeitet
* **Testen:** Unit-Tests überarbeitet


## 0.5.4.0020 Alpha (29.01.2019)

### Features

* **ListenService:** Erweiterung der Spracherkennung um die Nuance-ASR
* **Browser:** Erweiterung auf Firefox, Opera, Safari und Edge
* **Plattform:** Erweiterung auf Windows und Linux
* **NPM-Package:** Aufteilung in Speech-Framework und Speech-Angular


## 0.5.3.0019 Alpha (17.12.2018)

### Features

* **SpeakService:** Erweiterung der Sprachausgabe um die Nuance-TTS
* **IntentService:** Einbau des Sprachverstehens mit der Nuance-NLU
* **NuanceModule:** Einbau des Nuance-CloudService


## 0.5.2.0018 Alpha (11.11.2018)

### Features

* **SpeakService:** Ausbau der Language- und Voice-Funktionen
* **Plattform:** Cordova als Grundlage für Android und iOS integriert


## 0.5.1.0017 Alpha (14.10.2018)

### Features

* **ListenService:** ListenService für die Spracheingabe eingebaut


## 0.5.0.0016 Alpha (21.09.2018)

### Features

* **BotService:** isRunning()-Funktion eingebaut
* **Allgemein:** Dokumentation um Grundlagen erweitert


## 0.5.0.0015 Alpha (15.09.2018)

### Features

* **BotService:** BotService eingebaut
* **ActionService:** ActionService eingebaut
* **SpeakService:** SpeakService eingebaut
