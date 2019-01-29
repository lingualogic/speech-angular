/**
 * Hilfsfunktion zur Initialisierung von Nuance mit den Credentials
 */


// speech-framework

import {
    Nuance
 } from 'speech-framework';


// Nuance-Credentials

// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
// import { APP_ID, APP_KEY, NLU_TAG } from './../../config/nuance-credentials';
import { APP_ID, APP_KEY, NLU_TAG } from './../../config/nuance-credentials.default';
const nuanceOption = {
    nuanceAppId: APP_ID,
    nuanceAppKey: APP_KEY,
    nuanceNluTag: NLU_TAG,
    errorOutputFlag: false
};


/**
 * Hier wird Nuance initialsiert
 *
 * @param aCallback - Rueckgabefunktion fuer Nuance-Flag
 * @param aErrorOutputFlag - bestimmt die Ausgabe von Fehlermeldungen
 */

export function initNuance( aCallback: (aNuanceFlag: boolean) => void, aErrorOutputFlag = false ): void {
    // Fehlerausgabe einstellen
    if ( aErrorOutputFlag ) {
        Nuance.setErrorOutputOn();
    } else {
        Nuance.setErrorOutputOff();
    }
    // starten von Nuance
    let nuanceFlag = false;
    if ( Nuance.init( nuanceOption ) === 0 ) {
        Nuance.open((aError: any, aPortName: string, aPortResult: number) => {
            if ( aError === null && aPortResult === 0 ) {
                console.log('===> Nuance ist vorhanden');
                nuanceFlag = true;
            } else {
                console.log('===> Nuance ist nicht geoeffnet');
            }
            aCallback( nuanceFlag );
        });
    } else {
        console.log('===> Nuance ist nicht initialisiert');
        aCallback( nuanceFlag );
    }
}


export function doneNuance() {
    Nuance.done();
}
