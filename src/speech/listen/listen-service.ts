/**
 * ListenService fuer die Integration von Listen in Angular
 *
 * API-Version: 1.0
 * Datum:       11.10.2018
 *
 * Letzte Aenderung: 11.10.2018
 * Status: gelb
 *
 * @module speech/listen
 * @author SB
 */


// angular

import { EventEmitter, Injectable } from '@angular/core';


// speech

import {
    LISTEN_COMPONENT_NAME,
    ListenFactory,
    ListenInterface,
    ListenOptionInterface
} from './../speech';


// service

import { LISTEN_SERVICE_NAME, LISTEN_DE_LANGUAGE } from './listen-service-const';
import { LISTENSERVICE_API_VERSION } from './listen-service-version';
import { ListenServiceConfig } from './listen-service-config';
import { ListenServiceOptionInterface } from './listen-service-option.interface';


// Konstanten


/**
 * Stellt ein, ob die Events synchron oder asynchron ausgeliefert werden
 */

const LISTEN_ASYNC_EVENT = false;


/**
 * Setzt den Daufaultwert fuer Fehlerausgaben auf der Konsole
 */

const LISTEN_ERROR_OUTPUT = false;


/**
 * ListenService Klasse
 *
 * @export
 * @class ListenService
 */

@Injectable({
  providedIn: 'root',
})
export class ListenService {

    /** definiert die Konfiguration des BotService */

    protected static listenServiceConfig = ListenServiceConfig;

    /** legt fest, ob die Initialisierung im Konstruktor bereits erfolgt */

    private static constructorInitFlag = true;

    // Listen-Komponente

    private mListen: ListenInterface = null;

    // Service-Events

    private mListenStartEvent = new EventEmitter( LISTEN_ASYNC_EVENT );
    private mListenStopEvent = new EventEmitter( LISTEN_ASYNC_EVENT );
    private mListenResultEvent = new EventEmitter<any>( LISTEN_ASYNC_EVENT );
    private mErrorEvent = new EventEmitter<any>( LISTEN_ASYNC_EVENT );

    /**
     * Fehlerausgabe fuer Konsole festlegen
     */

    protected mErrorOutputFlag = LISTEN_ERROR_OUTPUT;


    /**
     * pruefen auf ConstructorInitFlag fuer Festlegung, ob der Konstructor init aufruft.
     *
     * @static
     * @return {boolean} ConstructorInitFlag - True, Konstructor initialisiert den BotService, False sonst
     */

    static isConstructorInit(): boolean {
        return ListenService.constructorInitFlag;
    }


    /**
     * setzen des ConstructorInitFlag auf true, um init im Konstruktor aufzurufen.
     *
     * @static
     */

    static setConstructorInitOn(): void {
        ListenService.constructorInitFlag = true;
    }


    /**
     * loescht das ConstructorInitFlag, um init nicht im Konstruktor aufzurufen.
     *
     * @static
     */

    static setConstructorInitOff(): void {
        ListenService.constructorInitFlag = false;
    }


    /**
     * Rueckgabe der Konfiguration fuer den Service, um die Konfiguration zu veraendern.
     * Muss vor der Erzeugung des Service aufgerufen werden. Wird nur im Zusammenhang mit
     * dem gesetzten ConstructorInitFlag verwendet, welches die Initialisierung des Service
     * im Konstruktor vornimmt. Bei manuellem Aufruf von Init kann diese Funktion zur
     * Uebergabe der Optionen verwendet werden.
     *
     * @static
     * @return {ListenServiceOptionInterface} ServiceOption - dient zur Einstellung der otionalen Parameter
     */

    static getConfig(): ListenServiceOptionInterface {
        return ListenService.listenServiceConfig;
    }


    /**
     * Konstruktor fuer Initialisierung des Listen-Service
     */

    constructor() {
        // console.log('ListenService.constructor: initFlag = ', ListenService.isConstructorInit(), ListenService.getConfig());
        if ( ListenService.isConstructorInit()) {
            if ( this.init( ListenService.getConfig()) !== 0 ) {
                throw new Error( 'Listen nicht initialisiert' );
            }
        }
    }


    // Service-Funktionen


    /**
     * Optionen eintragen
     *
     * @private
     * @param {ListenServiceOptionInterface} aOption - optionale Parameter
     */

    protected _setOption( aOption: ListenServiceOptionInterface ): void {
        // console.log('ActionService._setOption:', aOption);
        if ( !aOption ) {
            return;
        }
        // ActiveFlag uebertragen
        if ( typeof aOption.activeFlag === 'boolean' ) {
            this.active = aOption.activeFlag;
        }
        // Sprache uebertragen
        if ( typeof aOption.listenLanguage === 'string' ) {
            // console.log('ListenService._setOption:', aOption.listenLanguage);
            this.language = aOption.listenLanguage;
        }
        // Fehlerausgabeflag uebergeben
        if ( typeof aOption.errorOutputFlag === 'boolean' ) {
            this.errorOutput = aOption.errorOutputFlag;
        }
    }


    /**
     * Optionen uebertragen in ListenOptionen
     *
     * @protected
     * @param {ListenServiceOptionInterface} aOption - optionale Parameter
     * @return {any} Rueckgabe fuer Bot Optionen
     */

    protected _mapOption( aOption: ListenServiceOptionInterface ): any {
        // Optionen uebertragen
        const option: ListenOptionInterface = {
            errorOutputFlag: this.mErrorOutputFlag
        };
        if ( !aOption ) {
            return option;
        }
        // Sprache uebertragen
        if ( typeof aOption.listenLanguage === 'string' ) {
            option.listenLanguage = aOption.listenLanguage;
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
     * @param {ListenServiceOptionInterface} aOption - optionale Parameter zur Konfiguration des Service
     *
     * @return {number} errorCode(0,-1)
     */

    init( aOption?: ListenServiceOptionInterface ): number {
        // pruefen auf bereits initialisiert
        if ( this.mListen ) {
            // console.log('BotService.init: Bot exisitiert bereits', aOption);
            this._setOption( aOption );
            return 0;
        }
        // Optionen uebertragen (BotService->Bot)
        const option = this._mapOption( aOption ) as ListenOptionInterface;
        // Bot erzeugen
        this.mListen = ListenFactory.create( LISTEN_COMPONENT_NAME, option );
        if ( !this.mListen ) {
            this._error('init', 'Listen nicht erzeugt');
            return -1;
        }
        // Optionen eintragen in ListenService
        this._setOption( aOption );
        if ( this.mErrorOutputFlag ) {
            console.log( 'ListenService Version:', LISTENSERVICE_API_VERSION );
        }
        // ListenEvents auf EventEmitter mappen
        return this._addAllEvent();

    }


    /**
     * Ruecksetzen des Services, alle Werte werden auf ihre Defaultwerte gesetzt
     *
     * @param {ListenServiceOptionInterface} aOption - optionale Parameter zur Konfiguration des Service
     *
     * @return {number} Fehlercode 0 oder -1
     */

    reset( aOption?: ListenServiceOptionInterface ): number {
        if ( !this.mListen ) {
            this._error('reset', 'Listen nicht vorhanden');
            return -1;
        }
        // Optionen uebertragen (ListenService->Listen)
        const option = this._mapOption( aOption ) as ListenOptionInterface;
        const result = this.mListen.reset( option );
        this._setOption( aOption );
        return result;
    }


    /**
     * pruefen auf initialisierten Service
     *
     * @return {boolean} Rueckgabe, ob Service initialisiert ist
     */

    isInit(): boolean {
        if ( this.mListen ) {
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
        if ( this.mListen ) {
            return this.mListen.isActive();
        }
        return false;
    }


    /**
     * Komponente aktivieren
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActiveOn(): number {
        if ( this.mListen ) {
            return this.mListen.setActiveOn();
        }
        return -1;
    }


    /**
     * Komponente daaktivieren
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActiveOff(): number {
        if ( this.mListen ) {
            return this.mListen.setActiveOff();
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
        if ( this.mListen ) {
            return this.mListen.isErrorOutput();
        }
        return this.mErrorOutputFlag;
    }


    /**
     * Konsolen-Ausgabe von Fehlermeldungen einschalten
     */

    setErrorOutputOn(): void {
        this.mErrorOutputFlag = true;
        if ( this.mListen ) {
            this.mListen.setErrorOutputOn();
        }
    }


    /**
     * Konsolen-Ausgabe von Fehlermeldungen ausschalten
     */

    setErrorOutputOff(): void {
        this.mErrorOutputFlag = false;
        if ( this.mListen ) {
            this.mListen.setErrorOutputOff();
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
            console.log('===> ERROR ListenService.' + aFuncName + ':', aErrorText);
        }
        this.mErrorEvent.emit(new Error( 'ListenService.' + aFuncName + ': ' + aErrorText ));
    }


    /**
     * Exception ausgeben
     *
     * @param {string} aFuncName - Name der Funktion, in der die Exception vorkam
     * @param {Exception} aException - Exception-Objekt
     */

    protected _exception( aFuncName: string, aException?: any ): void {
        if ( this.mErrorOutputFlag ) {
            console.log('===> EXCEPTION ListenService.' + aFuncName + ':', aException.message);
        }
        this.mErrorEvent.emit(new Error( 'EXCEPTION ListenService.' + aFuncName + ': ' + aException.message ));
    }


    // Event-Funktionen


    /**
     * Anbindung der Events
     *
     * @protected
     * @return {number} Fehlercode 0 oder -1
     */

    protected _addAllEvent(): number {
        if ( !this.mListen ) {
            this._error('_addAllEvent', 'keine Listen-Komponente vorhanden');
            return -1;
        }

        // alle alten Events loeschen

        this.mListen.removeAllEvent( LISTEN_SERVICE_NAME );

        this.mListen.addListenStartEvent( LISTEN_SERVICE_NAME, () => {
            this.mListenStartEvent.emit();
            return 0;
        });

        this.mListen.addListenStopEvent( LISTEN_SERVICE_NAME, () => {
            this.mListenStopEvent.emit();
            return 0;
        });

        this.mListen.addListenResultEvent( LISTEN_SERVICE_NAME, (aResult: string) => {
            this.mListenResultEvent.emit(aResult);
            return 0;
        });

        this.mListen.addErrorEvent( LISTEN_SERVICE_NAME, (aError: any) => {
            this.mErrorEvent.emit(aError);
            return 0;
        });
        return 0;
    }


    /**
     * Ereignis fuer Spracheingabe gestartet
     *
     * @readonly
     * @return {EventEmitter} listenStartEvent
     */

    get startEvent() {
        return this.mListenStartEvent;
    }


    /**
     * Ereignis fuer Spracheingabe gestoppt
     *
     * @readonly
     * @return {EventEmitter} listenStopEvent
     */

    get stopEvent() {
        return this.mListenStopEvent;
    }


    /**
     * Ereignis fuer Sprachausgabe erkannten Text
     *
     * @readonly
     * @return {EventEmitter} listenResultEvent
     */

    get resultEvent() {
        return this.mListenResultEvent;
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


    // Language-Funktionen


    /**
     * Sprache fuer die Spracheingabe einstellen
     *
     * @param {string} aLanguage - einzustellende Sprache als Kurzname ('de' oder 'en')
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setLanguage( aLanguage: string ): number {
        if ( !this.mListen ) {
            this._error('setLanguage', 'keine Listen-Komponente vorhanden');
            return -1;
        }
        return this.mListen.setLanguage( aLanguage );
    }


    /**
     * Rueckgabe der eingestellten Sprache
     *
     * @return {string} eingestellte Sprache als Kurzstring ('de' oder 'en')
     */

    getLanguage(): string {
        if ( !this.mListen ) {
            this._error('getLanguage', 'keine Listen-Komponente vorhanden');
            return '';
        }
        return this.mListen.getLanguage();
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


    // Listen-Funktionen


    /**
     * pruefen auf laufende Spracheingabe
     *
     * @return {boolean} runningFlag
     */

    isRunning(): boolean {
        if ( !this.mListen ) {
            this._error('isRunning', 'keine Listen-Komponente vorhanden');
            return false;
        }
        return this.mListen.isListenRunning();
    }


    /**
     * Spracheingabe gestartet, es wird auf Spracheingabe gewartet
     *
     * @return {number} Fehlercode 0 oder -1
     */

    start(): number {
        try {
            // console.log('ListenService.start');
            return this.mListen.startListen();
        } catch ( aException ) {
            this._exception('start', aException);
            return -1;
        }
    }


    /**
     * Spracheingabe stoppen
     *
     * @returns {number} Fehlercode 0 oder -1
     */

    stop(): number {
        try {
            return this.mListen.stopListen();
        } catch ( aException ) {
            this._exception('stop', aException);
            return -1;
        }
    }


    // Test-Funktionen


    /**
     * Testfunktionen aufrufen
     * @param aTestCommand - Name des Testbefehls
     * @param aTestData - optionale Daten fuer den Test
     *
     * @return {*} Rueckgabe der Testergebnisse { result: 0 }
     */

    test( aTestCommand: string, aTestData?: any): any {
        try {
            return this.mListen.test( aTestCommand, aTestData );
        } catch ( aException ) {
            this._exception('test', aException);
            return -1;
        }
    }

}
