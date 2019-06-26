import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// speech-angular

import { MicrosoftModule } from 'speech-angular';


// Microsoft-Credentials

// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
import { MICROSOFT_REGION, MICROSOFT_SUBSCRIPTION_KEY } from './../../../credentials/microsoft-credentials';
const microsoftOption = {
    microsoftDynamicCredentialsFlag: true,
    microsoftRegion: MICROSOFT_REGION,
    microsoftSubscriptionKey: MICROSOFT_SUBSCRIPTION_KEY,
    errorOutputFlag: true
};


// Initialisierung des Microsoft Cloud-Service

MicrosoftModule.init( microsoftOption, (aMicrosoftFlag: boolean) => {
  if ( microsoftOption && microsoftOption.errorOutputFlag ) {
      console.log( '===> Microsoft:', aMicrosoftFlag);
  }
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
