/**
 * ListenServiceOption Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       11.10.2018
 *
 * @module speech/listen
 * @author SB
 */


/** @export
 * ListenServiceOption Schnittstelle fuer optionale Konfigurationsparameter des ListenService bei der Initialisierung
 */

export interface ListenServiceOptionInterface {
    /** ein/ausschalten der Listenkomponente */
    activeFlag?: boolean;
    /** setzt die Sprache fuer die Spracheingabe ( 'de', 'en' )*/
    listenLanguage?: string;
    /** legt fest, ob die Fehlermeldungen zusaetzlich auf der Konsole ausgegeben werden */
    errorOutputFlag?: boolean;
}

