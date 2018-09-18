/**
 * Listen Option Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       31.08.2018
 *
 * @module listen
 * @author SB
 */
/** @export
 * ListenOption Schnittstelle fuer optionale Konfigurationsparameter von Listen bei der Initialisierung
 */
export interface ListenOptionInterface {
    audioFlag?: boolean;
    /** legt fest, ob die Fehlermeldungen zusaetzlich auf der Konsole ausgegeben werden */
    errorOutputFlag?: boolean;
}
