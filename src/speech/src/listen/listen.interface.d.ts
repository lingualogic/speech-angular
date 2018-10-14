/**
 * Listen Interface
 *
 * API-Version: 1.1
 * Datum: 09.10.2018
 *
 * Letzte Aenderung: 09.10.2018
 * Status: gelb
 *
 * @module listen
 * @author SB
 */
import { OnSpeechErrorFunc } from '../interface/speech-function.interface';
import { OnListenStartFunc, OnListenStopFunc, OnListenResultFunc } from './listen-function.type';
export { OnListenStartFunc, OnListenStopFunc, OnListenResultFunc } from './listen-function.type';
export { ListenOptionInterface } from './listen-option.interface';
/** @export
 * Listen Schnittstelle
 */
export interface ListenInterface {
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
    addListenStartEvent(aPluginName: string, aEventFunc: OnListenStartFunc): number;
    addListenStopEvent(aPluginName: string, aEventFunc: OnListenStopFunc): number;
    addListenResultEvent(aPluginName: string, aEventFunc: OnListenResultFunc): number;
    addErrorEvent(aPluginName: string, aEventFunc: OnSpeechErrorFunc): number;
    removeListenStartEvent(aPluginName: string): number;
    removeListenStopEvent(aPluginName: string): number;
    removeListenResultEvent(aPluginName: string): number;
    removeErrorEvent(aPluginName: string): number;
    removeAllEvent(aPluginName: string): number;
    /**
     * Aendern der Sprache
     *
     * @param {string} aLanguage - Kurzzeichen fuer Sprache ( de, en )
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setLanguage(aLanguage: string): number;
    /**
     * aktuell eingestellte Sprache zurueckgeben
     *
     * @returns {string} language - Kurzzeichenstring fuer Sprache ( de, en )
     */
    getLanguage(): string;
    isListenRunning(): boolean;
    startListen(): number;
    stopListen(): number;
    abortListen(): number;
    /**
     * Fuehrt Testkommandos aus, um interne Tests ablaufen lassen zu koennen
     *
     * @param {string} aTestCommand - Testkommando
     * @param {*} aTestData - optionale Testdaten
     *
     * @return {*} Rueckgabe der Testergebnisse
     */
    test(aTestCommand: string, aTestData?: any): any;
}
