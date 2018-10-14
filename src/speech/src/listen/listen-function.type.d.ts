/**
 * Funktionstypen fuer Listen
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
/** Definiert die Start Funktion fuer den Beginn einer Sprachausgabe */
export declare type ListenStartFunc = () => number;
/** Definiert die Stop Funktion fuer das Ende einer Speachausgabe */
export declare type ListenStopFunc = () => number;
export declare type OnListenStartFunc = () => number;
export declare type OnListenStopFunc = () => number;
export declare type OnListenResultFunc = (aText: string) => number;
