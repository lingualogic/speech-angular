/**
 * Unit-Test von NuanceService
 *
 * Letzter Aenderung: 13.03.2019
 * Status: gelb
 *
 * getestet unter:  Chrome(Mac)
 *
 * @module speech/nuance
 * @author SB
 */


// nuance

import { NuanceModuleOptionInterface } from './nuance-module-option.interface';
import { NuanceModule } from './nuance-module';
import { NuanceService } from './nuance-service';


// Konstanten


// NuanceMock ein/ausschalten, um Tests auch mit NuancePort durchfuehren zu koennen.
// ist NuanceMoch false, muss das Netzwerk eingeschaltet sein, damit NuancePort richtig funktioniert

const NUANCE_MOCK_FLAG = true;

// ErrorOutput ein/ausschalten fuer erweiterte Fehlerausgabe

const ERROR_OUTPUT_FLAG = false;


// Tests

describe('NuanceService', () => {

    let nuanceService: NuanceService = null;

    beforeAll(() => {
        console.log('NuanceService Unit-Tests gestartet...');
    });

    beforeEach((done) => {
        const nuanceOption: NuanceModuleOptionInterface = {
            nuanceDynamicCredentialsFlag: true,
            nuanceMockFlag: NUANCE_MOCK_FLAG
        };
        NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
            expect( aNuanceFlag ).toBe( true );
            nuanceService = new NuanceService();
            done();
        }, ERROR_OUTPUT_FLAG );

    });

    afterEach(() => {
        NuanceModule.done();
    });

    // setCredentials

    describe('Funktion setCredentials', () => {

        it('sollte Credentials eintragen', () => {
            expect( nuanceService.setCredentials( 'TestAppId', 'TestAppKey', 'TestNluTag' )).toBe( 0 );
            const credentials = NuanceModule.getConfig();
            expect( credentials.nuanceAppId ).toBe( 'TestAppId' );
            expect( credentials.nuanceAppKey ).toBe( 'TestAppKey' );
            expect( credentials.nuanceNluTag ).toBe( 'TestNluTag' );
        });

    });

});
