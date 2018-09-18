/**
 * Unit-Test von SpeakService
 *
 * Letzte Aenderung: 15.09.2018
 *
 * @module speech/speak
 * @author SB
 */


// speak

import { SPEAK_DE_LANGUAGE, SPEAK_EN_LANGUAGE, SPEAK_MP3_AUDIOFORMAT, SPEAK_WAV_AUDIOFORMAT } from './speak-service-const';
import { SpeakServiceConfig } from './speak-service-config';
import { SpeakService } from './speak-service';


// Testklasse

class TestSpeakService extends SpeakService {

    constructor() {
        SpeakService.setConstructorInitOff();
        super();
    }

    setOption( aOption: any): void {
        this._setOption( aOption );
    }

    mapOption( aOption: any): any {
        return this._mapOption( aOption );
    }

    error( aFuncName: string, aErrorText: string ): void {
        this._error( aFuncName, aErrorText );
    }

    exception( aFuncName: string, aException: any ): void {
        this._exception( aFuncName, aException );
    }

    addAllEvent(): number {
        return this._addAllEvent();
    }

    get errorOutputFlag() {
        return this.mErrorOutputFlag;
    }

}

// Tests

describe('SpeakService', () => {

    let speakService: TestSpeakService;

    beforeAll(() => {
        console.log('SpeakService Unit-Tests gestartet...');
    });

    beforeEach(() => {
        speakService = new TestSpeakService();
        speakService.setErrorOutputOff();
    });

    afterEach(() => {
        speakService.setErrorOutputOff();
        speakService.reset();
        speakService = null;
    });

    // setConstructorInitOn/Off

    describe('Funktion setConstructorInitOn/Off', () => {

        it('sollte constructorInitFlag ein/ausschalten', () => {
            SpeakService.setConstructorInitOn();
            expect( SpeakService.isConstructorInit()).toBe( true );
            SpeakService.setConstructorInitOff();
            expect( SpeakService.isConstructorInit()).toBe( false );
            SpeakService.setConstructorInitOn();
            expect( SpeakService.isConstructorInit()).toBe( true );
        });

    });

    // getConfig

    describe('Function getConfig', () => {

        it('sollte ServiceConfig zurueckgeben', () => {
            const config = SpeakService.getConfig();
            expect( config ).toBe( SpeakServiceConfig );
        });

    });

    // constructior

    describe('call constructor', () => {

        it('sollte erzeugt sein, ohne init auszufuehren', () => {
            expect( speakService ).toBeTruthy();
            expect( speakService.isInit()).toBe( false );
        });

        it('sollte speak vorhanden sein, wenn mit init erzeugt', () => {
            SpeakService.setConstructorInitOn();
            const service = new SpeakService();
            expect( service ).toBeTruthy();
            expect( service.isInit()).toBeTruthy();
            expect( service.active ).toBe( SpeakServiceConfig.activeFlag );
            expect( service.language ).toBe( SpeakServiceConfig.speakLanguage );
            expect( service.format ).toBe( SpeakServiceConfig.audioFormat );
            expect( service.path ).toEqual( SpeakServiceConfig.audioFilePath );
            expect( service.audio ).toEqual( SpeakServiceConfig.audioFlag );
            expect( service.errorOutput ).toEqual( SpeakServiceConfig.errorOutputFlag );
            service.reset();
            service.setErrorOutputOff();
        });

        it('sollte speak vorhanden sein, wenn mit init erzeugt und config angepasst', () => {
            const config = SpeakService.getConfig();
            config.speakLanguage = SPEAK_EN_LANGUAGE;
            config.audioFormat = SPEAK_WAV_AUDIOFORMAT;
            config.audioFilePath = 'TestPath';
            config.audioFlag = true;
            config.errorOutputFlag = true;
            SpeakService.setConstructorInitOn();
            const service = new SpeakService();
            expect( service ).toBeTruthy();
            expect( service.isInit()).toBeTruthy();
            expect( service.active ).toBe( true );
            expect( service.language ).toBe( SPEAK_EN_LANGUAGE );
            expect( service.format ).toBe( SPEAK_WAV_AUDIOFORMAT );
            expect( service.path ).toEqual( 'TestPath' );
            expect( service.audio ).toEqual( true );
            expect( service.errorOutput ).toEqual( true );
            service.reset();
            service.setErrorOutputOff();
        });

    });

    // _setOption

    describe('Funktion _setOption', () => {

        it('sollte activeFlag setzen, wenn option activeFlag', () => {
            expect( speakService.init()).toBe(0);
            expect( speakService.active ).toBe( true );
            speakService.setOption({ activeFlag: false });
            expect( speakService.active ).toBe( false );
            speakService.setOption({ activeFlag: true });
            expect( speakService.active ).toBe( true );
        });

        it('sollte speakLanguage setzen, wenn option speakFlag', () => {
            expect( speakService.init()).toBe(0);
            expect( speakService.language ).toBe( SPEAK_DE_LANGUAGE );
            speakService.setOption({ speakLanguage: SPEAK_EN_LANGUAGE });
            expect( speakService.language ).toBe( SPEAK_EN_LANGUAGE );
            speakService.setOption({ speakLanguage: SPEAK_DE_LANGUAGE });
            expect( speakService.language ).toBe( SPEAK_DE_LANGUAGE );
        });

        it('sollte audioFormat setzen, wenn option audioFormat', () => {
            expect( speakService.init()).toBe(0);
            speakService.setOption({ audioFormat: SPEAK_WAV_AUDIOFORMAT });
            expect( speakService.format ).toEqual( SPEAK_WAV_AUDIOFORMAT );
            speakService.setOption({ audioFormat: SPEAK_MP3_AUDIOFORMAT });
            expect( speakService.format ).toEqual( SPEAK_MP3_AUDIOFORMAT );
        });

        it('sollte audioFilePath setzen, wenn option audioFilePath', () => {
            expect( speakService.init()).toBe(0);
            speakService.setOption({ audioFilePath: 'TestPath' });
            expect( speakService.path ).toEqual( 'TestPath' );
        });

        it('sollte audioFlag setzen, wenn option audioFlag', () => {
            expect( speakService.init()).toBe(0);
            expect( speakService.audio ).toBe( false );
            speakService.setOption({ audioFlag: true });
            expect( speakService.audio ).toBe( true );
            speakService.setOption({ audioFlag: false });
            expect( speakService.audio ).toBe( false );
        });

        it('sollte errorOutput auf true setzen, wenn option errorOutput true', () => {
            expect( speakService.init()).toBe(0);
            speakService.setOption({ errorOutputFlag: true });
            expect( speakService.errorOutputFlag).toBe( true );
            expect( speakService.errorOutput ).toBe( true );
        });

        it('sollte errorOutput auf false setzen, wenn option errorOutput false', () => {
            expect( speakService.init()).toBe(0);
            speakService.setOption({ errorOutputFlag: false });
            expect( speakService.errorOutputFlag).toBe( false );
            expect( speakService.errorOutput ).toBe( false );
        });

    });

    // _mapOption

    describe('Funktion _mapOption', () => {

        it('sollte speakLanguage zurueckgeben, wenn option speakLanguage', () => {
            const option = speakService.mapOption({ speakLanguage: SPEAK_EN_LANGUAGE });
            expect( option ).toEqual({ speakLanguage: SPEAK_EN_LANGUAGE, errorOutputFlag: speakService.errorOutputFlag });
        });

        it('sollte audioFormat zurueckgeben, wenn option audioFormat', () => {
            const option = speakService.mapOption({ audioFormat: SPEAK_WAV_AUDIOFORMAT });
            expect( option ).toEqual({ audioFormat: SPEAK_WAV_AUDIOFORMAT, errorOutputFlag: speakService.errorOutputFlag });
        });

        it('sollte audioFilePath zurueckgeben, wenn option audioFilePath', () => {
            const option = speakService.mapOption({ audioFilePath: 'TestPath' });
            expect( option ).toEqual({ audioFilePath: 'TestPath', errorOutputFlag: speakService.errorOutputFlag });
        });

        it('sollte audioFlag zurueckgeben, wenn option audioFlag', () => {
            const option = speakService.mapOption({ audioFlag: true });
            expect( option ).toEqual({ audioFlag: true, errorOutputFlag: speakService.errorOutputFlag });
        });

        it('sollte errorOutput true zurueckgeben, wenn option errorOutput true', () => {
            const option = speakService.mapOption({ errorOutputFlag: true });
            expect( option ).toEqual({ errorOutputFlag: true });
            expect( speakService.errorOutputFlag).toBe( true );
        });

        it('sollte errorOutput false zurueckgeben, wenn option errorOutput false', () => {
            const option = speakService.mapOption({ errorOutputFlag: false });
            expect( option ).toEqual({ errorOutputFlag: false });
            expect( speakService.errorOutputFlag ).toBe( false );
        });

    });

    // init

    describe('call init', () => {

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.isErrorOutput()).toBe( false );
            expect(speakService.isActive()).toBe( true );
            expect(speakService.isAudio()).toBe( false );
            expect(speakService.getAudioFormat()).toEqual( SPEAK_MP3_AUDIOFORMAT );
            expect(speakService.getAudioFilePath()).toEqual('assets/');
            expect(speakService.getAudioFileName()).toEqual('');
            expect(speakService.getLanguage()).toBe( SPEAK_DE_LANGUAGE );
            expect(speakService.getText()).toBe('');
        });

        it('should return 0, if init and option speakLanguage', () => {
            expect(speakService.init({ speakLanguage: SPEAK_EN_LANGUAGE })).toBe(0);
            expect(speakService.getLanguage()).toEqual( SPEAK_EN_LANGUAGE );
        });

        it('should return 0, if init and option audioFormat', () => {
            expect(speakService.init({ audioFormat: SPEAK_WAV_AUDIOFORMAT })).toBe(0);
            expect(speakService.getAudioFormat()).toEqual( SPEAK_WAV_AUDIOFORMAT );
        });

        it('should return 0, if init and option audioFilePath', () => {
            expect(speakService.init({ audioFilePath: 'assets/speech/' })).toBe(0);
            expect(speakService.getAudioFilePath()).toEqual( 'assets/speech/' );
        });

        it('should return 0, if init and option audioFlag', () => {
            expect(speakService.init({ audioFlag: true })).toBe(0);
            expect(speakService.isAudio()).toBe( true );
        });

        it('should return 0, if init and option audioFlag', () => {
            expect(speakService.init({ errorOutputFlag: true })).toBe(0);
            expect(speakService.isErrorOutput()).toBe( true );
        });

    });

    // reset

    describe('call reset', () => {

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.reset()).toBe(0);
            expect(speakService.isErrorOutput()).toBe( false );
            expect(speakService.isActive()).toBe( true );
            expect(speakService.isAudio()).toBe( false );
            expect(speakService.getAudioFormat()).toEqual( SPEAK_MP3_AUDIOFORMAT );
            expect(speakService.getAudioFilePath()).toEqual('assets/');
            expect(speakService.getAudioFileName()).toEqual('');
            expect(speakService.getLanguage()).toBe( SPEAK_DE_LANGUAGE );
            expect(speakService.getText()).toBe('');
        });

        it('should return 0, if init and option speakLanguage', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.reset({ speakLanguage: SPEAK_EN_LANGUAGE })).toBe(0);
            expect(speakService.getLanguage()).toEqual( SPEAK_EN_LANGUAGE );
        });

        it('should return 0, if init and option audioFormat', () => {
            pending('AudioFormat wird an AudioPlayer nicht weitergereicht');
            expect(speakService.init()).toBe(0);
            expect(speakService.reset({ audioFormat: SPEAK_WAV_AUDIOFORMAT })).toBe(0);
            expect(speakService.getAudioFormat()).toEqual( SPEAK_WAV_AUDIOFORMAT );
        });

        it('should return 0, if init and option audioFilePath', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.reset({ audioFilePath: 'assets/speech/' })).toBe(0);
            expect(speakService.getAudioFilePath()).toEqual( 'assets/speech/' );
        });

        it('should return 0, if init and option audioFlag', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.reset({ audioFlag: true })).toBe(0);
            expect(speakService.isAudio()).toBe( true );
        });

        it('should return 0, if init and option audioFlag', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.reset({ errorOutputFlag: true })).toBe(0);
            expect(speakService.isErrorOutput()).toBe( true );
        });

    });

    // isInit

    describe('Funktion istInit', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(speakService.isInit()).toBe(false);
        });

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde sondern nur reset', () => {
            expect(speakService.reset()).toBe(-1);
            expect(speakService.isInit()).toBe(false);
        });

        it('sollte true zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.isInit()).toBe(true);
        });

        it('sollte true zurueckgeben, wenn init und reset aufgerufen wurden', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.isInit()).toBe(true);
            expect(speakService.reset()).toBe(0);
            expect(speakService.isInit()).toBe(true);
        });

    });

    // isActive

    describe('call istActive', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(speakService.isActive()).toBe( false );
        });

        it('should return true, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.isActive()).toBe( true );
        });

        it('should return false, if init and active off', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setActiveOff()).toBe(0);
            expect(speakService.isActive()).toBe( false );
        });

        it('should return true, if init and active on', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setActiveOff()).toBe(0);
            expect(speakService.setActiveOn()).toBe(0);
            expect(speakService.isActive()).toBe( true );
        });

    });

    // setActiveOn

    describe('call setActiveOn', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(speakService.setActiveOn()).toBe(-1);
            expect(speakService.isActive()).toBe( false );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setActiveOn()).toBe(0);
            expect(speakService.isActive()).toBe( true );
        });

    });

    // setActiveOff

    describe('call setActiveOff', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(speakService.setActiveOff()).toBe(-1);
            expect(speakService.isActive()).toBe( false );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setActiveOff()).toBe(0);
            expect(speakService.isActive()).toBe( false );
        });

    });

    // active

    describe('Eigenschaft active', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen und auf true gesetzt wurde', () => {
            speakService.active = true;
            expect( speakService.active ).toBe( false );
        });

        it('sollte true zurueckgeben, wenn init aufgerufen und auf true gesetzt wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.active = true;
            expect( speakService.active ).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen und auf false gesetzt wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.active = false;
            expect( speakService.active ).toBe( false );
        });

    });

    // isErrorOutput

    describe('call isErrorOutput', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            expect(speakService.isErrorOutput()).toBe( false );
        });

        it('should return false, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.isErrorOutput()).toBe( false );
        });

        it('should return true, if init and error output on', () => {
            expect(speakService.init()).toBe(0);
            speakService.setErrorOutputOn();
            expect(speakService.isErrorOutput()).toBe( true );
        });

        it('should return false, if init and error output off', () => {
            expect(speakService.init()).toBe(0);
            speakService.setErrorOutputOn();
            speakService.setErrorOutputOff();
            expect(speakService.isErrorOutput()).toBe( false );
        });

    });

    // setErrorOutputOn

    describe('call setErrorOutputOn', () => {

        it('sollte true zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            speakService.setErrorOutputOn();
            expect(speakService.isErrorOutput()).toBe( true );
        });

        it('should return true, if init', () => {
            expect(speakService.init()).toBe(0);
            speakService.setErrorOutputOn();
            expect(speakService.isErrorOutput()).toBe( true );
        });

    });

    // setErrorOutputOff

    describe('call setErrorOutputOff', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', () => {
            speakService.setErrorOutputOff();
            expect(speakService.isErrorOutput()).toBe( false );
        });

        it('should return false, if init', () => {
            expect(speakService.init()).toBe(0);
            speakService.setErrorOutputOff();
            expect(speakService.isErrorOutput()).toBe( false );
        });

    });

    // errorOutput

    describe('Eigenschaft errorOutput', () => {

        it('sollte true zurueckgeben, wenn init nicht aufgerufen und auf true gesetzt wurde', () => {
            speakService.errorOutput = true;
            expect( speakService.errorOutput ).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init nicht aufgerufen und auf false gesetzt wurde', () => {
            speakService.errorOutput = false;
            expect( speakService.errorOutput ).toBe( false );
        });

        it('sollte true zurueckgeben, wenn init aufgerufen und auf true gesetzt wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.errorOutput = true;
            expect( speakService.errorOutput ).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen und auf false gesetzt wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.errorOutput = false;
            expect( speakService.errorOutput ).toBe( false );
        });

    });

    // _error

    // _exception

    // _addAllEvent

    describe('Funktion _addAllEvent', () => {

        it('sollte -1 zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService._addAllEvent: keine Speak-Komponente vorhanden');
                done();
            });
            expect(speakService.addAllEvent()).toBe(-1);
        });

        it('sollte 0 zurueckgeben, wenn init aufgerufen wurde', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.addAllEvent()).toBe(0);
        });

    });

    // xxxEvent

    describe('call xxxEvent', () => {

        it('should return event', () => {
            expect(speakService.startEvent).toBeTruthy();
            expect(speakService.stopEvent).toBeTruthy();
            expect(speakService.errorEvent).toBeTruthy();
        });

    });

    // isAudio

    describe('call isAudio', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.isAudio: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.isAudio()).toBe( false );
        });

        it('should return false, if init', () => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                fail('Test Error: ' + aError.message);
                return 0;
            });
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioOff()).toBe(0);
            expect(speakService.isAudio()).toBe(false);
            errorEvent.unsubscribe();
        });

        it('should return true, if init and audio on', () => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                fail('Test Error: ' + aError.message);
                return 0;
            });
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioOn()).toBe(0);
            expect(speakService.isAudio()).toBe(true);
            errorEvent.unsubscribe();
        });

    });

    // setAudioOn

    describe('call setAudioOn', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioOn: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.setAudioOn()).toBe( -1 );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioOn()).toBe(0);
        });

    });

    // setAudioOff

    describe('call setAudioOff', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioOff: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.setAudioOff()).toBe( -1 );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioOff()).toBe(0);
        });

    });

    // audio

    describe('Eigenschaft audio', () => {

        it('sollte audio nicht setzen, wenn init nicht aufgerufen und auf true gesetzt wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioOn: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            speakService.audio = true;
        });

        it('sollte audio false zurueckgeben, wenn init nicht aufgerufen und auf true gesetzt wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.isAudio: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect( speakService.audio ).toBe( false );
        });

        it('sollte true zurueckgeben, wenn init aufgerufen und auf true gesetzt wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.audio = true;
            expect( speakService.audio ).toBe( true );
        });

        it('sollte false zurueckgeben, wenn init aufgerufen und auf false gesetzt wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.audio = false;
            expect( speakService.audio ).toBe( false );
        });

    });

    // setAudioFormat

    describe('call setAudioFormat', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioFormat: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.setAudioFormat('')).toBe( -1 );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioFormat( SPEAK_WAV_AUDIOFORMAT )).toBe(0);
            expect(speakService.getAudioFormat()).toEqual( SPEAK_WAV_AUDIOFORMAT );
        });

    });

    // getAudioFormat

    describe('call getAudioFormat', () => {

        it('sollte false zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getAudioFormat: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.getAudioFormat()).toBe( '' );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.getAudioFormat()).toEqual( SPEAK_MP3_AUDIOFORMAT );
        });

    });

    // format

    describe('Eigenschaft format', () => {

        it('sollte format nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioFormat: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            speakService.format = '';
        });

        it('sollte leeres audio zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getAudioFormat: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect( speakService.format ).toBe( '' );
        });

        it('sollte format setzen, wenn init aufgerufen wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.format = SPEAK_WAV_AUDIOFORMAT;
            expect( speakService.format ).toBe( SPEAK_WAV_AUDIOFORMAT );
        });

    });

    // setAudioFilePath

    describe('call setAudioFilePath', () => {

        it('sollte path nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioFilePath: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.setAudioFilePath('')).toBe( -1 );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioFilePath( 'TestPath' )).toBe(0);
            expect(speakService.getAudioFilePath()).toEqual( 'TestPath' );
        });

    });

    // getAudioFilePath

    describe('call getAudioFilePath', () => {

        it('sollte leeren path zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getAudioFilePath: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.getAudioFilePath()).toBe( '' );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.getAudioFilePath()).toEqual( 'assets/' );
        });

    });

    // path

    describe('Eigenschaft path', () => {

        it('sollte path nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioFilePath: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            speakService.path = '';
        });

        it('sollte leeren path zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getAudioFilePath: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect( speakService.path ).toBe( '' );
        });

        it('sollte path setzen, wenn init aufgerufen wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.path = 'TestPath';
            expect( speakService.path ).toBe( 'TestPath' );
        });

    });

    // setAudioFileName

    describe('call setAudioFileName', () => {

        it('sollte file nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioFileName: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.setAudioFileName('')).toBe( -1 );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioFileName( 'TestFile' )).toBe(0);
            expect(speakService.getAudioFileName()).toEqual( 'TestFile' );
        });

    });

    // getAudioFileName

    describe('call getAudioFileName', () => {

        it('sollte leeres file zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getAudioFileName: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.getAudioFileName()).toBe( '' );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.getAudioFileName()).toEqual( '' );
        });

    });

    // file

    describe('Eigenschaft file', () => {

        it('sollte file nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setAudioFileName: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            speakService.file = '';
        });

        it('sollte leeres file zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getAudioFileName: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect( speakService.file ).toBe( '' );
        });

        it('sollte file setzen, wenn init aufgerufen wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.file = 'TestFile';
            expect( speakService.file ).toBe( 'TestFile' );
        });

    });

    // setLanguage

    describe('call setLanguage', () => {

        it('sollte language nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setLanguage: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.setLanguage('')).toBe( -1 );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setLanguage( SPEAK_EN_LANGUAGE )).toBe(0);
            expect(speakService.getLanguage()).toEqual( SPEAK_EN_LANGUAGE );
        });

    });

    // getLanguage

    describe('call getLanguage', () => {

        it('sollte leere language zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getLanguage: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.getLanguage()).toBe( '' );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.getLanguage()).toEqual( SPEAK_DE_LANGUAGE );
        });

    });

    // language

    describe('Eigenschaft language', () => {

        it('sollte language nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setLanguage: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            speakService.language = '';
        });

        it('sollte leere language zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getLanguage: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect( speakService.language ).toBe( '' );
        });

        it('sollte language setzen, wenn init aufgerufen wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.language = SPEAK_EN_LANGUAGE;
            expect( speakService.language ).toBe( SPEAK_EN_LANGUAGE );
        });

    });

    // setText

    describe('call setText', () => {

        it('sollte text nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setText: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.setText('')).toBe( -1 );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.setText( 'TestText' )).toBe(0);
            expect(speakService.getText()).toEqual( 'TestText' );
        });

    });

    // getText

    describe('call getText', () => {

        it('sollte leere text zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getText: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect(speakService.getText()).toBe( '' );
        });

        it('should return 0, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.getLanguage()).toEqual( SPEAK_DE_LANGUAGE );
        });

    });

    // text

    describe('Eigenschaft text', () => {

        it('sollte text nicht setzen, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.setText: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            speakService.text = '';
        });

        it('sollte leeren text zurueckgeben, wenn init nicht aufgerufen wurde', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                expect(aError.message).toEqual('SpeakService.getText: keine Speak-Komponente vorhanden');
                done();
                return 0;
            });
            expect( speakService.text ).toBe( '' );
        });

        it('sollte text setzen, wenn init aufgerufen wurde', () => {
            expect( speakService.init()).toBe( 0 );
            speakService.text = 'TestText';
            expect( speakService.text ).toBe( 'TestText' );
        });

    });

    // isRunning

    describe('call istRunning', () => {


        it('should return false, if init', () => {
            expect(speakService.init()).toBe(0);
            expect(speakService.isRunning()).toBe( false );
        });

    });

    // start TTS

    describe('call start TTS', () => {

        it('should return 0, if init', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                done.fail('Test Error: ' + aError.message);
                return 0;
            });
            let callStart = false;
            const startEvent = speakService.startEvent.subscribe(() => {
                startEvent.unsubscribe();
                callStart = true;
                return 0;
            });
            const stopEvent = speakService.stopEvent.subscribe(() => {
                errorEvent.unsubscribe();
                stopEvent.unsubscribe();
                expect(callStart).toBe(true);
                done();
                return 0;
            });
            expect(speakService.init()).toBe(0);
            expect(speakService.setText( 'TestText' )).toBe(0);
            expect(speakService.start()).toBe(0);
            expect(speakService.isRunning()).toBe( true );
        });

    });

    // stop TTS

    describe('call stop TTS', () => {


        it('should return 0, if init', () => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                fail('Test Error: ' + aError.message);
                return 0;
            });
            expect(speakService.init()).toBe(0);
            expect(speakService.stop()).toBe(0);
            errorEvent.unsubscribe();
        });

        it('should return 0, if init and start', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                // done.fail('Test Error: ' + aError.message);
                done.fail('Test Error: ');
                return 0;
            });
            let callStart = false;
            const startEvent = speakService.startEvent.subscribe(() => {
                startEvent.unsubscribe();
                callStart = true;
                return 0;
            });
            const stopEvent = speakService.stopEvent.subscribe(() => {
                errorEvent.unsubscribe();
                stopEvent.unsubscribe();
                expect(callStart).toBe(true);
                done();
                return 0;
            });
            expect(speakService.init()).toBe(0);
            expect(speakService.setText( 'TestText' )).toBe(0);
            expect(speakService.start()).toBe(0);
            expect(speakService.isRunning()).toBe( true );
            expect(speakService.stop()).toBe(0);
            expect(speakService.isRunning()).toBe( false );
        });

    });

    // start Audio

    describe('call start Audio', () => {

        it('should return 0, if init', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                done.fail('Test Error: ' + aError.message);
                return 0;
            });
            let callStart = false;
            const startEvent = speakService.startEvent.subscribe(() => {
                startEvent.unsubscribe();
                callStart = true;
                return 0;
            });
            const stopEvent = speakService.stopEvent.subscribe(() => {
                errorEvent.unsubscribe();
                stopEvent.unsubscribe();
                expect(callStart).toBe(true);
                done();
                return 0;
            });
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioOn()).toBe(0);
            expect(speakService.setAudioFilePath( './../../assets/speech/audio/' )).toBe(0);
            expect(speakService.setAudioFileName( 'yannick1' )).toBe(0);
            expect(speakService.start()).toBe(0);
            expect(speakService.isRunning()).toBe( true );
        });

    });

    // stop Audio

    describe('call stop Audio', () => {


        it('should return 0, if init', () => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                fail('Test Error: ' + aError.message);
                return 0;
            });
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioOn()).toBe(0);
            expect(speakService.stop()).toBe(0);
            errorEvent.unsubscribe();
        });

        it('should return 0, if init and start', (done) => {
            const errorEvent = speakService.errorEvent.subscribe((aError: any) => {
                errorEvent.unsubscribe();
                done.fail('Test Error: ' + aError.message);
                return 0;
            });
            let callStart = false;
            const startEvent = speakService.startEvent.subscribe(() => {
                startEvent.unsubscribe();
                callStart = true;
                return 0;
            });
            const stopEvent = speakService.stopEvent.subscribe(() => {
                errorEvent.unsubscribe();
                stopEvent.unsubscribe();
                expect(callStart).toBe(true);
                expect(speakService.isRunning()).toBe( false );
                done();
                return 0;
            });
            expect(speakService.init()).toBe(0);
            expect(speakService.setAudioOn()).toBe(0);
            expect(speakService.setAudioFilePath('./../../assets/speech/audio/')).toBe(0);
            expect(speakService.setAudioFileName( 'yannick1' )).toBe(0);
            expect(speakService.start()).toBe(0);
            setTimeout(() => { expect(speakService.stop()).toBe(0); }, 1000);
        });

    });

});


