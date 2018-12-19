/**
 * Globale Fabrik zur Erzeugung einer Intent API Instanz
 *
 * API-Version: 1.0
 * Datum: 28.11.2018
 *
 * Letzte Aenderung: 28.11.2018
 * Status: rot
 *
 * @module intent
 * @author SB
 */
import { IntentOptionInterface } from './intent-option.interface';
import { IntentInterface } from './intent.interface';
/** @export
 * Statische Klasse zur Erzeugung einer IntentComponent Instanz.
 */
export declare class IntentFactory {
    /**
     * Konstruktor ist privat, es kann keine Instanz der Klasse erzeugt werden
     */
    private constructor();
    /**
     * Kann verschiedene Versionen von Intent
     * zurueckgeben, einschließlich eines Intent-Mocks.
     *
     * @param {string} aName - Name des zu erzeugenden Intent
     * @param {IntentOptionInterface} aOption - optionale Parameter
     *
     * @return {IntentInterface} Intent Instanz wird zurueckgegeben
     */
    static create(aName?: string, aOption?: IntentOptionInterface): IntentInterface;
}
