/**
 * BotService zur Anbindung des Bot an Angular.
 *
 * API-Version: 1.0
 * Datum:       15.09.2018
 *
 * Letzte Aenderung: 15.09.2018
 * Status:           gruen
 *
 * @module speech/bot
 * @author SB
 */


// angular

import { EventEmitter, Injectable } from '@angular/core';


// speech

import {
    BOT_COMPONENT_NAME,
    BotFactory,
    BotInterface,
    BotOptionInterface,
    DialogActionInterface,
    DialogSpeakInterface
} from './../speech';


// bot

import { BOT_SERVICE_NAME } from './bot-service-const';
import { BOTSERVICE_API_VERSION } from './bot-service-version';
import { BotServiceConfig } from './bot-service-config';
import { BotServiceActionInterface } from './bot-service-action.interface';
import { BotServiceOptionInterface } from './bot-service-option.interface';


// Konstanten


/**
 * Stellt ein, ob die Events synchron oder asynchron ausgeliefert werden
 */

const BOT_ASYNC_EVENT = true;


/**
 * Setzt den Daufaultwert fuer Fehlerausgaben auf der Konsole
 */

const BOT_ERROR_OUTPUT = false;


// Action-Funktionen


/** Definiert die StartAction Funktion fuer eine Dialogaktion */
export type BotServiceActionStartFunc = (aAction: BotServiceActionInterface) => void;
/** Definiert die StopAction Funktion fuer eine Dialogaktion */
export type BotServiceActionStopFunc = () => void;


/** @export
 * BotService Klasse fuer Speech-Angular. Definiert einen Bot mit Aktionen und Sprachausgabe
 */

@Injectable({
  providedIn: 'root',
})
export class BotService {

    /** definiert die Konfiguration des BotService */

    protected static botServiceConfig = BotServiceConfig;

    /** legt fest, ob die Initialisierung im Konstruktor bereits erfolgt */

    private static constructorInitFlag = true;

    // Bot-Komponente

    private mBot: BotInterface = null;

    // Service-Events

    private mDialogSetEvent = new EventEmitter<string>( BOT_ASYNC_EVENT );
    private mDialogParseEvent = new EventEmitter( BOT_ASYNC_EVENT );
    private mDialogStartEvent = new EventEmitter( BOT_ASYNC_EVENT );
    private mDialogStopEvent = new EventEmitter( BOT_ASYNC_EVENT );
    private mDialogStateSetEvent = new EventEmitter<string>( BOT_ASYNC_EVENT );
    private mDialogActionEvent = new EventEmitter<BotServiceActionInterface>( BOT_ASYNC_EVENT );
    private mDialogActionStopEvent = new EventEmitter( BOT_ASYNC_EVENT );
    private mDialogSpeakEvent = new EventEmitter<string>( BOT_ASYNC_EVENT );
    private mDialogSpeakStopEvent = new EventEmitter( BOT_ASYNC_EVENT );
    private mErrorEvent = new EventEmitter<any>( BOT_ASYNC_EVENT );


    /**
     * Fehlerausgabe fuer Konsole festlegen
     */

    protected mErrorOutputFlag = BOT_ERROR_OUTPUT;


    /**
     * pruefen auf ConstructorInitFlag fuer Festlegung, ob der Konstructor init aufruft.
     *
     * @static
     * @return {boolean} ConstructorInitFlag - True, Konstructor initialisiert den BotService, False sonst
     */

    static isConstructorInit(): boolean {
        return BotService.constructorInitFlag;
    }


    /**
     * setzen des ConstructorInitFlag auf true, um init im Konstruktor aufzurufen.
     *
     * @static
     */

    static setConstructorInitOn(): void {
        BotService.constructorInitFlag = true;
    }


    /**
     * loescht das ConstructorInitFlag, um init nicht im Konstruktor aufzurufen.
     *
     * @static
     */

    static setConstructorInitOff(): void {
        BotService.constructorInitFlag = false;
    }


    /**
     * Rueckgabe der Konfiguration fuer den BotService, um die Konfiguration zu veraendern.
     * Muss vor der Erzeugung des BotService aufgerufen werden. Wird nur im Zusammenhang mit
     * dem gesetzten ConstructorInitFlag verwendet, welches die Initialisierung des BotService
     * im Konstruktor vornimmt. Bei manuellem Aufruf von Init kann diese Funktion zur
     * Uebergabe der Optionen verwendet werden.
     *
     * @static
     * @return {BotServiceOptionInterface} BotServiceOptions - dient zur Einstellung der otionalen Parameter
     */

    static getConfig(): BotServiceOptionInterface {
        return BotService.botServiceConfig;
    }


    /**
     * Konstruktor
     */

    constructor() {
        // console.log('BotService.constructor: initFlag = ', BotService.isConstructorInit(), BotService.getConfig());
        if ( BotService.isConstructorInit()) {
            if ( this.init( BotService.getConfig()) !== 0 ) {
                throw new Error( 'Bot nicht initialisiert' );
            }
        }
    }


    // Service-Funktionen


    /**
     * Optionen eintragen
     *
     * @protected
     * @param {BotServiceOptionInterface} aOption - optionale Parameter
     */

    protected _setOption( aOption: BotServiceOptionInterface ): void {
        // console.log('BotService._setOption:', aOption);
        if ( !aOption ) {
            return;
        }
        // ActiveFlag uebertragen
        if ( typeof aOption.activeFlag === 'boolean' ) {
            this.active = aOption.activeFlag;
        }
        // SpeakFlag uebertragen
        if ( typeof aOption.speakFlag === 'boolean' ) {
            this.speak = aOption.speakFlag;
        }
        // ActionFlag uebertragen
        if ( typeof aOption.actionFlag === 'boolean' ) {
            this.action = aOption.actionFlag;
        }
        // Dialogname uebertragen
        if ( typeof aOption.dialogName === 'string' ) {
            this.dialog = aOption.dialogName;
        }
        // Startzustand uebertragen
        if ( typeof aOption.dialogRootState === 'string' ) {
            this.state = aOption.dialogRootState;
        }
        // Dialogdateiverzeichnis uebertragen
        if ( typeof aOption.dialogFilePath === 'string' ) {
            this.path = aOption.dialogFilePath;
        }
        // Dialogdateiname uebertragen
        if ( typeof aOption.dialogFileName === 'string' ) {
            this.file = aOption.dialogFileName;
        }
        // Fehlerausgabeflag uebergeben
        if ( typeof aOption.errorOutputFlag === 'boolean' ) {
            this.errorOutput = aOption.errorOutputFlag;
        }
    }


    /**
     * Optionen uebertragen in BotOptionen
     *
     * @protected
     * @param {BotServiceOptionInterface} aOption - optionale Parameter
     * @return {any} Rueckgabe fuer Bot Optionen
     */

    protected _mapOption( aOption: BotServiceOptionInterface ): any {
        // Optionen uebertragen
        const option: BotOptionInterface = {
            errorOutputFlag: this.mErrorOutputFlag
        };
        if ( !aOption ) {
            return option;
        }
        // Dialogname uebertragen
        if ( typeof aOption.dialogName === 'string' ) {
            option.dialogName = aOption.dialogName;
        }
        // Startzustand uebertragen
        if ( typeof aOption.dialogRootState === 'string' ) {
            option.dialogRootState = aOption.dialogRootState;
        }
        // Dialogladeflag uebertragen
        if ( typeof aOption.dialogLoadFlag === 'boolean' ) {
            option.dialogLoadFlag = aOption.dialogLoadFlag;
        }
        // Dialogdateiverzeichnis uebertragen
        if ( typeof aOption.dialogFilePath === 'string' ) {
            option.dialogFilePath = aOption.dialogFilePath;
        }
        // Dialogdateiname uebertragen
        if ( typeof aOption.dialogFileName === 'string' ) {
            option.dialogFileName = aOption.dialogFileName;
        }
        // Fehlerausgabeflag uebergeben
        if ( typeof aOption.errorOutputFlag === 'boolean' ) {
            option.errorOutputFlag = aOption.errorOutputFlag;
            this.mErrorOutputFlag = aOption.errorOutputFlag;
        }
        return option;
    }


    /**
     * Initialisierung des Service.
     *
     * @param {BotServiceOptionInterface} aOption - optionale Parameter zur Konfiguration des Service
     *
     * @return {number} errorCode(0,-1)
     */

    init( aOption?: BotServiceOptionInterface ): number {
        // pruefen auf bereits initialisiert
        if ( this.mBot ) {
            // console.log('BotService.init: Bot exisitiert bereits', aOption);
            this._setOption( aOption );
            return 0;
        }
        // Optionen uebertragen (BotService->Bot)
        const option = this._mapOption( aOption ) as BotOptionInterface;
        // Bot erzeugen
        this.mBot = BotFactory.create( BOT_COMPONENT_NAME, option );
        if ( !this.mBot ) {
            this._error('init', 'Bot nicht erzeugt');
            return -1;
        }
        // Optionen eintragen in BotService
        this._setOption( aOption );
        if ( this.mErrorOutputFlag ) {
            console.log( 'BotService Version:', BOTSERVICE_API_VERSION );
        }
        // BotEvents auf EventEmitter mappen
        return this._addAllEvent();
    }


    /**
     * Ruecksetzen des Services, alle Werte werden auf ihre Defaultwerte gesetzt
     *
     * @param {BotServiceOptionInterface} aOption - optionale Parameter zur Konfiguration des Service
     *
     * @return {number} Fehlercode 0 oder -1
     */

    reset( aOption?: BotServiceOptionInterface ): number {
        if ( !this.mBot ) {
            this._error('reset', 'Bot nicht vorhanden');
            return -1;
        }
        // Optionen uebertragen (BotService->Bot)
        const option = this._mapOption( aOption ) as BotOptionInterface;
        const result = this.mBot.reset( option );
        this._setOption( aOption );
        return result;
    }


    /**
     * pruefen auf initialisierten Service
     *
     * @return {boolean} Rueckgabe, ob Service initialisiert ist
     */

    isInit(): boolean {
        if ( this.mBot ) {
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
        if ( this.mBot ) {
            return this.mBot.isActive();
        }
        return false;
    }


    /**
     * Komponente aktivieren
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActiveOn(): number {
        if ( this.mBot ) {
            return this.mBot.setActiveOn();
        }
        return -1;
    }


    /**
     * Komponente daaktivieren
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActiveOff(): number {
        if ( this.mBot ) {
            return this.mBot.setActiveOff();
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
        if ( this.mBot ) {
            return this.mBot.isErrorOutput();
        }
        return this.mErrorOutputFlag;
    }


    /**
     * Einschalten der Konsolen-Fehlerausgabe
     */

    setErrorOutputOn(): void {
        this.mErrorOutputFlag = true;
        if ( this.mBot ) {
            this.mBot.setErrorOutputOn();
        }
    }


    /**
     * Ausschalten der Konsolen-Fehlerausgabe
     */

    setErrorOutputOff(): void {
        this.mErrorOutputFlag = false;
        if ( this.mBot ) {
            this.mBot.setErrorOutputOff();
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
     * Ausgabe eines Fehlers
     *
     * @protected
     * @param {string} aFuncName - Name der Funktion, wo der Fehler auftrat
     * @param {string} aErrorText - Fehlertext
     */

    protected _error( aFuncName: string, aErrorText: string ): void {
        if ( this.mErrorOutputFlag ) {
            console.log('===> ERROR BotService.' + aFuncName + ':', aErrorText);
        }
        this.mErrorEvent.emit(new Error( 'BotService.' + aFuncName + ': ' + aErrorText ));
    }


    /**
     * Ausgabe einer Exception
     *
     * @protected
     * @param {string} aFuncName - Name der Funktion, in der die Exception auftrat
     * @param {Exception} aException - Exception-Objekt
     */

    protected _exception( aFuncName: string, aException: any ): void {
        if ( this.mErrorOutputFlag ) {
            console.log('===> EXCEPTION BotService' + aFuncName + ':', aException.message);
        }
        this.mErrorEvent.emit(new Error( 'EXCEPTION BotService.' + aFuncName + ': ' + aException.message ));
    }


    // Event-Funktionen


    /**
     * Anbindung der Bot-Events an die EventEmitter von Angular
     *
     * @protected
     * @return {number} Fehlercode 0 oder 1
     */

    protected _addAllEvent(): number {
        if ( !this.mBot ) {
            this._error('_addAllEvent', 'keine Bot-Komponente vorhanden');
            return -1;
        }

        // alle alten Events loeschen

        this.mBot.removeAllEvent( BOT_SERVICE_NAME );

        this.mBot.addDialogSetEvent( BOT_SERVICE_NAME, (aDialogName: string) => {
            // console.log('BotService._initAllEvent: dialog start event:');
            this.mDialogSetEvent.emit(aDialogName);
            return 0;
        });

        this.mBot.addDialogParseEvent( BOT_SERVICE_NAME, () => {
            // console.log('BotService._initAllEvent: dialog start event:');
            this.mDialogParseEvent.emit();
            return 0;
        });

        this.mBot.addDialogStartEvent( BOT_SERVICE_NAME, () => {
            // console.log('BotService._initAllEvent: dialog start event:');
            this.mDialogStartEvent.emit();
            return 0;
        });

        this.mBot.addDialogStopEvent( BOT_SERVICE_NAME, () => {
            // console.log('BotService._initAllEvent: dialog stop event:');
            this.mDialogStopEvent.emit();
            return 0;
        });

        this.mBot.addDialogStateSetEvent( BOT_SERVICE_NAME, (aStateName: string) => {
            // console.log('BotService._initAllEvent: dialog state changed event:');
            this.mDialogStateSetEvent.emit(aStateName);
            return 0;
        });

        this.mBot.addDialogActionEvent( BOT_SERVICE_NAME, (aAction: DialogActionInterface) => {
            // Mapping zwischen Bot und BotService
            const action: BotServiceActionInterface = {
                state: aAction.state,
                action: aAction.action,
                type: aAction.type,
                id: aAction.id
            };
            // console.log('BotService._initAllEvent: action start event:', action);
            this.mDialogActionEvent.emit( action );
            return 0;
        });

        this.mBot.addDialogActionStopEvent( BOT_SERVICE_NAME, () => {
            // console.log('BotService._initAllEvent: action stop event:');
            this.mDialogActionStopEvent.emit();
            return 0;
        });

        this.mBot.addDialogSpeakEvent( BOT_SERVICE_NAME, (aSpeakData: DialogSpeakInterface) => {
            // console.log('BotService._initAllEvent: speak start event:');
            const text = aSpeakData.text || '';
            this.mDialogSpeakEvent.emit( text );
            return 0;
        });

        this.mBot.addDialogSpeakStopEvent( BOT_SERVICE_NAME, () => {
            // console.log('BotService._initAllEvent: speak stop event:');
            this.mDialogSpeakStopEvent.emit();
            return 0;
        });

        // ErrorEvent wird automatisch auch fuer Dialog und Speak eingetragen !
        this.mBot.addErrorEvent( BOT_SERVICE_NAME, ( aError: any) => {
            // console.log('BotService._initAllEvent: _error event:', aError);
            this.mErrorEvent.emit( aError );
            return 0;
        });
        return 0;
    }


    /**
     * Ereignis fuer neu eingestellten Dialog
     *
     * @readonly
     */

    get setDialogEvent() {
        return this.mDialogSetEvent;
    }


    /**
     * Ereignis fuer geparstes Dialogskript
     *
     * @readonly
     */

    get parseEvent() {
        return this.mDialogParseEvent;
    }


    /**
     * Ereignis fuer gestarteten Dialog
     *
     * @readonly
     */

    get startEvent() {

        return this.mDialogStartEvent;
    }


    /**
     * Ereignis fuer beendeten Dialog
     *
     * @readonly
     */

    get stopEvent() {
        return this.mDialogStopEvent;
    }


    /**
     * Ereignis fuer neu eingestellten Dialogzustand
     *
     * @readonly
     */

    get setStateEvent() {
        return this.mDialogStateSetEvent;
    }

    /**
     * Ereignis fuer Aktionen
     *
     * @readonly
     */

    get actionEvent() {
        return this.mDialogActionEvent;
    }


    /**
     * Ereignis fuer Aktionen beenden
     *
     * @readonly
     */

    get actionStopEvent() {
        return this.mDialogActionStopEvent;
    }


    /**
     * Ereignis fuer Sprachausgabe starten
     *
     * @readonly
     */

    get speakEvent() {
        return this.mDialogSpeakEvent;
    }


    /**
     * Ereignis fuer Sprachausgabe beendet
     *
     * @readonly
     */

    get speakStopEvent() {
        return this.mDialogSpeakStopEvent;
    }


    /**
     * Ereignis fuer Fehler
     *
     * @readonly
     */

    get errorEvent() {
        return this.mErrorEvent;
    }


    // Speak-Funktionen


    /**
     * Pruefen auf aktive Sprachausgabe
     *
     * @return {boolean} speakFlag - true, Sprachausgabe ist aktiv, false sonst
     */

    isSpeak(): boolean {
        if ( !this.mBot ) {
            this._error('isSpeak', 'keine Bot-Komponente vorhanden');
            return false;
        }
        return this.mBot.isSpeak();
    }


    /**
     * Sprachausgabe fuer den Bot einschalten
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setSpeakOn(): number {
        if ( !this.mBot ) {
            this._error('setSpeakOn', 'keine Bot-Komponente vorhanden');
            return -1;
        }
        return this.mBot.setSpeakOn();
    }


    /**
     * Sprachausgabe fuer den Bot ausschalten
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setSpeakOff(): number {
        if ( !this.mBot ) {
            this._error('setSpeakOff', 'keine Bot-Komponente vorhanden');
            return -1;
        }
        return this.mBot.setSpeakOff();
    }


    /**
     * Eigenschaft Speak setzen. Wenn Speak eingeschaltet ist,
     * wird der Dialogtext als Sprachausgabe ueber die Speak-Komponente erzeugt.
     *
     * @param {boolean} aSpeakFlag - True, wenn Sprachausgabe erfolgen soll, False sonst
     */

    set speak( aSpeakFlag: boolean ) {
        if ( aSpeakFlag ) {
            this.setSpeakOn();
        } else {
            this.setSpeakOff();
        }
    }


    /**
     * Eigenschaft Speak zurueckgeben.
     *
     * @readonly
     * @param {boolean} aSpeakFlag - True, wenn Sprachausgabe erfolgt, False sonst
     */

    get speak() {
        return this.isSpeak();
    }


    // Action-Funktionen


    /**
     * Pruefen auf aktive Aktionsverarbeitung
     *
     * @return {boolean} actionFlag - true, Aktionsverarbeitung ist aktiv, false sonst
     */

    isAction(): boolean {
        if ( !this.mBot ) {
            this._error('isAction', 'keine Bot-Komponente vorhanden');
            return false;
        }
        return this.mBot.isAction();
    }


    /**
     * Aktionsverarbeitung fuer den Bot einschalten
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActionOn(): number {
        if ( !this.mBot ) {
            this._error('setActionOn', 'keine Bot-Komponente vorhanden');
            return -1;
        }
        return this.mBot.setActionOn();
    }


    /**
     * Aktionsverarbeitung fuer den Bot ausschalten
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActionOff(): number {
        if ( !this.mBot ) {
            this._error('setActionOff', 'keine Bot-Komponente vorhanden');
            return -1;
        }
        return this.mBot.setActionOff();
    }


    /**
     * Eigenschaft Action setzen. Wenn Action eingeschaltet ist,
     * wird die Dialogaktion ueber die Action-Komponente ausgefuehrt.
     *
     * @param {boolean} aActionFlag - True, wenn Aktionsverarbeitung erfolgen soll, False sonst
     */

    set action( aActionFlag: boolean ) {
        if ( aActionFlag ) {
            this.setActionOn();
        } else {
            this.setActionOff();
        }
    }


    /**
     * Eigenschaft Action zurueckgeben.
     *
     * @readonly
     * @param {boolean} aActionFlag - True, wenn Aktionsverarbeitung erfolgt, False sonst
     */

    get action() {
        return this.isAction();
    }


    // Dialog-Funktionen


    /**
     * Eintragen eines Dialogdateiverzeichnisses (z.B. 'assets/speech/').
     * Muss mit '/' abgeschlossen werden !
     *
     * @param {string} aFilePath - lokales Verzeichnis zu den Dialogdaten
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setDialogFilePath( aFilePath: string): number {
        if ( !this.mBot ) {
            this._error('setDialogFilePath', 'keine Bot-Komponente vorhanden');
            return -1;
        }
        return this.mBot.setDialogFilePath( aFilePath );
    }


    /**
     * Rueckgabe des aktuell eingetragenen Dialogverzeichnisses
     *
     * @return {string} aktuelles Dialogverzeichnis zurueckgeben
     */

    getDialogFilePath(): string {
        if ( !this.mBot ) {
            this._error('getDialogFilePath', 'keine Bot-Komponente vorhanden');
            return '';
        }
        return this.mBot.getDialogFilePath();
    }


    /**
     * Eigenschaft Path eintragen fuer das Dialogverzeichnis.
     *
     * @param {string} aPath - lokales Verzeichnis zu den Dialogdateien
     */

    set path( aPath: string ) {
        this.setDialogFilePath( aPath );
    }

    /**
     * Eigenschaft Path zurueckgeben
     *
     * @readonly
     * @return {string} aPath - Dialogverzeichnis fuer alle Dialogdateien
     */

    get path() {
        return this.getDialogFilePath();
    }


    /**
     * Eintragen einer Dialogdatei (z.B. 'speech.def'). Beinhalted das
     * Dialogskript fuer den Dialoginterpreter.
     *
     * @param {string} aFileName - Dialogskriptdateiname
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setDialogFileName( aFileName: string): number {
        if ( !this.mBot ) {
            this._error('setDialogFileName', 'keine Bot-Komponente vorhanden');
            return -1;
        }
        return this.mBot.setDialogFileName( aFileName );
    }


    /**
     * Rueckgabe des aktuell eingetragenen Dialogdateinamens
     *
     * @return {string} aktuellen Dialogdateinamen zurueckgeben
     */

    getDialogFileName(): string {
        if ( !this.mBot ) {
            this._error('getDialogFileName', 'keine Bot-Komponente vorhanden');
            return '';
        }
        return this.mBot.getDialogFileName();
    }


    /**
     * Eigenschaft File eintragen fuer die aktuelle Dialogdatei.
     *
     * @param {string} aFileName - Name der Dialogdatei
     */

    set file( aFileName: string ) {
        this.setDialogFileName( aFileName );
    }


    /**
     * Eigenschaft File fuer die aktuelle Dialogdatei zurueckgeben.
     *
     * @return {string} aFileName - Name der aktuellen Dialogdatei
     */

    get file(): string {
        return this.getDialogFileName();
    }


    /**
     * alle Dialogdaten aus dem Dialogspeicher loeschen.
     *
     * @return {number} Fehlercode 0 oder -1
     */

    clearDialog(): number {
        try {
            return this.mBot.clearDialog();
        } catch ( aException ) {
            this._exception( 'clearDialog', aException );
            return -1;
        }
    }


    /**
     * Dialog ueber seinen Namen einstellen. Der Dialog muss im Dialogskript vorhanden sein.
     *
     * @param {string} aDialogName - Name des Dialogs im Dialogskript
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setDialog( aDialogName: string ): number {
        try {
            return this.mBot.setDialog( aDialogName );
        } catch ( aException ) {
            this._exception( 'setDialog', aException );
            return -1;
        }
    }


    /**
     * Aktuell eingestellten Dialog zurueckgeben
     *
     * @return {string} Rueckgabe des Dialognamens
     */

    getDialog(): string {
        try {
            return this.mBot.getDialog();
        } catch ( aException ) {
            this._exception( 'getDialog', aException );
            return '';
        }
    }


    /**
     * Eigenschaft Dialog eintragen.
     *
     * @param {string} aDialogName - Name des aktuellen Dialogs
     */

    set dialog( aDialogName: string ) {
        this.setDialog( aDialogName );
    }


    /**
     * Eigenschaft Dialog zurueckgeben.
     *
     * @return {string} aDialogName - Name des aktuellen Dialogs
     */

    get dialog() {
        return this.getDialog();
    }


    /**
     * Dialogskript parsen und im Dialogspeicher ablegen
     *
     * @param {string} aDialogData - Dialogskript
     *
     * @returns {number}
     */

    parse( aDialogData: string ): number {
        try {
            return this.mBot.writeDialogData( aDialogData );
        } catch ( aException ) {
            this._exception( 'parse', aException );
            return -1;
        }
    }


    /**
     * Dialogskript Datei parsen und im Dialogspeicher ablegen
     *
     * @param {string} aDialogFileName - Dialogskript Dateiname
     *
     * @returns {number} Fehlercode 0 oder -1
     */

    parseFile( aDialogFileName?: string ): number {
        try {
            return this.mBot.loadDialogFile( aDialogFileName );
        } catch ( aException ) {
            this._exception( 'parseFile', aException );
            return -1;
        }
    }


    /**
     * Eingestellten Dialog mit eingestelltem Dialogzustand starten
     *
     * @return {number} Fehlercode 0 oder -1
     */

    start(): number {
        try {
            return this.mBot.startDialog();
        } catch ( aException ) {
            this._exception( 'start', aException );
            return -1;
        }
    }


    /**
     * Dialog beenden
     *
     * @return {number} Fehlercode 0 oder -1
     */

    stop(): number {
        try {
            return this.mBot.stopDialog();
        } catch ( aException ) {
            this._exception( 'stop', aException );
            return -1;
        }
    }


    /**
     * Dialog ein/ausschalten
     *
     * @return {number} Fehlercode 0 oder -1
     */

    toggle(): number {
        try {
            return this.mBot.toggleDialog();
        } catch ( aException ) {
            this._exception( 'toggle', aException );
            return -1;
        }
    }


    // Dialogzustands-Funktionen


    /**
     * Dialogzustand setzen
     *
     * @param {string} aStateName - Name des Dialogzustands im Dialogskript
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setState( aStateName: string ): number {
        try {
            return this.mBot.setDialogState( aStateName );
        } catch ( aException ) {
            this._exception( 'setState', aException );
            return -1;
        }
    }


    /**
     * Hier wird der aktuelle Dialogzustand zurueckgegeben
     *
     * @return {string} Rueckgabe des Dialogzustandsnamens
     */

    getState(): string {
        try {
            return this.mBot.getDialogState();
        } catch ( aException ) {
            this._exception( 'getState', aException );
            return '';
        }
    }


    /**
     * Eigenschaft State setzen.
     *
     * @param {string} aStateName - Name des aktuell einzustellenden Zustands
     */

    set state( aStateName: string ) {
        this.setState( aStateName );
    }


    /**
     * Eigenschaft State zurueckgeben.
     *
     * @param {string} aStateName - Name des aktuell eingestellten Zustands
     */

    get state() {
        return this.getState();
    }


    /**
     * Dialogzustandskontext eintragen. Der Kontext dient zur variablen Steuerung der Dialogzustaende.
     *
     * @param {*} aStateContext - Dialogzustantskontext
     *
     * @returns {number} Fehlercode 0 oder -1
     */

    setStateContext( aStateContext: any ): number {
        try {
            return this.mBot.setDialogStateContext( aStateContext );
        } catch ( aException ) {
            this._exception( 'setStateContext', aException );
            return -1;
        }
    }


    /**
     * Eigenschaft Kontext eintragen.
     *
     * @param {*} aStateContext - aktuelles Kontextobjekt zum State eintragen
     */

    set context( aStateContext: any ) {
        this.setStateContext( aStateContext );
    }


    // Kontext-Funktionen


    /**
     * Loeschen des aktuellen Kontextes
     *
     * @return {number} Fehlercode 0 oder -1
     */

    clearContext(): number {
        try {
            return this.mBot.clearContext();
        } catch ( aException ) {
            this._exception( 'clearContext', aException );
            return -1;
        }
    }


    /**
     * Eintragen eines Kontextes zu einem Element.
     *
     * @param {string} aElementName - Name des Elementes
     * @param {string} aContextName - Name des Kontexts
     *
     * @returns {number}
     */

    addContextElement( aElementName: string, aContextName: string ): number {
        try {
            return this.mBot.addContextElement( aElementName, aContextName );
        } catch ( aException ) {
            this._exception( 'addContextElement', aException );
            return -1;
        }
    }


    /**
     * Entfernen eines Kontextes zu einem Element.
     *
     * @param {string} aElementName - Name des Elementes
     * @param {string} aContextName - Name des Kontexts
     *
     * @returns {number}
     */

    removeContextElement( aElementName: string, aContextName: string ): number {
        try {
            return this.mBot.removeContextElement( aElementName, aContextName );
        } catch ( aException ) {
            this._exception( 'removeContextElement', aException );
            return -1;
        }
    }

}
