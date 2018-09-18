/**
 * Public ActionService AktionData Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       15.09.2018
 *
 * @module speech/action
 * @author SB
 */


// Global API


/** @export
 * Action Event Schnittstelle fuer das Action-Datentransferobjekt
 */

export interface ActionServiceDataInterface {
    /** definierte Aktion */
    action: string;
    /** Objekttyp fuer die Aktion */
    type: string;
    /** eindeutiger Objektname fuer die Aktion */
    id: string;
}

