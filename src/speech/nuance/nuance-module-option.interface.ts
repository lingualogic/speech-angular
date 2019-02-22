/**
 * NuanceModuleOption Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       16.12.2018
 *
 * Letzte Aenderung: 16.12.2018
 * Status: rot
 *
 * @module speech/nuance
 * @author SB
 */


/** @export
 * ActionOption Schnittstelle fuer optionale Konfigurationsparameter von Action bei der Initialisierung
 */

export interface NuanceModuleOptionInterface {
    /** legt die App-ID fuer die Verbindung zum Server fest */
    nuanceAppId?: string;
    /** legt den App-Key fuer die Verbindung zum Server fest */
    nuanceAppKey?: string;
    /** legt die User-ID fuer die Verbindung zum Server fest */
    nuanceUserId?: string;
    /** legt den NLU-TAG fuer die Verbindung zum Server fest */
    nuanceNluTag?: string;
    /** legt fest, ob Port oder Mock geladen werden */
    nuanceMockFlag?: boolean;
    /** legt die Fehlerausgabe fest */
    errorOutputFlag?: boolean;
}
