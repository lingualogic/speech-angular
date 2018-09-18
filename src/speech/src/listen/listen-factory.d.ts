/**
 * Globale Fabrik zur Erzeugung einer Listen API Instanz
 *
 * Version: 1.0
 * Datum:   22.08.2018
 *
 * @module listen
 * @author SB
 */
import { ListenOptionInterface } from './listen-option.interface';
import { ListenInterface } from './listen.interface';
/** @export
 * Statische Klasse zur Erzeugung einer ListenComponent Instanz.
 */
export declare class ListenFactory {
    /**
     * Konstruktor ist privat, es kann keine Instanz der Klasse erzeugt werden
     */
    private constructor();
    /**
     * Kann verschiedene Versionen von Listen
     * zurueckgeben, einschließlich eines Listen-Mocks.
     *
     * @param {string} aName - Name des zu erzeugenden Listen
     * @param {ListenOptionInterface} aOption - optionale Parameter
     *
     * @return {ListenInterface} Listen Instanz wird zurueckgegeben
     */
    static create(aName?: string, aOption?: ListenOptionInterface): ListenInterface;
}
