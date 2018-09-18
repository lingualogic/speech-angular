/**
 * Globale Fabrik zur Erzeugung einer Dialog API Instanz.
 *
 * API-Version: 1.0
 * Datum:   07.09.2018
 *
 * Letzte Aenderung: 07.09.2018
 * Status: gelb
 *
 * @module dialog
 * @author SB
 */
import { DialogOptionInterface } from './dialog-option.interface';
import { DialogInterface } from './dialog.interface';
/** @export
 * Statische Klasse zur Erzeugung eines Dialogs.
 */
export declare class DialogFactory {
    /**
     * Konstruktor ist privat, es kann keine Instanz der Klasse erzeugt werden
     */
    private constructor();
    /**
     * Kann verschiedene Versionen von Dialog
     * zurueckgeben, einschließlich eines Dialog-Mocks.
     *
     * @param {string} aName - Name des zu erzeugenden Dialogs
     * @param {DialogOptionInterface} aOption - optionale Parameter
     *
     * @return {DialogInterface} Dialog Instanz wird zurueckgegeben
     */
    static create(aName?: string, aOption?: DialogOptionInterface): DialogInterface;
}
