/**
 * Funktionstypen fuer Speak
 *
 * API-Version: 1.0
 * Datum:   03.09.2018
 *
 * Letzte Aenderung: 05.09.2018
 * Status: gruen
 *
 * @module speak
 * @author SB
 */
/** Definiert die Start Funktion fuer den Beginn einer Sprachausgabe */
export declare type SpeakStartFunc = () => number;
/** Definiert die Stop Funktion fuer das Ende einer Speachausgabe */
export declare type SpeakStopFunc = () => number;
/** Definiert Ereignisfunktion fuer gestartete Sprachausgabe */
export declare type OnSpeakStartFunc = () => number;
/** Definiert Ereignisfunktion fuer beendete Sprachausgabe */
export declare type OnSpeakStopFunc = () => number;
