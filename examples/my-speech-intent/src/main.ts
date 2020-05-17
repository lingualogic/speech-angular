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
