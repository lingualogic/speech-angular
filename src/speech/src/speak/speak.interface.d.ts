/**
 * Oeffentliche Speak Schnittstelle als Teil des Speak-API
 *
 * API-Version: 1.0
 * Datum:       05.09.2018
 *
 * Letzte Aenderung: 03.09.2018
 * Status: gruen
 *
 * @module speak
 * @author SB
 */
import { OnSpeechErrorFunc } from '../interface/speech-function.interface';
import { OnSpeakStartFunc, OnSpeakStopFunc } from './speak-function.type';
export { OnSpeechErrorFunc } from '../interface/speech-function.interface';
export { OnSpeakStartFunc, OnSpeakStopFunc } from './speak-function.type';
export { SpeakOptionInterface } from './speak-option.interface';
/** @export
 * Speak Schnittstelle
 */
export interface SpeakInterface {
    /**
     * Komponente auf initialen Zustand zuruecksetzen
     *
     * @param {*} aOption - optionale Parameter
     */
    reset(aOption?: any): number;
    /**
     * Typ des Komponenten-Interfaces zurueckgeben
     *
     * @return {string} typeName
     */
    getType(): string;
    /**
     * Name der konkreten Komponente zurueckgeben
     *
     * @return {string} componentName
     */
    getName(): string;
    /**
     * Version der Komponente zurueckgeben
     *
     * @return {string} componentVersion
     */
    getVersion(): string;
    /**
     * pruefen auf aktive Komponente
     *
     * @return {boolean} activeFlag
     */
    isActive(): boolean;
    /**
     * Komponente aktivieren
     *
     * @return {number} Fehercode 0 oder -1
     */
    setActiveOn(): number;
    /**
     * Komponente daktivieren
     *
     * @return {number} Fehlercode oder -1
     */
    setActiveOff(): number;
    /**
     * pruefen auf Fehlerausgabe auf die Konsole
     *
     * @return {boolean} errorOutputFlag
     */
    isErrorOutput(): boolean;
    /**
     * Fehlerausgabe auf Konsole einschalten
     */
    setErrorOutputOn(): void;
    /**
     * Fehlerausgabe auf Konsole ausschalten
     */
    setErrorOutputOff(): void;
    /**
     * Anmelden einer Ereignis Callback-Funktion fuer den Start der Sprachausgabe
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     * @param {OnSpeakStartFunc} aEventFunc - Ereignis Callback Funktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    addSpeakStartEvent(aPluginName: string, aEventFunc: OnSpeakStartFunc): number;
    /**
     * Anmelden einer Ereignis Callback-Funktion fuer den Stop der Sprachausgabe
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     * @param {OnSpeakStopFunc} aEventFunc - Ereignis Callback Funktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    addSpeakStopEvent(aPluginName: string, aEventFunc: OnSpeakStopFunc): number;
    /**
     * Anmelden einer Ereignis Callback-Funktion fuer die Fehler der Sprachausgabe
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     * @param {OnSpeechErrorFunc} aEventFunc - Ereignis Callback Funktion
     *
     * @return {number} Fehlercode 0 oder -1
     */
    addErrorEvent(aPluginName: string, aEventFunc: OnSpeechErrorFunc): number;
    /**
     * Entfernen der Ereignisfunktion fuer den Start der Sprachausgabe
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeSpeakStartEvent(aPluginName: string): number;
    /**
     * Entfernen der Ereignisfunktion fuer den Stop der Sprachausgabe
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeSpeakStopEvent(aPluginName: string): number;
    /**
     * Entfernen der Ereignisfunktion fuer die Fehler der Sprachausgabe
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeErrorEvent(aPluginName: string): number;
    /**
     * Entfernen aller angemeldeten Ereignisfunktionen
     *
     * @param {string} aPluginName - Name des Beobachter-Plugins
     *
     * @return {number} Fehlercode 0 oder -1
     */
    removeAllEvent(aPluginName: string): number;
    /**
     * Prueft, ob Audioausgabe oder Sprachsynthese eingeschaltet ist
     *
     * @return {boolean} True, Audioausgabe eingeschaltet, False die Sprachsynthese ist eingeschaltet
     */
    isAudio(): boolean;
    /**
     * Audioausgabe einschalten, dann werden Audiodateien fuer die Sprachausgabe abgespielt.
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setAudioOn(): number;
    /**
     * Audioausgabe abschalten, dann wird die Sprachsynthese fuer die Sprachausgabe benutzt.
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setAudioOff(): number;
    /**
     * Rueckgabe des globalen Audiokontext der App.
     *
     * @return {AudioContext} Gibt den globalen HTML5-Audiokontext zurueck
     */
    getAudioContext(): AudioContext;
    /**
     * Eintragen des Audioformats (AUDIO_MP3_FORMAT, AUDIO_WAV_FORMAT)
     *
     * @param aAudioFormat - Name des Formates ('de', 'en')
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setAudioFormat(aAudioFormat: string): number;
    /**
     * Rueckgabe des aktuell eingestellten Audioformats.
     *
     * @return {string} gibt MP3 oder WAV zurueck
     */
    getAudioFormat(): string;
    /**
     * Aktuelles Audiodateiverzeichnis eintragen.
     *
     * @param {string} aFilePath - Verzeichnis fuer die Audiodateien
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setAudioFilePath(aAudioFilePath: string): number;
    /**
     * Aktuelles Audiodateiverzeichnis zurueckgeben
     *
     * @return {string} Rueckgabe des Verzeichnisses
     */
    getAudioFilePath(): string;
    /**
     * Aktuellen Audiodateinamen ohne Formatangabe eintragen.
     *
     * @param {string} aFileName - Audiodateiname
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setAudioFileName(aAudioFileName: string): number;
    /**
     * Aktuellen Audiodateinamen zurueckgeben
     *
     * @return {string} Rueckgabe des Dateinamens
     */
    getAudioFileName(): string;
    /**
     * Aendern der Sprache
     *
     * @param {string} aLanguage - Kurzzeichen fuer Sprache ( de, en )
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setLanguage(aLanguage: string): number;
    /**
     * aktuell eingestellte Sprache zurueckgeben
     *
     * @returns {string} language - Kurzzeichenstring fuer Sprache ( de, en )
     */
    getLanguage(): string;
    /**
     * Eintragen des zu sprechenden Textes
     *
     * @param {string} aText - zu sprechenden Text
     *
     * @return {number} Fehlercode 0 oder -1
     */
    setSpeakText(aText: string): number;
    /**
     * Rueckgabe des aktuell zu sprechenden Textes
     *
     * @return {string} zu sprechender Text
     */
    getSpeakText(): string;
    /**
     * pruefen, ob Sprachausgabe gerade laeuft
     *
     * @return {boolean} True, Sprachausgabe aktiv, False sonst
     */
    isSpeakRunning(): boolean;
    /**
     * Startet die Sprachausgabe.
     *
     * @return {number} Fehlercode 0 oder -1
     */
    startSpeak(): number;
    /**
     * Stoppt die Sprachausgabe
     *
     * @return {number} Fehlercode 0 oder -1
     */
    stopSpeak(): number;
}
