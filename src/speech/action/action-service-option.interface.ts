/**
 * ActionServiceOption Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       15.09.2018
 *
 * @module speech/action
 * @author SB
 */


/** @export
 * ActionServiceOption Schnittstelle fuer optionale Konfigurationsparameter des ActionService bei der Initialisierung
 */

export interface ActionServiceOptionInterface {
    /** ein/ausschalten der Aktionskomponente */
    activeFlag?: true;
    /** legt fest, ob die Fehlermeldungen zusaetzlich auf der Konsole ausgegeben werden */
    errorOutputFlag?: boolean;
}

