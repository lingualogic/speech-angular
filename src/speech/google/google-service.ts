/**
 * GoogleService zur Aenderung der Credentials
 *
 * API-Version: 1.0
 * Datum:       09.05.2019
 *
 * Letzte Aenderung: 09.05.2019
 * Status: rot
 *
 * @module speech/google
 * @author SB
 */


// extern

import { Injectable } from '@angular/core';


// google

import { GoogleModule } from './google-module';
import { GoogleModuleConfigInterface } from './google-module-config.interface';


@Injectable({ providedIn: 'root' })
export class GoogleService {

    
    /**
     * Dummy-Initfunktion fuer Service-Manager
     * 
     * @param aOption 
     */

    init( aOption: any ): number {
        return 0;
    }


    /**
     * Uebergabe der Google-Credentials
     *
     * @param aAppKey - Google AppKey
     */

    setCredentials( aAppKey: string ): number {
        const configData: GoogleModuleConfigInterface = {
            googleAppKey: aAppKey
        };
        console.log('GoogleService.setCredentials:', configData);
        return GoogleModule.setConfig( configData );
    }

}
