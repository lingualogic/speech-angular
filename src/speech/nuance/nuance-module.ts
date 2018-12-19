/**
 * NuanceModul zur Initialisierung von Nuance mit den Credentials
 *
 * API-Version: 1.0
 * Datum:       16.12.2018
 *
 * Letzte Aenderung: 16.12.2018
 * Status: rot
 *
 * @module speech/nuance
 * @author SB
 */


// speech

import {
    Nuance
 } from './../speech';


// nuance

import { NuanceModuleOptionInterface } from './nuance-module-option.interface';


/**
 * Klasse NuanceModul zur Initialisierung des Nuance Cloud-Services
 */

export class NuanceModule {


    // statische Klasse

    private constructor() {}


    /**
     * Hier wird Nuance initialsiert
     *
     * @param {NuanceModuleOptionInterface} aNuanceOption - Parameter fuer Nuance
     * @param {(boolean)=>void} aCallback - Rueckgabefunktion fuer Nuance-Flag
     * @param {boolean} aErrorOutputFlag - bestimmt die Ausgabe von Fehlermeldungen
     */

    static init( aNuanceOption: NuanceModuleOptionInterface, aCallback?: (aNuanceFlag: boolean) => void, aErrorOutputFlag = false ): void {
        // Fehlerausgabe einstellen
        if ( aErrorOutputFlag ) {
            Nuance.setErrorOutputOn();
        } else {
            Nuance.setErrorOutputOff();
        }
        // starten von Nuance
        let nuanceFlag = false;
        if ( Nuance.init( aNuanceOption ) === 0 ) {
            Nuance.open((aError: any, aPortName: string, aPortResult: number) => {
                if ( aError === null && aPortResult === 0 ) {
                    if ( aErrorOutputFlag ) {
                        console.log('===> Nuance ist vorhanden');
                    }
                    nuanceFlag = true;
                } else {
                    if ( aErrorOutputFlag ) {
                        console.log('===> Nuance ist nicht geoeffnet');
                    }
                }
                aCallback( nuanceFlag );
            });
        } else {
            if ( aErrorOutputFlag ) {
                console.log('===> Nuance ist nicht initialisiert');
            }
            aCallback( nuanceFlag );
        }
    }


    static done() {
        Nuance.done();
    }

}
