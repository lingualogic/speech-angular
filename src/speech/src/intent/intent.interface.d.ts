/**
 * Intent Interface
 *
 * API-Version: 1.0
 * Datum: 03.12.2018
 *
 * Letzte Aenderung: 03.12.2018
 * Status: rot
 *
 * @module intent
 * @author SB
 */
import { BaseInterface } from './../base/base.interface';
import { OnListenResultFunc, OnIntentResultFunc } from './intent-function.type';
/** @export
 * Intent Schnittstelle
 */
export interface IntentInterface extends BaseInterface {
    /**
     * Eintragen eines Spracheingabe-Ergebnis Events. Hier wird der Ergebnistext
     * der Spracheingabe zurueckgegeben.
     *
     * @param {string} aPluginName - Name des Plugins
     * @param {OnListenResultFunc} aEventFunc - Ereignis-Behandlungsfunktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    addListenResultEvent(aPluginName: string, aEventFunc: OnListenResultFunc): number;
    /**
     * Eintragen eines Sprachanalyse-Ergebnis Events. Hier wird das Ergebnis
     * der Sprachanalyse zurueckgegeben.
     *
     * @param {string} aPluginName - Name des Plugins
     * @param {OnIntentResultFunc} aEventFunc - Ereignis-Behandlungsfunktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    addIntentResultEvent(aPluginName: string, aEventFunc: OnIntentResultFunc): number;
    /**
     * Enfernen eines Spracheingabe-Ergebnis Events.
     *
     * @param {string} aPluginName - Name des Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeListenResultEvent(aPluginName: string): number;
    /**
     * Enfernen eines Sprachanalyse-Ergebnis Events.
     *
     * @param {string} aPluginName - Name des Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeIntentResultEvent(aPluginName: string): number;
    /**
     * Setzen der aktuellen NLU ueber ihren Namen
     *
     * @param {string} aNLUName - Name der NLU
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setNLU(aNLUName: string): number;
    /**
     * Rueckgabe des eingestellten NLU-Namens
     *
     * @returns {string} Name der aktuellen NLU
     */
    getNLU(): string;
    /**
     * Rueckgabe aller vorhandenen NLU-Namen
     *
     * @return {Array<string>} Liste der NLU-Namen
     */
    getNLUList(): Array<string>;
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
    /**
     * Rueckgabe aller vorhandenen Language-Namen
     *
     * @return {Array<string>} Liste der Language-Namen
     */
    getLanguageList(): Array<string>;
    /**
     * Eintragen des zu anlysierenden Textes
     *
     * @param {string} aText - zu analysierender Text
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setIntentText(aText: string): number;
    /**
     * Rueckgabe des aktuell zu analysierenden Textes
     *
     * @return {string} zu analysierender Text
     */
    getIntentText(): string;
    /**
     * Sofortiger Abbruch der Spracheingabe ohne Resultate zurueckzugeben
     *
     * @returns {number} Fehlercode 0 oder -1
     */
    abort(): number;
}
