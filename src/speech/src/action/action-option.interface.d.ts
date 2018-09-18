/**
 * ActionOption Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       31.08.2018
 *
 * Letzte Aenderung: 10.09.2018
 * Status: gelb
 *
 * @module action
 * @author SB
 */
/** @export
 * ActionOption Schnittstelle fuer optionale Konfigurationsparameter von Action bei der Initialisierung
 */
export interface ActionOptionInterface {
    /** definiert den zu verwendenden Builder fuer die Erzeugung der Action-Komponente */
    actionBuilder?: string;
    /** legt fest, ob die Fehlermeldungen zusaetzlich auf der Konsole ausgegeben werden */
    errorOutputFlag?: boolean;
}
