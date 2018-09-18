/**
 * Globale Fabrik zur Erzeugung einer Action API Instanz.
 *
 * API-Version: 1.0
 * Datum:   29.08.2018
 *
 * Letzte Aenderung: 10.09.2018
 * Status: gelb
 *
 * @module action
 * @author SB
 */
import { ActionOptionInterface } from './action-option.interface';
import { ActionInterface } from './action.interface';
/** @export
 * Statische Klasse zur Erzeugung von Action.
 */
export declare class ActionFactory {
    /**
     * Konstruktor ist privat, es kann keine Instanz der Klasse erzeugt werden
     */
    private constructor();
    /**
     * Kann verschiedene Versionen von Action
     * zurueckgeben, einschließlich eines Action-Mocks.
     *
     * @param {string} aName - Name der zu erzeugenden Action
     * @param {ActionOptionInterface} aOption - optionale Parameter
     *
     * @return {ActionInterface} Action Instanz wird zurueckgegeben
     */
    static create(aName?: string, aOption?: ActionOptionInterface): ActionInterface;
}
