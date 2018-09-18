/**
 * Funktionstypen fuer Action
 *
 * API-Version: 1.0
 * Datum:   30.08.2018
 *
 * Letzte Aenderung: 10.09.2018
 * Status: gelb
 *
 * @module action
 * @author SB
 */
import { ActionDataInterface } from './action-data.interface';
/** Definiert die StartAction Funktion fuer eine Aktion */
export declare type ActionFunc = (aAction: ActionDataInterface) => number;
/** Definiert die StartAction Funktion fuer eine Aktion */
export declare type ActionStartFunc = (aAction: ActionDataInterface) => number;
/** Definiert die StopAction Funktion fuer eine Aktion */
export declare type ActionStopFunc = () => number;
/** Definiert Ereignisfunktion fuer gestartete Aktion */
export declare type OnActionStartFunc = () => number;
/** Definiert Ereignisfunktion fuer beendete Aktion */
export declare type OnActionStopFunc = () => number;
