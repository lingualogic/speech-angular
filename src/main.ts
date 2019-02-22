import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// nuance

import { NuanceModule } from './speech/nuance/nuance-module';


// Nuance-Credentials

// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
// import { APP_ID, APP_KEY, NLU_TAG } from './config/nuance-credentials';
import { APP_ID, APP_KEY, NLU_TAG } from './../credentials/nuance-credentials';
const nuanceOption = {
  nuanceAppId: APP_ID,
  nuanceAppKey: APP_KEY,
  nuanceNluTag: NLU_TAG
};


// Initialisierung des Nuance Cloud-Dienstes

NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
  console.log('Nuance:', aNuanceFlag);

  environment.nuance = aNuanceFlag;

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

});

