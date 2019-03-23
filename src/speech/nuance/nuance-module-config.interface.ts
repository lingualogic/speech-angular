/**
 * NuanceModuleConfig-Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       13.03.2019
 *
 * Letzte Aenderung: 13.03.2019
 * Status: rot
 *
 * @module speech/nuance
 * @author SB
 */


/** @export
 * NuanceConfigData Schnittstelle fuer Konfigurationsparameter von Nuance
 */

export interface NuanceModuleConfigInterface {
    /** legt die App-ID fuer die Verbindung zum Server fest */
    nuanceAppId: string;
    /** legt den App-Key fuer die Verbindung zum Server fest */
    nuanceAppKey: string;
    /** legt den NLU-TAG fuer die Verbindung zum Server fest */
    nuanceNluTag?: string;
}

