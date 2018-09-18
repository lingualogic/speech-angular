/**
 * Globale Fabrik zur Erzeugung einer Audio API Instanz.
 *
 * Version: 1.0
 * Datum:   23.08.2018
 *
 * @module audio
 * @author SB
 */
import { AudioInterface } from './audio.interface';
/** @export
 * Statische Klasse zur Erzeugung eines Audio.
 */
export declare class AudioFactory {
    /**
     * Konstruktor ist privat, es kann keine Instanz der Klasse erzeugt werden
     */
    private constructor();
    /**
     * Kann verschiedene Versionen von Bot
     * zurueckgeben, einschließlich eines Bot-Mocks.
     *
     * @param {string} aName - Name des zu erzeugenden Bots
     * @param {BotOptionInterface} aOption - optionale Parameter
     *
     * @return {BotInterface} Bot Instanz wird zurueckgegeben
     */
    static create(aName?: string, aOption?: any): AudioInterface;
}
