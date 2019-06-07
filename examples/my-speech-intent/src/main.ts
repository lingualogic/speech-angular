import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// Speech-Angular

import { GoogleModule } from 'speech-angular';


// Google-Credentials

import { GOOGLE_APP_KEY } from './../credentials/google-credentials';
const googleOption = {
    googleDynamicCredentialsFlag: false,
    googleAppKey: GOOGLE_APP_KEY,
    errorOutputFlag: true
};


// Initialisierung des Google Cloud-Service

GoogleModule.init( googleOption, (aGoogleFlag: boolean) => {
  if ( googleOption && googleOption.errorOutputFlag ) {
      console.log( '===> Google:', aGoogleFlag);
  }
  environment.google = aGoogleFlag;

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

});


/**** TODO: Nuance ist nicht mehr verwendbar

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

****/