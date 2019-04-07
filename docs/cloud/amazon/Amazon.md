# AmazonModule Cloud-Dienst

Die AmazonModule Cloud-Dienstanbindung von Speech-Angular erlaubt die Nutzung der Amazon-TTS (Polly) im SpeakService.

Infos zu Amazon Polly unter [aws.amazon.com/polly](https://aws.amazon.com/polly/).


## Voraussetzungen

Um die AmazonModule Cloud-Dienstanbindung nutzen zu können, muss ein AWS Account eingerichtet sein und die Amazon-Credentials ermittelt werden. Dann legt man die Datei amazon-credentials.ts im Unterverzeichnis credentials des eigenen Projektes an und trägt folgende Konstanten ein:

* **REGION** - Amazon Region
* **IDENTITY_POOL_ID** - Amazon IdentityPoolId


Die Datei credentials/amazon-credentials.ts sollte folgendes beinhalten:

	/**
	 * Amazon Credentials
	 */
	
	export const REGION = ''; 			// <--- Hier die eigene Amazon REGION eintragen
	export const IDENTITY_POOL_ID = '';   	// <--- Hier die eigene Amazon IdentityPollId eintragen 


Diese Datei darf nicht in das Git-Repository übernommen werden. Dazu wird in der .gitignore Datei des Projektes der Name der Datei eingetragen.

eigenes Projektverzeichnis/.gitignore:
 
	# Konfigdateien

	amazon-credentials*


## Integration des AmazonModule von Speech-Angular

Um den Amazon Cloud-Dienst in der eigenen Angular-Anwendung verwenden zu können, muss das AmazonModule von Speech-Angular in die src/main.ts Datei der Angular-Anwendung, wie nachfolgend im Beispielcode gezeigt, eingebaut werden.

eigenes Projektverzeichnis/src/main.ts:

	import { enableProdMode } from '@angular/core';
	import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
	
	import { AppModule } from './app/app.module';
	import { environment } from './environments/environment';
	
	
	// Speech-Angular 
	
	import { AmazonModule } from 'speech-angular';
	
	
	// Amazon-Credentials
	
	// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
	import { REGION, IDENTITY_POOL_ID } from './../credentials/amazon-credentials';
	const amazonOption = {
	  amazonRegion: REGION,
	  amazonIdentityPoolId: IDENTITY_POOL_ID
	};
	
	
	// Initialisierung des Amazon Cloud-Dienstes
	
	AmazonModule.init( amazonOption, (aAmazonFlag: boolean) => {
	  console.log('Amazon:', aAmazonFlag);
	
	  // Initialisierung der Angular-Anwendung 

	  if (environment.production) {
	    enableProdMode();
	  }
	
	  platformBrowserDynamic().bootstrapModule(AppModule)
	    .catch(err => console.log(err));
	
	});


Das AmazonModule initialisiert den Amazon Cloud-Service. Die Initialisierung der Angular-Anwendung darf erst danach erfolgen, daher wird sie in der an AmazonModule.init() übergebenen Callback-Funktion erst ausgeführt, um die Speech-Angular Services korrekt mit dem eingerichteten Amazon Cloud-Dienst zu starten.


## Dynamische Amazon-Credentials

Will man die Amazon-Credetials nicht bei der Initialisierung übergeben, sondern erst später durch ein Formular, so kann dies mit dem optionalen Paramter: 

	const amazonOption = {
		amazonDynamicCredentialsFlag: true 
	};
	
in den Optionen eingetragen werden. Dann sind die Angaben der anderen Credentials-Parameter nicht mehr notwendig.
Die Amazon-Credentials können dann zu jedem späteren Zeitpunkt mit dem AmazonService in der Angular-App geändert werden.




