/**
 * Unit-Test von NuanceModule
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

import { NuanceModuleConfigInterface } from './nuance-module-config.interface';
import { NuanceModuleOptionInterface } from './nuance-module-option.interface';
import { NuanceModule } from './nuance-module';


// Konstanten


// NuanceMock ein/ausschalten, um Tests auch mit NuancePort durchfuehren zu koennen.
// ist NuanceMoch false, muss das Netzwerk eingeschaltet sein, damit NuancePort richtig funktioniert

const NUANCE_MOCK_FLAG = true;

// ErrorOutput ein/ausschalten fuer erweiterte Fehlerausgabe

const ERROR_OUTPUT_FLAG = false;


// Tests

describe('NuanceModule', () => {

    beforeAll(() => {
        console.log('NuanceModule Unit-Tests gestartet...');
    });

    afterEach(() => {
        NuanceModule.done();
    });

    // init

    describe('Funktion init', () => {

        it('sollte NuanceFlag true zurueckgeben, wenn nuanceDynamicCredentialsFlag true ist', (done) => {
            const nuanceOption: NuanceModuleOptionInterface = {
                nuanceDynamicCredentialsFlag: true,
                nuanceMockFlag: NUANCE_MOCK_FLAG
            };
            NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
                expect( aNuanceFlag ).toBe( true );
                done();
            }, ERROR_OUTPUT_FLAG );
        });

        it('sollte NuanceFlag false zurueckgeben, wenn nuanceParameter empty ist', (done) => {
            const nuanceOption: NuanceModuleOptionInterface = {
                nuanceMockFlag: NUANCE_MOCK_FLAG
            };
            NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
                expect( aNuanceFlag ).toBe( false );
                done();
            }, ERROR_OUTPUT_FLAG );
        });

    });

    // setConfig

    describe('Funktion setConfig', () => {

        it('sollte Credentials nicht eintragen, wenn nuanceDynamicCredentialsFlag false ist', (done) => {
            const nuanceConfigData: NuanceModuleConfigInterface = {
                nuanceAppId: 'testAppId',
                nuanceAppKey: 'testAppKey',
                nuanceNluTag: 'testNluTag'
            };
            const nuanceOption: NuanceModuleOptionInterface = {
                nuanceDynamicCredentialsFlag: false,
                nuanceAppId: 'testAppId',
                nuanceAppKey: 'testAppKey',
                nuanceNluTag: 'testNluTag',
                nuanceMockFlag: NUANCE_MOCK_FLAG
            };
            NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
                expect( aNuanceFlag ).toBe( true );
                expect( NuanceModule.setConfig( nuanceConfigData )).toBe( -1 );
                done();
            }, ERROR_OUTPUT_FLAG );
        });

        it('sollte Credentials eintragen, wenn nuanceDynamicCredentialsFlag true ist', (done) => {
            const nuanceConfigData: NuanceModuleConfigInterface = {
                nuanceAppId: 'testAppId',
                nuanceAppKey: 'testAppKey',
                nuanceNluTag: 'testNluTag'
            };
            const nuanceOption: NuanceModuleOptionInterface = {
                nuanceDynamicCredentialsFlag: true,
                nuanceMockFlag: NUANCE_MOCK_FLAG
            };
            NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
                expect( aNuanceFlag ).toBe( true );
                expect( NuanceModule.setConfig( nuanceConfigData )).toBe( 0 );
                const configData = NuanceModule.getConfig();
                expect( configData ).toEqual( nuanceConfigData );
                done();
            }, ERROR_OUTPUT_FLAG );
        });

    });

});
