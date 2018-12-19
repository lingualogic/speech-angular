/**
 * IntentServiceOption Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       17.12.2018
 *
 * @module speech/intent
 * @author SB
 */


/** @export
 * Intent-Event Schnittstelle fuer das Intent-Datentransferobjekt
 */

export interface IntentServiceDataInterface {
    /** definiert den Intent-Namen */
    intent: string;
    /** definiert die Wahrscheinlichkeit fuer den Intent */
    confidence: number;
    /** Text zum Intent */
    literal: string;
    /** aufgetretene Fehler */
    error: string;
}
