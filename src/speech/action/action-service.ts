/**
 * ActionService zur Anbindung der Action-Komponente an Angular
 *
 * API-Version: 1.0
 * Datum:       15.09.2018
 *
 * Letzte Aenderung: 15.09.2018
 * Status:           gruen
 *
 * @module speech/action
 * @author SB
 */


// angular

import { EventEmitter, Injectable } from '@angular/core';


// speech

import {
    ACTION_COMPONENT_NAME,
    ActionFactory,
    ActionInterface,
    ActionOptionInterface
} from './../speech';


// action

import { ACTION_SERVICE_NAME } from './action-service-const';
import { ACTIONSERVICE_API_VERSION } from './action-service-version';
import { ActionServiceConfig } from './action-service-config';
import { ActionServiceDataInterface } from './action-service-data.interface';
import { ActionServiceOptionInterface } from './action-service-option.interface';


// Konstanten


/**
 * Stellt ein, ob die Events synchron oder asynchron ausgeliefert werden
 */

const ACTION_ASYNC_EVENT = true;


/**
 * Setzt den Daufaultwert fuer Fehlerausgaben auf der Konsole
 */

export const ACTION_ERROR_OUTPUT = false;


// Action-Funktionen


/** Definiert die StartAction Funktion fuer eine Dialogaktion */
export type ActionStartFunc = (aAction: ActionServiceDataInterface) => number;
/** Definiert die StopAction Funktion fuer eine Dialogaktion */
export type ActionStopFunc = () => number;


/** @export
 * ActionService Klasse fuer Speech-Angular. Dient der Ausfuehrung von Aktionen
 * in der WebApp.
 */

@Injectable({
  providedIn: 'root',
})
export class ActionService {

    /** definiert die Konfiguration des Service */

    protected static actionServiceConfig = ActionServiceConfig;

    /** legt fest, ob die Initialisierung im Konstruktor bereits erfolgt */

    private static constructorInitFlag = true;

    // Action-Komponente

    private mAction: ActionInterface = null;

    // Service-Events

    private mActionStartEvent = new EventEmitter( ACTION_ASYNC_EVENT );
    private mActionStopEvent = new EventEmitter( ACTION_ASYNC_EVENT );
    private mErrorEvent = new EventEmitter<any>( ACTION_ASYNC_EVENT );

    /**
     * Fehlerausgabe fuer Konsole festlegen
     */

    protected mErrorOutputFlag = ACTION_ERROR_OUTPUT;


    /**
     * pruefen auf ConstructorInitFlag fuer Festlegung, ob der Konstructor init aufruft.
     *
     * @static
     * @return {boolean} ConstructorInitFlag - True, Konstructor initialisiert den Service, False sonst
     */

    static isConstructorInit(): boolean {
        return ActionService.constructorInitFlag;
    }


    /**
     * setzen des ConstructorInitFlag auf true, um init im Konstruktor aufzurufen.
     *
     * @static
     */

    static setConstructorInitOn(): void {
        ActionService.constructorInitFlag = true;
    }


    /**
     * loescht das ConstructorInitFlag, um init nicht im Konstruktor aufzurufen.
     *
     * @static
     */

    static setConstructorInitOff(): void {
        ActionService.constructorInitFlag = false;
    }


    /**
     * Rueckgabe der Konfiguration fuer den Service, um die Konfiguration zu veraendern.
     * Muss vor der Erzeugung des Service aufgerufen werden. Wird nur im Zusammenhang mit
     * dem gesetzten ConstructorInitFlag verwendet, welches die Initialisierung des Service
     * im Konstruktor vornimmt. Bei manuellem Aufruf von Init kann diese Funktion zur
     * Uebergabe der Optionen verwendet werden.
     *
     * @static
     * @return {ActionServiceOptionInterface} ActionServiceOptions - dient zur Einstellung der otionalen Parameter
     */

    static getConfig(): ActionServiceOptionInterface {
        return ActionService.actionServiceConfig;
    }


    /**
     * Konstruktor
     */

    constructor() {
        // console.log('ActionService.constructor: initFlag = ', ActionService.isConstructorInit(), ActionService.getConfig());
        if ( ActionService.isConstructorInit()) {
            if ( this.init( ActionService.getConfig()) !== 0 ) {
                throw new Error( 'Action nicht initialisiert' );
            }
        }
    }


    // Service-Funktionen


    /**
     * Optionen eintragen
     *
     * @private
     * @param {ActionServiceOptionInterface} aOption - optionale Parameter
     */

    protected _setOption( aOption: ActionServiceOptionInterface ): void {
        // console.log('ActionService._setOption:', aOption);
        if ( !aOption ) {
            return;
        }
        // ActiveFlag uebertragen
        if ( typeof aOption.activeFlag === 'boolean' ) {
            this.active = aOption.activeFlag;
        }
        // Fehlerausgabeflag uebergeben
        if ( typeof aOption.errorOutputFlag === 'boolean' ) {
            this.errorOutput = aOption.errorOutputFlag;
        }
    }


    /**
     * Optionen uebertragen in ActionOptionen
     *
     * @protected
     * @param {ActionServiceOptionInterface} aOption - optionale Parameter
     * @return {any} Rueckgabe fuer Bot Optionen
     */

    protected _mapOption( aOption: ActionServiceOptionInterface ): any {
        // Optionen uebertragen
        const option: ActionOptionInterface = {
            errorOutputFlag: this.mErrorOutputFlag
        };
        if ( !aOption ) {
            return option;
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
     * @param {ActionServiceOptionInterface} aOption - optionale Parameter zur Konfiguration des Service
     *
     * @return {number} errorCode(0,-1)
     */

    init( aOption?: ActionServiceOptionInterface ): number {
        // pruefen auf bereits initialisiert
        if ( this.mAction ) {
            this._setOption( aOption );
            return 0;
        }
        // Optionen uebertragen (BotService->Bot)
        const option = this._mapOption( aOption ) as ActionOptionInterface;
        // Action erzeugen
        this.mAction = ActionFactory.create( ACTION_COMPONENT_NAME, option );
        if ( !this.mAction ) {
            this._error('init', 'Action nicht erzeugt');
            return -1;
        }
        // Optionen eintragen in BotService
        this._setOption( aOption );
        if ( this.mErrorOutputFlag ) {
            console.log( 'ActionService Version:', ACTIONSERVICE_API_VERSION );
        }
        return this._addAllEvent();
    }


    /**
     * Ruecksetzen des Services, alle Werte werden auf ihre Defaultwerte gesetzt
     *
     * @param {ActionServiceOptionInterface} aOption - optionale Parameter zur Konfiguration des Service
     *
     * @return {number} Fehlercode 0 oder -1
     */

    reset( aOption?: ActionServiceOptionInterface ): number {
        if ( !this.mAction ) {
            this._error('reset', 'Action nicht vorhanden');
            return -1;
        }
        // Optionen uebertragen (ActionService->Action)
        const option = this._mapOption( aOption ) as ActionOptionInterface;
        const result = this.mAction.reset( option );
        this._setOption( aOption );
        return result;
    }


    /**
     * pruefen auf initialisierten Service
     *
     * @return {boolean} Rueckgabe, ob Service initialisiert ist
     */

    isInit(): boolean {
        if ( this.mAction ) {
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
        if ( this.mAction ) {
            return this.mAction.isActive();
        }
        return false;
    }


    /**
     * Komponente aktivieren
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActiveOn(): number {
        if ( this.mAction ) {
            return this.mAction.setActiveOn();
        }
        return -1;
    }


    /**
     * Komponente daaktivieren
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActiveOff(): number {
        if ( this.mAction ) {
            return this.mAction.setActiveOff();
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
        if ( this.mAction ) {
            return this.mAction.isErrorOutput();
        }
        return this.mErrorOutputFlag;
    }


    /**
     * Einschalten der Konsolen-Fehlerausgabe
     */

    setErrorOutputOn(): void {
        this.mErrorOutputFlag = true;
        if ( this.mAction ) {
            this.mAction.setErrorOutputOn();
        }
    }


    /**
     * Ausschalten der Konsolen-Fehlerausgabe
     */

    setErrorOutputOff(): void {
        this.mErrorOutputFlag = false;
        if ( this.mAction ) {
            this.mAction.setErrorOutputOff();
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
     * @param {string} aFuncName - Name der Funktion, wo der Fehler auftrat
     * @param {string} aErrorText - Fehlertext
     */

    protected _error( aFuncName: string, aErrorText: string ): void {
        if ( this.mErrorOutputFlag ) {
            console.log('===> ERROR ActionService.' + aFuncName + ':', aErrorText);
        }
        this.mErrorEvent.emit(new Error( 'ActionService.' + aFuncName + ': ' + aErrorText ));
    }


    /**
     * Ausgabe einer Exception
     *
     * @param {string} aFuncName - Name der Funktion, in der die Exception auftrat
     * @param {Exception} aException - Exception-Objekt
     */

    protected _exception( aFuncName: string, aException: any ): void {
        if ( this.mErrorOutputFlag ) {
            console.log('===> EXCEPTION ActionService' + aFuncName + ':', aException.message);
        }
        this.mErrorEvent.emit(new Error( 'EXCEPTION ActionService.' + aFuncName + ': ' + aException.message ));
    }


    // Event-Funktionen


    /**
     * Anbindung der Events
     *
     * @private
     * @return {number} errorCode(0,-1)
     */

    protected _addAllEvent(): number {
        if ( !this.mAction ) {
            this._error('_addAllEvent', 'keine Action-Komponente vorhanden');
            return -1;
        }

        // alle alten Events loeschen

        this.mAction.removeAllEvent( ACTION_SERVICE_NAME );

        // neue Events eintragen

        this.mAction.addActionStartEvent( ACTION_SERVICE_NAME, () => {
            this.mActionStartEvent.emit();
            return 0;
        });

        this.mAction.addActionStopEvent( ACTION_SERVICE_NAME, () => {
            this.mActionStopEvent.emit();
            return 0;
        });

        this.mAction.addErrorEvent( ACTION_SERVICE_NAME, ( aError: any) => {
            this.mErrorEvent.emit( aError );
            return 0;
        });
        return 0;
    }


    // Rueckgabe der globalen Events


    /**
     * Ereignis fuer Aktion gestartet
     *
     * @readonly
     * @return {EventEmitter} actionStartEvent
     */

    get startEvent() {
        return this.mActionStartEvent;
    }


    /**
     * Ereignis fuer Aktion gestoppt
     *
     * @readonly
     * @return {EventEmitter} actionStopEvent
     */

    get stopEvent() {
        return this.mActionStopEvent;
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


    // Aktions-Funktionen


    /**
     * Eintragen des Aktionsnamens
     *
     * @param {string} aActionName - Name der auszufuehrenden Aktion
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setActionName( aActionName: string ): number {
        if ( !this.mAction ) {
            this._error('setActionName', 'keine Action-Komponente vorhanden');
            return -1;
        }
        return this.mAction.setActionName( aActionName );
    }


    /**
     * Rueckgabe des aktuell eingestellten Aktionsnamens
     *
     * @return {string} Aktionsname
     */

    getActionName(): string {
        if ( !this.mAction ) {
            this._error('getActionName', 'keine Action-Komponente vorhanden');
            return '';
        }
        return this.mAction.getActionName();
    }


    /**
     * Eigenschaft Action setzen.
     *
     * @param {string} aActionName - Name der auszufuehrenden Aktion
     */

    set action( aActionName: string ) {
        this.setActionName( aActionName );
    }

    /**
     * Eigenschaft Action zurueckgeben
     *
     * @readonly
     * @return {string} ActionName - Name der auszufuehrenden Aktion
     */

    get action() {
        return this.getActionName();
    }


    /**
     * Eintragen des Elementtyps
     *
     * @param {string} aElementype - Name des Elementyps
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setElementType( aElementType: string ): number {
        if ( !this.mAction ) {
            this._error('setElementType', 'keine Action-Komponente vorhanden');
            return -1;
        }
        return this.mAction.setElementType( aElementType );
    }


    /**
     * Rueckgabe des aktuell eingestellten Elementtyps
     *
     * @return {string} Elementtyp
     */

    getElementType(): string {
        if ( !this.mAction ) {
            this._error('getElementType', 'keine Action-Komponente vorhanden');
            return '';
        }
        return this.mAction.getElementType();
    }


    /**
     * Eigenschaft Type setzen.
     *
     * @param {string} aElementType - Name des Elementtyps
     */

    set type( aElementType: string ) {
        this.setElementType( aElementType );
    }

    /**
     * Eigenschaft Type zurueckgeben
     *
     * @readonly
     * @return {string} ElementType - Name des Elementtyps
     */

    get type() {
        return this.getElementType();
    }


    /**
     * Eintragen des Elementnamens
     *
     * @param {string} aElementName - Name des Elements
     *
     * @return {number} Fehlercode 0 oder -1
     */

    setElementName( aElementName: string ): number {
        if ( !this.mAction ) {
            this._error('setElementName', 'keine Action-Komponente vorhanden');
            return -1;
        }
        return this.mAction.setElementName( aElementName );
    }


    /**
     * Rueckgabe des aktuell eingestellten Elementnamens
     *
     * @return {string} Elementname
     */

    getElementName(): string {
        if ( !this.mAction ) {
            this._error('getElementName', 'keine Action-Komponente vorhanden');
            return '';
        }
        return this.mAction.getElementName();
    }


    /**
     * Eigenschaft Element setzen.
     *
     * @param {string} aElementName - Name des Elements
     */

    set element( aElementName: string ) {
        this.setElementName( aElementName );
    }

    /**
     * Eigenschaft Element zurueckgeben
     *
     * @readonly
     * @return {string} ElementName - Name des Elements
     */

    get element() {
        return this.getElementName();
    }


    /**
     * pruefen auf laufende Aktion
     *
     * @return {boolean} runningFlag
     */

    isRunning(): boolean {
        if ( !this.mAction ) {
            return false;
        }
        return this.mAction.isActionRunning();
    }


    /**
     * Aktion starten. Vorher muessen die Aktionsdaten eingetragen sein.
     *
     * @return {number} Fehlercode 0 oder -1
     */

    start(): number {
        try {
            return this.mAction.startAction();
        } catch ( aException ) {
            this._exception( 'start', aException );
            return -1;
        }
    }


    /**
     * Aktion stoppen.
     *
     * @return {number} Fehlercode 0 oder -1
     */

    stop(): number {
        try {
            return this.mAction.stopAction();
        } catch ( aException ) {
            this._exception( 'stop', aException );
            return -1;
        }
    }


    // Aktionsfunktionen-Funktionen


    addFunction( aFunctionName: string, aStartActionFunc: ActionStartFunc, aStopActionFunc: ActionStopFunc ): number {
        try {
            return this.mAction.addFunction( aFunctionName, aStartActionFunc, aStopActionFunc );
        } catch ( aException ) {
            this._exception( 'addFunction', aException );
            return -1;
        }
    }


    removeFunction( aFunctionName: string ): number {
        try {
            return this.mAction.removeFunction( aFunctionName );
        } catch ( aException ) {
            this._exception( 'removeFunction', aException );
            return -1;
        }
    }


    // Aktionelement-Funktionen


    addElement( aElementName: string, aStartActionFunc: ActionStartFunc, aStopActionFunc: ActionStopFunc ): number {
        try {
            return this.mAction.addElement( aElementName, aStartActionFunc, aStopActionFunc );
        } catch ( aException ) {
            this._exception( 'addElement', aException );
            return -1;
        }
    }


    removeElement( aElementName: string ): number {
        try {
            return this.mAction.removeElement( aElementName );
        } catch ( aException ) {
            this._exception( 'removeElement', aException );
            return -1;
        }
    }

}
