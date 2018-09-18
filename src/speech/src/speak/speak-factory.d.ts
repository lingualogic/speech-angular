/**
 * Globale Fabrik zur Erzeugung einer Speak API Instanz
 *
 * API-Version: 1.0
 * Datum:   03.09.2018
 *
 * Letzte Aenderung: 03.09.2018
 * Status: gruen
 *
 * @module speak
 * @author SB
 */
import { SpeakOptionInterface } from './speak-option.interface';
import { SpeakInterface } from './speak.interface';
/** @export
 * Statische Klasse zur Erzeugung eines Speak.
 */
export declare class SpeakFactory {
    /**
     * Konstruktor ist privat, es kann keine Instanz der Klasse erzeugt werden
     */
    private constructor();
    /**
     * Kann verschiedene Versionen von Speak
     * zurueckgeben, einschließlich eines Speak-Mocks.
     *
     * @param {string} aName - Name des zu erzeugenden Speak
     * @param {SpeakOptionInterface} aOption - optionale Parameter
     *
     * @return {SpeakInterface} Speak Instanz wird zurueckgegeben
     */
    static create(aName?: string, aOption?: SpeakOptionInterface): SpeakInterface;
}
