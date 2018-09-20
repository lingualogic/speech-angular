/**
 * Speak-Service fuer die Integration von Speak in Angular
 *
 * API-Version: 1.0
 * Datum:       15.09.2018
 *
 * Letzte Aenderung: 15.09.2018
 * Status:           gruen
 *
 * @module speech/speak
 * @author SB
 */


// extern

import { EventEmitter, Injectable } from '@angular/core';


// speech

import {
    SPEAK_COMPONENT_NAME,
    SpeakFactory,
    SpeakInterface,
    SpeakOptionInterface
} from './../speech';


// speak

import { SPEAK_SERVICE_NAME } from './speak-service-const';
import { SPEAKSERVICE_API_VERSION } from './speak-service-version';
import { SpeakServiceConfig } from './speak-service-config';
import { SpeakServiceOptionInterface } from './speak-service-option.interface';


// Konstanten

/**
 * Stellt ein, ob die Events synchron oder asynchron ausgeliefert werden
 */

const SPEAK_ASYNC_EVENT = true;


/**
 * Setzt den Daufaultwert fuer Fehlerausgaben auf der Konsole
 */

const SPEAK_ERROR_OUTPUT = false;


/** @export
 * SpeakService Klasse
 */

@Injectable({
    providedIn: 'root',
})
export class SpeakService {

    /** definiert die Konfiguration des Service */

    protected static speakServiceConfig = SpeakServiceConfig;

    /** legt fest, ob die Initialisierung im Konstruktor bereits erfolgt */

    private static constructorInitFlag = true;

    // Speak-Komponente

    private mSpeak: SpeakInterface = null;

    // Service-Events

    private mSpeakStartEvent = new EventEmitter( SPEAK_ASYNC_EVENT );
    private mSpeakStopEvent = new EventEmitter( SPEAK_ASYNC_EVENT );
    private mErrorEvent = new EventEmitter<any>( SPEAK_ASYNC_EVENT );

    /**
     * Fehlerausgabe fuer Konsole festlegen
     */

    protected mErrorOutputFlag = SPEAK_ERROR_OUTPUT;


    /**
     * pruefen auf ConstructorInitFlag fuer Festlegung, ob der Konstructor init aufruft.
     *
     * @static
     * @return {boolean} ConstructorInitFlag - True, Konstructor initialisiert den Service, False sonst
     */

    static isConstructorInit(): boolean {
        return SpeakService.constructorInitFlag;
    }


    /**
     * setzen des ConstructorInitFlag auf true, um init im Konstruktor aufzurufen.
     *
     * @static
     */

    static setConstructorInitOn(): void {
        SpeakService.constructorInitFlag = true;
    }


    /**
     * loescht das ConstructorInitFlag, um init nicht im Konstruktor aufzurufen.
     *
     * @static
     */

    static setConstructorInitOff(): void {
        SpeakService.constructorInitFlag = false;
    }


    /**
     * Rueckgabe der Konfiguration fuer den Service, um die Konfiguration zu veraendern.
     * Muss vor der Erzeugung des Service aufgerufen werden. Wird nur im Zusammenhang mit
     * dem gesetzten ConstructorInitFlag verwendet, welches die Initialisierung des Service
     * im Konstruktor vornimmt. Bei manuellem Aufruf von Init kann diese Funktion zur
     * Uebergabe der Optionen verwendet werden.
     *
     * @static
     * @return {SpeakServiceOptionInterface} SpeakServiceOptions - dient zur Einstellung der otionalen Parameter
     */

    static getConfig(): SpeakServiceOptionInterface {
        return SpeakService.speakServiceConfig;
    }


    /**
     * Konstruktor
     */

    constructor() {
        // console.log('SpeakService.constructor: initFlag = ', SpeakService.isConstructorInit(), SpeakService.getConfig());
        if ( SpeakService.isConstructorInit()) {
            if ( this.init( SpeakService.getConfig()) !== 0 ) {
                throw new Error( 'Speak nicht initialisiert' );
            }
        }
    }


    // Service-Funktionen


    /**
     * Optionen eintragen
     *
     * @private
     * @param {SpeakServiceOptionInterface} aOption - optionale Parameter
     */

    protected _setOption( aOption: SpeakServiceOptionInterface ): void {
        // console.log('SpeakService._setOption:', aOption);
        if ( !aOption ) {
            return;
        }
        // ActiveFlag uebertragen
        if ( typeof aOption.activeFlag === 'boolean' ) {
            this.active = aOption.activeFlag;
        }
        // Sprache uebertragen
        if ( typeof aOption.speakLanguage === 'string' ) {
            this.language = aOption.speakLanguage;
        }
        // Audioformat uebertragen
        if ( typeof aOption.audioFormat === 'string' ) {
            this.format = aOption.audioFormat;
        }
        // Audiodateiverzeichnis uebertragen
        if ( typeof aOption.audioFilePath === 'string' ) {
            this.path = aOption.audioFilePath;
        }
        // Audioflag uebertragen
        if ( typeof aOption.audioFlag === 'boolean' ) {
            this.audio = aOption.audioFlag;
        }
        // Fehlerausgabeflag uebergeben
        if ( typeof aOption.errorOutputFlag === 'boolean' ) {
            this.errorOutput = aOption.errorOutputFlag;
        }
    }


    /**
     * Optionen uebertragen in SpeakOptionen
     *
     * @protected
     * @param {SpeakServiceOptionInterface} aOption - optionale Parameter
     * @return {any} Rueckgabe fuer Bot Optionen
     */

    protected _mapOption( aOption: SpeakServiceOptionInterface ): any {
        // Optionen uebertragen
        const option: SpeakOptionInterface = {
            errorOutputFlag: this.mErrorOutputFlag
        };
        if ( !aOption ) {
            return option;
        }
        // Sprache uebertragen
        if ( typeof aOption.speakLanguage === 'string' ) {
            option.speakLanguage = aOption.speakLanguage;
        }
        // Audioformat uebertragen
        if ( typeof aOption.audioFormat === 'string' ) {
            option.audioFormat = aOption.audioFormat;
        }
        // Audiodateiverzeichnis uebertragen
        if ( typeof aOption.audioFilePath === 'string' ) {
            option.audioFilePath = aOption.audioFilePath;
        }
        // Audioflag uebertragen
        if ( typeof aOption.audioFlag === 'boolean' ) {
            option.audioFlag = aOption.audioFlag;
        }
        // Fehlerausgabeflag uebergeben
        if ( typeof aOption.errorOutputFlag === 'boolean' ) {
            option.errorOutputFlag = aOption.errorOutputFlag;
            this.mErrorOutputFlag = aOption.errorOutputFlag;
        }
        return option;
    }


    /**
     * Initialisierung des Service
     *
     * @param {SpeakServiceOptionInterface} aOption - optionale Parameter zur Konfiguration des Service
     *
     * @return {number} Fehlercode 0 oder -1
     */

    init( aOption?: SpeakServiceOptionInterface ): number {
        // console.log('SpeakService.init: start errorOutpoutFlag = ', this.mErrorOutputFlag, this.isErrorOutput());
        // pruefen auf bereits initialisiert
        if ( this.mSpeak ) {
            this._setOption( aOption );
            return 0;
        }
        // Optionen uebertragen (BotService->Bot)
        const option = this._mapOption( aOption ) as SpeakOptionInterface;
        // Speak erzeugen
        // console.log('SpeakService.init:', option);
        this.mSpeak = SpeakFactory.create( SPEAK_COMPONENT_NAME, option );
        if ( !this.mSpeak ) {
            this._error('init', 'Speak nicht erzeugt');
            return -1;
        }
        // Optionen eintragen in SpeakService
        this._setOption( aOption );
        if ( this.mErrorOutputFlag ) {
            console.log( 'SpeakService Version:', SPEAKSERVICE_API_VERSION );
        }
        // console.log('SpeakService.init: option errorOutpoutFlag = ', this.mErrorOutputFlag, this.isErrorOutput());
        // SpeakEvents auf EventEmitter mappen
        return this._addAllEvent();
    }


    /**
     * Ruecksetzen des Services, alle Werte werden auf ihre Defaultwerte gesetzt
     *
     * @param {SpeakServiceOptionInterface} aOption - optionale Parameter zur Konfiguration des Service
     *
     * @return {number} Fehlercode 0 oder -1
     */

    reset( aOption?: SpeakServiceOptionInterface ): number {
        if ( !this.mSpeak ) {
            this._error('reset', 'Speak nicht vorhanden');
            return -1;
        }
        // Optionen uebertragen (SpeakService->Speak)
        const option = this._mapOption( aOption ) as SpeakOptionInterface;
        const result = this.mSpeak.reset( option );
        this._setOption( aOption );
        return result;
    }


    /**
     * pruefen auf initialisierten Service
     *
     * @return {boolean} Rueckgabe, ob Service initialisiert ist
     */

    isInit(): boolean {
        if ( this.mSpeak ) {
            return true;
        }
        return false;
    }


    /**
     * pruefen auf aktive Komponente
     *
     * @return {boolean} aktivFlag
     */

    isActive(): boolean {
        if ( this.mSpeak ) {
            return this.mSpeak.isActive();
        }
        return false;
    }


    /**
     * Komponente aktivieren
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActiveOn(): number {
        if ( this.mSpeak ) {
            return this.mSpeak.setActiveOn();
        }
        return -1;
    }


    /**
     * Komponente daaktivieren
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActiveOff(): number {
        if ( this.mSpeak ) {
            return this.mSpeak.setActiveOff();
        }
        return -1;
    }


    /**
     * Eigenschaft aktive Komponente setzen
     *
     * @param {boolean} aActiveFlag - True, wenn aktive, False sonst
     */

    set active( aActiveFlag: boolean ) {
        if ( aActiveFlag ) {
            this.setActiveOn();
        } else {
            this.setActiveOff();
        }
    }


    /**
     * Eigenschaft aktive Komponente zurueckgeben
     *
     * @readonly
     * @return {boolean} aActiveFlag - True, wenn aktive, False sonst
     */

    get active() {
        return this.isActive();
    }


    // Fehler-Funktionen


    /**
     * pruefen auf Konsolen-Ausgabe von Fehlermeldungen
     */

    isErrorOutput(): boolean {
        if ( this.mSpeak ) {
            return this.mSpeak.isErrorOutput();
        }
        return this.mErrorOutputFlag;
    }


    /**
     * Konsolen-Ausgabe von Fehlermeldungen einschalten
     */

    setErrorOutputOn(): void {
        this.mErrorOutputFlag = true;
        if ( this.mSpeak ) {
            this.mSpeak.setErrorOutputOn();
        }
    }


    /**
     * Konsolen-Ausgabe von Fehlermeldungen ausschalten
     */

    setErrorOutputOff(): void {
        this.mErrorOutputFlag = false;
        if ( this.mSpeak ) {
            this.mSpeak.setErrorOutputOff();
        }
    }


    /**
     * Eigenschaft fuer Fehlerausgabe auf der Konsole setzen
     *
     * @param {boolean} aErrorOutputFlag - True, wenn Konsolenausgabe erfolgen soll, False sonst
     */

    set errorOutput( aErrorOutputFlag: boolean ) {
        if ( aErrorOutputFlag ) {
            this.setErrorOutputOn();
        } else {
            this.setErrorOutputOff();
        }
    }


    /**
     * Eigenschaft fuer Konsolenausgabe zurueckgeben
     *
     * @readonly
     * @return {boolean} aErrorOutputFlag - True, wenn Konsolenausgabe erfolgen soll, False sonst
     */

    get errorOutput() {
        return this.isErrorOutput();
    }


    /**
     * Fehler ausgeben
     *
     * @param aFuncName - Name der Funktion, in der der Fehler vorkam
     * @param aErrorText - Fehlertext
     */

    protected _error( aFuncName: string, aErrorText: string ): void {
        if ( this.mErrorOutputFlag ) {
            console.log('===> ERROR SpeakService.' + aFuncName + ':', aErrorText);
        }
        this.mErrorEvent.emit(new Error( 'SpeakService.' + aFuncName + ': ' + aErrorText ));
    }


    /**
     * Exception ausgeben
     *
     * @param {string} aFuncName - Name der Funktion, in der die Exception vorkam
     * @param {Exception} aException - Exception-Objekt
     */

    protected _exception( aFuncName: string, aException: any ): void {
        if ( this.mErrorOutputFlag ) {
            console.log('===> EXCEPTION SpeakService.' + aFuncName + ':', aException);
        }
        this.mErrorEvent.emit(new Error( 'EXCEPTION SpeakService.' + aFuncName + ': ' + aException.message ));
    }


    // Event-Funktionen


    /**
     * Anbindung der Events
     *
     * @private
     * @return {number} Fehlercode 0 oder -1
     */

    protected _addAllEvent(): number {
        if ( !this.mSpeak ) {
            this._error('_addAllEvent', 'keine Speak-Komponente vorhanden');
            return -1;
        }

        // alle alten Events loeschen

        this.mSpeak.removeAllEvent( SPEAK_SERVICE_NAME );

        // neue Events eintragen

        this.mSpeak.addSpeakStartEvent( SPEAK_SERVICE_NAME, () => {
            this.mSpeakStartEvent.emit();
            return 0;
        });

        this.mSpeak.addSpeakStopEvent( SPEAK_SERVICE_NAME, () => {
            this.mSpeakStopEvent.emit();
            return 0;
        });

        this.mSpeak.addErrorEvent( SPEAK_SERVICE_NAME, (aError: any) => {
            this.mErrorEvent.emit( aError );
            return 0;
        });
        return 0;
    }


    // Rueckgabe der globalen Events


    /**
     * Ereignis fuer Sprachausgabe gestartet
     *
     * @readonly
     * @return {EventEmitter} speakStartEvent
     */

    get startEvent() {
        return this.mSpeakStartEvent;
    }


    /**
     * Ereignis fuer Sprachausgabe gestoppt
     *
     * @readonly
     * @return {EventEmitter} speakStopEvent
     */

    get stopEvent() {
        return this.mSpeakStopEvent;
    }


    /**
     * Ereignis fuer Fehler aufgetreten
     *
     * @readonly
     * @return {EventEmitter} errorEvent
     */

    get errorEvent() {
        return this.mErrorEvent;
    }


    // Audio-Funktionen


    /**
     * pruefen, ob Audio fuer Sprachausgabe eingestellt ist
     *
     * @return {boolean} audioFlag - true, es wird zur Sprachausgabe eine Audiodatei abgespielt
     */

    isAudio(): boolean {
        if ( !this.mSpeak ) {
            this._error('isAudio', 'keine Speak-Komponente vorhanden');
            return false;
        }
        return this.mSpeak.isAudio();
    }


    /**
     * Audio fuer Sprachausgabe einschalten
     *
     * @returns {number} Fehlercode 0 oder -1
     */

    setAudioOn(): number {
        if ( !this.mSpeak ) {
            this._error('setAudioOn', 'keine Speak-Komponente vorhanden');
            return -1;
        }
        return this.mSpeak.setAudioOn();
    }


    /**
     * Audio fuer Sprachausgabe ausschalten
     *
     * @returns {number} Fehlercode 0 oder -1
     */

    setAudioOff(): number {
        if ( !this.mSpeak ) {
            this._error('setAudioOff', 'keine Speak-Komponente vorhanden');
            return -1;
        }
        return this.mSpeak.setAudioOff();
    }


    /**
     * Eigenschaft Audio setzen. Wenn Audio eingeschaltet ist,
     * wird eine Audiodatei fuer Speak abgespielt.
     *
     * @param {boolean} aAudioFlag - True, wenn Audiodatei abgespielt werden soll, False sonst
     */

    set audio( aActionFlag: boolean ) {
        if ( aActionFlag ) {
            this.setAudioOn();
        } else {
            this.setAudioOff();
        }
    }


    /**
     * Eigenschaft Audio zurueckgeben.
     *
     * @readonly
     * @param {boolean} aAudioFlag - True, wenn Audiodatei abgespielt wird, False wenn Sprachsynthese verwendet wird
     */

    get audio() {
        return this.isAudio();
    }


    /**
     * Eintragen des Audioformats fuer die Audiodateien (mp3, wav)
     *
     * @param aAudioFormat - Name des Formats eintragen ('mp3', 'wav')
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setAudioFormat( aAudioFormat: string ): number {
        if ( !this.mSpeak ) {
            this._error('setAudioFormat', 'keine Speak-Komponente vorhanden');
            return -1;
        }
        return this.mSpeak.setAudioFormat( aAudioFormat );
    }


    /**
     * Rueckgabe des aktuell eingestellten Audioformats
     */

    getAudioFormat(): string {
        if ( !this.mSpeak ) {
            this._error('getAudioFormat', 'keine Speak-Komponente vorhanden');
            return '';
        }
        return this.mSpeak.getAudioFormat();
    }


    /**
     * Eigenschaft Format eintragen fuer das Audiodateienformat.
     *
     * @param {string} aFormat - Format fuer die Audiodateien
     */

    set format( aFormat: string ) {
        this.setAudioFormat( aFormat );
    }

    /**
     * Eigenschaft Format zurueckgeben
     *
     * @readonly
     * @return {string} aFormat - Audioformat fuer alle Audiodateien
     */

    get format() {
        return this.getAudioFormat();
    }


    /**
     * Eintragen des Audiodateiverzeichnisses
     *
     * @param {string} aFilePath - Name des Audioverzeichnisses
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setAudioFilePath( aFilePath: string ): number {
        if ( !this.mSpeak ) {
            this._error('setAudioFilePath', 'keine Speak-Komponente vorhanden');
            return -1;
        }
        return this.mSpeak.setAudioFilePath( aFilePath );
    }


    /**
     * Rueckgabe des aktuell eingestellten Audioverzeichnisses
     *
     * @return {string} Verzeichnis
     */

    getAudioFilePath(): string {
        if ( !this.mSpeak ) {
            this._error('getAudioFilePath', 'keine Speak-Komponente vorhanden');
            return '';
        }
        return this.mSpeak.getAudioFilePath();
    }


    /**
     * Eigenschaft Path eintragen fuer das Audiodateienverzeichnis.
     *
     * @param {string} aPath - lokales Verzeichnis zu den Audiodateien
     */

    set path( aPath: string ) {
        this.setAudioFilePath( aPath );
    }

    /**
     * Eigenschaft Path zurueckgeben
     *
     * @readonly
     * @return {string} aPath - Audioverzeichnis fuer alle Audiodateien
     */

    get path() {
        return this.getAudioFilePath();
    }


    /**
     * Eintragen des Audiodateinamens
     *
     * @param {string} aFileName - Name der Audiodatei (ohne Formatextension)
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setAudioFileName( aFileName: string ): number {
        if ( !this.mSpeak ) {
            this._error('setAudioFileName', 'keine Speak-Komponente vorhanden');
            return -1;
        }
        return this.mSpeak.setAudioFileName( aFileName );
    }


    /**
     * Rueckgabe des aktuell eingestellten Audiodateinamens
     *
     * @return {string} Verzeichnis
     */

    getAudioFileName(): string {
        if ( !this.mSpeak ) {
            this._error('getAudioFileName', 'keine Speak-Komponente vorhanden');
            return '';
        }
        return this.mSpeak.getAudioFileName();
    }


    /**
     * Eigenschaft File eintragen fuer die aktuelle Audiodatei.
     *
     * @param {string} aFileName - Name der Audiodatei
     */

    set file( aFileName: string ) {
        this.setAudioFileName( aFileName );
    }


    /**
     * Eigenschaft File fuer die aktuelle Audiodatei zurueckgeben.
     *
     * @return {string} aFileName - Name der aktuellen Audiodatei
     */

    get file(): string {
        return this.getAudioFileName();
    }


    // Language-Funktionen


    /**
     * Sprache fuer die Sprachausgabe einstellen
     *
     * @param {string} aLanguage - einzustellende Sprache als Kurzname ('de' oder 'en')
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setLanguage( aLanguage: string ): number {
        if ( !this.mSpeak ) {
            this._error('setLanguage', 'keine Speak-Komponente vorhanden');
            return -1;
        }
        return this.mSpeak.setLanguage( aLanguage );
    }


    /**
     * Rueckgabe der eingestellten Sprache
     *
     * @return {string} eingestellte Sprache als Kurzstring ('de' oder 'en')
     */

    getLanguage(): string {
        if ( !this.mSpeak ) {
            this._error('getLanguage', 'keine Speak-Komponente vorhanden');
            return '';
        }
        return this.mSpeak.getLanguage();
    }


    /**
     * Eigenschaft Language eintragen fuer die Sprachausgabe.
     *
     * @param {string} aLanguageName - Name der Sprache in Kurzform (de, en)
     */

    set language( aLanguageName: string ) {
        this.setLanguage( aLanguageName );
    }


    /**
     * Eigenschaft Language zurueckgeben.
     *
     * @return {string} aLanguageName - Name der Sprache in Kurzform (de, en)
     */

    get language(): string {
        return this.getLanguage();
    }


    // Speak-Funktionen


    /**
     * Eintragen des Speaktextes
     *
     * @param {string} aText - Text fuer die Sprachausgabe
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setText( aText: string ): number {
        if ( !this.mSpeak ) {
            this._error('setText', 'keine Speak-Komponente vorhanden');
            return -1;
        }
        return this.mSpeak.setSpeakText( aText );
    }


    /**
     * Rueckgabe des aktuell eingestellten Speaktextes
     *
     * @return {string} Text
     */

    getText(): string {
        if ( !this.mSpeak ) {
            this._error('getText', 'keine Speak-Komponente vorhanden');
            return '';
        }
        return this.mSpeak.getSpeakText();
    }


    /**
     * Eigenschaft Text eintragen fuer die Sprachausgabe.
     *
     * @param {string} aText - Text fuer die Sprachausgabe
     */

    set text( aText: string ) {
        this.setText( aText );
    }


    /**
     * Eigenschaft Text zurueckgeben.
     *
     * @return {string} aText - Text fuer die Sprachausgabe
     */

    get text(): string {
        return this.getText();
    }


    /**
     * pruefen auf laufende Sprachausgabe
     *
     * @return {boolean} runningFlag
     */

    isRunning(): boolean {
        if ( !this.mSpeak ) {
            this._error('isRunning', 'keine Speak-Komponente vorhanden');
            return false;
        }
        return this.mSpeak.isSpeakRunning();
    }


    /**
     * Sprachausgabe starten. Vorher muss ein Text oder eine Datei eingetragen sein.
     *
     * @return {number} Fehlercode 0 oder -1
     */

    start(): number {
        try {
            return this.mSpeak.startSpeak();
        } catch ( aException ) {
            this._exception( 'start', aException );
            return -1;
        }
    }


    /**
     * Sprachausgabe stoppen
     *
     * @returns {number} Fehlercode 0 oder -1
     */

    stop(): number {
        try {
            return this.mSpeak.stopSpeak();
        } catch ( aException ) {
            this._exception( 'stop', aException );
            return -1;
        }
    }

}
