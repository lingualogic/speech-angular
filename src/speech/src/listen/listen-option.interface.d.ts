/**
 * Listen Option Schnittstelle
 *
 * API-Version: 1.0
 * Datum: 08.10.2018
 *
 * Letzte Aenderung: 08.10.2018
 * Status: gelb
 *
 * @module listen
 * @author SB
 */
/** @export
 * ListenOption Schnittstelle fuer optionale Konfigurationsparameter von Listen bei der Initialisierung
 */
export interface ListenOptionInterface {
    /** setzt die Sprache fuer die Spracheingabe ( de, en )*/
    listenLanguage?: string;
    /** legt fest, ob die Fehlermeldungen zusaetzlich auf der Konsole ausgegeben werden */
    errorOutputFlag?: boolean;
}
