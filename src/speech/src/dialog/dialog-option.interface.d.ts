/**
 * DialogOption Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       07.09.2018
 *
 * Letzte Aenderung: 07.09.2018
 * Status: gelb
 *
 * @module dialog
 * @author SB
 */
/** @export
 * DialogOption Schnittstelle fuer optionale Konfigurationsparameter von Dialog bei der Initialisierung
 */
export interface DialogOptionInterface {
    /** definiert den zu verwendenden Builder fuer die Erzeugung der Dialog-Komponente */
    dialogBuilder?: string;
    /** Startdialogname, wenn ein Dialog gestartet wird, z.B: 'main' */
    dialogName?: string;
    /** Startdialogzustand, wenn ein Dialog gestartet wird, z.B: 'root' */
    dialogRootState?: string;
    /** legt fest, ob ein Dialog direkt bei der Initialisierung geladen wird */
    dialogLoadFlag?: boolean;
    /** definiert das Verzeichnis fuer die Dialogdefinitionsdateien, muss mit '/' abgeschlossen werden, z.B.: 'assets/' */
    dialogFilePath?: string;
    /** Dialogdefinitionsdateiname fuer die erste zu ladende Dialogdefinitonsdatei, z.B: 'speech.def' */
    dialogFileName?: string;
    /** legt fest, ob die Fehlermeldungen zusaetzlich auf der Konsole ausgegeben werden */
    errorOutputFlag?: boolean;
}
