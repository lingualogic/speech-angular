# Nuance Cloud-Dienst

Die Nuance Cloud-Dienst Anbindung von Speech-Angular erlaubt die Nutzung der Nuance-TTS im SpeakService, die Nutzung der Nuance-ASR im ListenService und die Nutzung der Nuance-NLU im IntentService.

Infos zu Nuance unter [developer.nuance.com](https://developer.nuance.com).


## Voraussetzungen

Um den Nuance Cloud-Dienst nutzen zu können, muss ein Nuance-Mix Account eingerichtet sein und die Nuance-Credentials heruntergeladen werden. Dann legt man die Datei nuance-credentials.ts im Unterverzeichnis src/config des eigenen Projektes an und trägt folgende Konstanten ein:

* **APP_ID** - Nuance App-ID vom Nuance-Mix Account
* **APP_KEY** - Nuance App-Key vom Nuance-Mix Account
* **NLU_TAG** - Nuance Nlu-Tag vom Nuance-Mix Account

Die Datei credentials/nuance-credentials.ts sollte folgendes beinhalten:

	/**
	 * Nuance Credentials
	 */
	
	export const APP_ID = ''; 			// <--- Hier die eigene Nuance APPID eintragen
	export const APP_KEY = '';       	// <--- Hier den eigenen Nuance APPKEY eintragen 
	export const NLU_TAG = '';       // <--- Hier en eigenen Nuance NLUTAG eintragen


Diese Datei darf nicht in das Git-Repository übernommen werden. Dazu wird in der .gitignore Datei des Projektes der Name der Datei eingetragen.

eigenes Projektverzeichnis/.gitignore:
 
	# Konfigdateien

	nuance-credentials*


## Integration des NuanceModule von Speech-Angular

Um den Nuance Cloud-Dienst in der eigenen Angular-Anwendung verwenden zu können, muss das NuanceModule von Speech-Angular in die src/main.ts Datei der Angular-Anwendung, wie nachfolgend im Beispielcode gezeigt, eingebaut werden.

eigenes Projektverzeichnis/src/main.ts:

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


Das NuanceModule initialisiert den Nuance Cloud-Service und öffnet eine WebSocket zum Nuance-Server. Die Initialisierung der Angular-Anwendung darf erst danach erfolgen, daher wird sie in der an NuanceModule.init() übergebenen Callback-Funktion erst ausgeführt, um die Speech-Angular Services korrekt mit dem eingerichteten Nuance Cloud-Dienst zu starten.


