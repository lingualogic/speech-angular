/**
 * Oeffentliche Action Schnittstelle, um Aktionen in der App ausfuehren zu lassen.
 *
 * API-Version: 1.1
 * Datum:       18.10.2018
 *
 * Letzte Aenderung: 18.10.2018
 * Status: gelb
 *
 * @module action
 * @author SB
 */
import { BaseInterface } from './../base/base.interface';
import { ActionStartFunc, ActionStopFunc } from './action-function.type';
/**
 * Action Schnittstelle
 */
export interface ActionInterface extends BaseInterface {
    /**
     * Aktionsnamen eintragen
     *
     * @param {string} aActionName - Name der aktuell auszufuehrenden Aktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setActionName(aActionName: string): number;
    /**
     * Aktionsname zurueckgeben
     *
     * @return {string} Rueckgabe des aktuell eingestellten Aktionsnamens
     */
    getActionName(): string;
    /**
     * Elementtyp eintragen
     *
     * @param {string} aElementType - Name des Elementyps
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setElementType(aElementType: string): number;
    /**
     * Elementtyp zurueckgeben
     *
     * @return {string} Rueckgabe des aktuell eingestellten Elementtyps
     */
    getElementType(): string;
    /**
     * Elementname eintragen
     *
     * @param {string} aElementName - Name des Elemens
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setElementName(aElementName: string): number;
    /**
     * Elementname zurueckgeben
     *
     * @return {string} Rueckgabe des aktuell eingestellten Elementnamens
     */
    getElementName(): string;
    addFunction(aFunctionName: string, aStartActionFunc: ActionStartFunc, aStopActionFunc?: ActionStopFunc): number;
    removeFunction(aFunctionName: string): number;
    addElement(aElementName: string, aStartActionFunc: ActionStartFunc, aStopActionFunc: ActionStopFunc): number;
    removeElement(aElementName: string): number;
}
