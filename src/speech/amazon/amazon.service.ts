/**
 * AmazonService zur Aenderung der Credentials
 *
 * API-Version: 1.0
 * Datum:       03.04.2019
 *
 * Letzte Aenderung: 03.04.2019
 * Status: rot
 *
 * @module speech/amazon
 * @author SB
 */

import { Injectable } from '@angular/core';


// amazon

import { AmazonModule } from './amazon-module';
import { AmazonModuleConfigInterface } from './amazon-module-config.interface';
import { config } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AmazonService {

    constructor() {}


    /**
     * Uebergabe der Amazon-Credentials
     *
     * @param aRegion - Amazon Region
     * @param aIdentityPoolId - Amazon Credentials
     */

    setCredentials( aRegion: string, aIdentityPoolId: string ): number {
        const configData: AmazonModuleConfigInterface = {
            amazonRegion: aRegion,
            amazonIdentityPoolId: aIdentityPoolId
        };
        console.log('AmazonService.setCredentials:', configData);
        return AmazonModule.setConfig( configData );
    }

}
