/**
 * Globale Fabrik zur Erzeugung einer Bot API Instanz.
 *
 * Version: 1.0
 * Datum:   06.09.2018
 *
 * Letzte Aenderung: 06.09.2018
 * Status: gruen
 *
 * @module bot
 * @author SB
 */
import { BotOptionInterface } from './bot-option.interface';
import { BotInterface } from './bot.interface';
/** @export
 * Statische Klasse zur Erzeugung eines Bots.
 */
export declare class BotFactory {
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
    static create(aName?: string, aOption?: BotOptionInterface): BotInterface;
}
