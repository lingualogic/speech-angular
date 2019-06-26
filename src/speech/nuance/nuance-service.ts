/**
 * Nuance-Service zur Aenderung der Credentials
 *
 * API-Version: 1.0
 * Datum:       17.03.2019
 *
 * Letzte Aenderung: 17.03.2019
 * Status: rot
 *
 * @module speech/nuance
 * @author SB
 */

import { Injectable } from '@angular/core';


// nuance

import { NuanceModule } from './nuance-module';
import { NuanceModuleConfigInterface } from './nuance-module-config.interface';


/**
 * @deprecated
 */

@Injectable({
    providedIn: 'root'
})
export class NuanceService {

    constructor() {}


    /**
     * Uebergabe der Nuance-Credentials
     *
     * @param aAppId - Nuance App-ID
     * @param aAppKey - Nuance App-Key
     * @param aNluTag - Nuance NLU-Tag
     */

    setCredentials( aAppId: string, aAppKey: string , aNluTag: string ): number {
        const configData: NuanceModuleConfigInterface = {
            nuanceAppId: aAppId,
            nuanceAppKey: aAppKey,
            nuanceNluTag: aNluTag
        };
        return NuanceModule.setConfig( configData );
    }

}
