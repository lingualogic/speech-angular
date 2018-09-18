/**
 * Public Action Data Schnittstelle
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
/** @export
 * Action-Event Schnittstelle fuer das Action-Datentransferobjekt
 */
export interface ActionDataInterface {
    /** definiert den Aktionsnamen */
    action: string;
    /** Objekttyp fuer die Aktion */
    type?: string;
    /** eindeutiger Objektname fuer die Aktion */
    id?: string;
}
