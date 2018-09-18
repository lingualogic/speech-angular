/**
 * BotServiceOption Schnittstelle
 *
 * API-Version: 1.0
 * Datum:       15.09.2018
 *
 * @module speech/bot
 * @author SB
 */


/** @export
 * BotServiceOption Schnittstelle fuer optionale Konfigurationsparameter des BotService bei der Initialisierung
 */

export interface BotServiceOptionInterface {
    /** ein/ausschalten des Bot */
    activeFlag?: boolean;
    /** ein/ausschalten der Sprachausgabe */
    speakFlag?: boolean;
    /** ein/ausschalten der Aktionsverarbeitung */
    actionFlag?: boolean;
    /** einzustellender Startdialog */
    dialogName?: string;
    /** Startdialogzustand, wenn ein Dialog gestartet wird */
    dialogRootState?: string;
    /** legt fest, ob ein Dialog direkt geladen wird */
    dialogLoadFlag?: boolean;
    /** definiert das Verzeichnis fuer die Dialogdefinitionsdateien */
    dialogFilePath?: string;
    /** Dialogdefinitionsdateiname fuer die erste zu ladende Dialogdefinitonsdatei */
    dialogFileName?: string;
    /** legt fest, ob die Fehlermeldungen zusaetzlich auf der Konsole ausgegeben werden */
    errorOutputFlag?: boolean;
}

