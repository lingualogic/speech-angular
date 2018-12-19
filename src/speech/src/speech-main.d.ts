/**
 * Hauptbuilder des gesamten Speech-Frameworks. Hier werden alle Builder eingetragen,
 * die in den Komponenten verwendet werden duerfen. Muss vor allen Komponenten ausgefuehrt
 * einmal zur Initialisierung des Speech-Frameworks ausgefuehrt werden !
 *
 * Komponenten:
 *
 *          speak       - Sprachausgabe
 *          listen      - Spracheingabe
 *          action      - Aktionsausfuehrung
 *          dialog      - Dialogsteuerung
 *          intent      - Intentinterpreter
 *          bot         - Assistent
 */
/**
 * statische MainBuilder Klasse zur Erzeugung aller Builder des
 * Speech-Frameworks.
 *
 * @export
 * @class MainBuilder
 */
export declare class SpeechMain {
    private static initFlag;
    private constructor();
    static setErrorOutputOn(): void;
    static setErrorOutputOff(): void;
    /**
     * Initialisiert alle Builder
     *
     * @static
     * @return {number} Fehlercode 0 oder -1
     */
    static _createAllBuilder(): number;
    static init(): number;
    static isInit(): boolean;
    /**
     * Freigabe des Systems
     *
     * @static
     * @return {number} Fehlercode 0 oder -1
     */
    static done(): number;
}
