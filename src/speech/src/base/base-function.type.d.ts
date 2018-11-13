/**
 * Funktionstypen fuer Base
 *
 * API-Version: 1.0
 * Datum: 11.10.2018
 *
 * Letzte Aenderung: 11.10.2018
 * Status: gruen
 *
 * @module base
 * @author SB
 */
/** Definiert die Start Funktion */
export declare type BaseStartFunc = () => number;
/** Definiert die Stop Funktion */
export declare type BaseStopFunc = () => number;
/** Definiert Ereignisfunktion fuer gestartete Komponente */
export declare type OnBaseStartFunc = () => number;
/** Definiert Ereignisfunktion fuer beendete Komponente */
export declare type OnBaseStopFunc = () => number;
