/**
 * NuanceModul zur Initialisierung von Nuance mit den Credentials
 *
 * API-Version: 1.1
 * Datum:       13.03.2019
 *
 * Letzte Aenderung: 13.03.2019
 * Status: rot
 *
 * @module speech/nuance
 * @author SB
 */


// speech-framework

import {
    Nuance
 } from 'speech-framework';


// nuance

import { NuanceModuleConfigInterface } from './nuance-module-config.interface';
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
        // pruefen auf Mock einschalten
        if ( aNuanceOption && aNuanceOption.nuanceMockFlag ) {
            aNuanceOption['nuancePortName'] = 'NuanceMock';
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


    /**
     * Freigabe des Nuance-Moduls
     */

    static done() {
        Nuance.done();
    }


    /**
     * Eintragen neuer Nuance-Credentials, wenn Nuance mit danamischen Credetials initialsiert wurde
     *
     * @param aConfigData - neue Credentials fuer Nuance eintragen
     *
     * @return Fehlercode 0 oder -1
     */

    static setConfig( aConfigData: NuanceModuleConfigInterface ): number {
        return Nuance.setConfig( aConfigData );
    }

    /**
     * Rueckgabe der eingetragenen Nuance-Credentials, wenn Nuance mit danamischen Credetials initialsiert wurde
     *
     * @return aConfigData - neue Credentials fuer Nuance eintragen
     */

    static getConfig(): NuanceModuleConfigInterface {
        return Nuance.getConfig();
    }

}
