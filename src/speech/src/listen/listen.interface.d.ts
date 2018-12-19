/**
 * Listen Interface
 *
 * API-Version: 1.2
 * Datum: 02.12.2018
 *
 * Letzte Aenderung: 02.12.2018
 * Status: gelb
 *
 * @module listen
 * @author SB
 */
import { BaseInterface } from './../base/base.interface';
import { OnListenResultFunc } from './listen-function.type';
/** @export
 * Listen Schnittstelle
 */
export interface ListenInterface extends BaseInterface {
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
     * Enfernen eines Spracheingabe-Ergebnis Events.
     *
     * @param {string} aPluginName - Name des Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeListenResultEvent(aPluginName: string): number;
    /**
     * Setzen der aktuellen ASR ueber ihren Namen
     *
     * @param {string} aASRName - Name der ASR
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setASR(aASRName: string): number;
    /**
     * Rueckgabe des eingestellten ASR-Namens
     *
     * @returns {string} Name der aktuellen ASR
     */
    getASR(): string;
    /**
     * Rueckgabe aller vorhandenen ASR-Namen
     *
     * @return {Array<string>} Liste der ASR-Namen
     */
    getASRList(): Array<string>;
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
     * Sofortiger Abbruch der Spracheingabe ohne Resultate zurueckzugeben
     *
     * @returns {number} Fehlercode 0 oder -1
     */
    abort(): number;
}
