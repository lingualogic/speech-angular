/**
 * Oeffentliche Action Schnittstelle, um Aktionen in der App ausfuehren zu lassen.
 *
 * API-Version: 1.0
 * Datum:       10.09.2018
 *
 * Letzte Aenderung: 10.09.2018
 * Status: gelb
 *
 * @module action
 * @author SB
 */
import { OnSpeechErrorFunc } from '../interface/speech-function.interface';
import { ActionStartFunc, ActionStopFunc, OnActionStartFunc, OnActionStopFunc } from './action-function.type';
export { OnSpeechErrorFunc } from '../interface/speech-function.interface';
export { ActionStartFunc, ActionStopFunc, OnActionStartFunc, OnActionStopFunc } from './action-function.type';
export { ActionDataInterface } from './action-data.interface';
export { ActionOptionInterface } from './action-option.interface';
/**
 * Action Schnittstelle
 */
export interface ActionInterface {
    /**
     * Komponente auf initialen Zustand zuruecksetzen
     *
     * @param {*} aOption - optionale Parameter
     */
    reset(aOption?: any): number;
    /**
     * Typ des Komponenten-Interfaces zurueckgeben
     *
     * @return {string} typeName
     */
    getType(): string;
    /**
     * Name der konkreten Komponente zurueckgeben
     *
     * @return {string} componentName
     */
    getName(): string;
    /**
     * Version der Komponente zurueckgeben
     *
     * @return {string} componentVersion
     */
    getVersion(): string;
    /**
     * pruefen auf aktive Komponente
     *
     * @return {boolean} activeFlag
     */
    isActive(): boolean;
    /**
     * Komponente aktivieren
     *
     * @return {number} Fehercode 0 oder -1
     */
    setActiveOn(): number;
    /**
     * Komponente daktivieren
     *
     * @return {number} Fehlercode oder -1
     */
    setActiveOff(): number;
    /**
     * pruefen auf Fehlerausgabe auf die Konsole
     *
     * @return {boolean} errorOutputFlag
     */
    isErrorOutput(): boolean;
    /**
     * Fehlerausgabe auf Konsole einschalten
     */
    setErrorOutputOn(): void;
    /**
     * Fehlerausgabe auf Konsole ausschalten
     */
    setErrorOutputOff(): void;
    /**
     * Anmelden einer Ereignis Callback-Funktion fuer den Start der Aktion
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     * @param {OnActionStartFunc} aEventFunc - Ereignis Callback Funktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    addActionStartEvent(aPluginName: string, aEventFunc: OnActionStartFunc): number;
    /**
     * Anmelden einer Ereignis Callback-Funktion fuer den Stop der Aktion
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     * @param {OnActionStopFunc} aEventFunc - Ereignis Callback Funktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    addActionStopEvent(aPluginName: string, aEventFunc: OnActionStopFunc): number;
    /**
     * Anmelden einer Ereignis Callback-Funktion fuer die Fehler der Aktion
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     * @param {OnSpeechErrorFunc} aEventFunc - Ereignis Callback Funktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    addErrorEvent(aPluginName: string, aEventFunc: OnSpeechErrorFunc): number;
    /**
     * Entfernen der Ereignisfunktion fuer den Start der Aktion
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeActionStartEvent(aPluginName: string): number;
    /**
     * Entfernen der Ereignisfunktion fuer den Stop der Aktion
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeActionStopEvent(aPluginName: string): number;
    /**
     * Entfernen der Ereignisfunktion fuer die Fehler der Aktion
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeErrorEvent(aPluginName: string): number;
    /**
     * Entfernen aller angemeldeten Ereignisfunktionen
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeAllEvent(aPluginName: string): number;
    /**
     * Aktionsnamen eintragen
     *
     * @param {string} aActionName - Name der aktuell auszufuehrenden Aktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setActionName(aActionName: string): number;
    /**
     * Aktionsname zurueckgeben
     *
     * @return {string} Rueckgabe des aktuell eingestellten Aktionsnamens
     */
    getActionName(): string;
    /**
     * Elementtyp eintragen
     *
     * @param {string} aElementType - Name des Elementyps
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setElementType(aElementType: string): number;
    /**
     * Elementtyp zurueckgeben
     *
     * @return {string} Rueckgabe des aktuell eingestellten Elementtyps
     */
    getElementType(): string;
    /**
     * Elementname eintragen
     *
     * @param {string} aElementName - Name des Elemens
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setElementName(aElementName: string): number;
    /**
     * Elementname zurueckgeben
     *
     * @return {string} Rueckgabe des aktuell eingestellten Elementnamens
     */
    getElementName(): string;
    /**
     * pruefen, ob Aktion gerade laeuft
     *
     * @return {boolean} True, Aktion aktiv, False sonst
     */
    isActionRunning(): boolean;
    /**
     * Startet die Aktion.
     *
     * @return {number} Fehlercode 0 oder -1
     */
    startAction(): number;
    /**
     * Stoppt die Aktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    stopAction(): number;
    addFunction(aFunctionName: string, aStartActionFunc: ActionStartFunc, aStopActionFunc?: ActionStopFunc): number;
    removeFunction(aFunctionName: string): number;
    addElement(aElementName: string, aStartActionFunc: ActionStartFunc, aStopActionFunc: ActionStopFunc): number;
    removeElement(aElementName: string): number;
}
