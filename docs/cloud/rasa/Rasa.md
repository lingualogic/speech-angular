# RasaModule Cloud-Dienst

Die RasaModule Cloud-Dienstanbindung von Speech-Angular erlaubt die Nutzung der Rasa-NLU zusammen mit einem eigenen Rasa-Server im IntentService.

Infos zu Rasa unter [rasa.com](https://rasa.com/).


## Voraussetzungen

Um die RasaModule Cloud-Dienstanbindung nutzen zu können, muss ein Rasa-Server mit einem Zugriffstoken eingerichtet sein. Dann legt man die Datei rasa-credentials.ts im Unterverzeichnis credentials des eigenen Projektes an und trägt folgende Konstanten ein:

* **RASA_SERVER_URL** - Rasas- Server URL, unter der der Rasa-Server läuft
* **RASA_APP_KEY** - Rasas Access Token, welches beim Rasa-Server vergeben wurde


Die Datei credentials/rasa-credentials.ts sollte folgendes beinhalten:

	/**
	 * Rasa Credentials
	 */
	
	export const RASA_SERVER_URL = ''; 			// <--- Hier die URL des eigenen Rasa-Servers eintragen
	export const RASA_APP_KEY = ''; 			// <--- Hier das eigene Rasa Access Token eintragen
	

Diese Datei darf nicht in das Git-Repository übernommen werden. Dazu wird in der .gitignore Datei des Projektes der Name der Datei eingetragen.

eigenes Projektverzeichnis/.gitignore:
 
	# Konfigdateien

	rasa-credentials*


## Integration des RasaModule von Speech-Angular

Um den Rasa Cloud-Dienst in der eigenen Angular-Anwendung verwenden zu können, muss das RasaModule von Speech-Angular in die src/main.ts Datei der Angular-Anwendung, wie nachfolgend im Beispielcode gezeigt, eingebaut werden.

eigenes Projektverzeichnis/src/main.ts:

	import { enableProdMode } from '@angular/core';
	import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
	
	import { AppModule } from './app/app.module';
	import { environment } from './environments/environment';
	
	
	// Speech-Angular 
	
	import { RasaModule } from 'speech-angular';
	
	
	// Rasa-Credentials
	
	// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
	import { RASA_SERVER_URL, RASA_APP_KEY } from './../credentials/rasa-credentials';
	const rasaOption = {
	  rasaServerUrl: RASA_SERVER_URL;
	  rasaAppKey: RASA_APP_KEY
	};
	
	
	// Initialisierung des Rasa Cloud-Dienstes
	
	RasaModule.init( RasaOption, (aRasaFlag: boolean) => {
	  console.log('Rasa:', aRasaFlag);
	
	  // Initialisierung der Angular-Anwendung

	  if (environment.production) {
	    enableProdMode();
	  }
	
	  platformBrowserDynamic().bootstrapModule(AppModule)
	    .catch(err => console.log(err));
	
	});


Das RasaModule initialisiert den Rasa Cloud-Service. Die Initialisierung der Angular-Anwendung darf erst danach erfolgen, daher wird sie in der an RasaModule.init() übergebenen Callback-Funktion erst ausgeführt, um die Speech-Angular Services korrekt mit dem eingerichteten Rasa Cloud-Dienst zu starten. Der Rasa-Server muss bereits ausgeführt werden.


## Dynamische Rasa-Credentials

Will man die Rasa-Credetials nicht bei der Initialisierung übergeben, sondern erst später durch ein Formular, so kann dies mit dem optionalen Paramter:

	const rasaOption = {
		rasaDynamicCredentialsFlag: true
	};
	
in den Optionen eingetragen werden. Dann sind die Angaben der anderen Credentials-Parameter nicht mehr notwendig.
Die Rasa-Credentials können dann zu jedem späteren Zeitpunkt mit dem RasaService in der Angular-App geändert werden.
