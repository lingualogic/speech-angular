/**
 * Funktionstypen fuer Intent
 *
 * API-Version: 1.1
 * Datum: 03.12.2018
 *
 * Letzte Aenderung: 03.12.2018
 * Status: rot
 *
 * @module intent
 * @author SB
 */
import { IntentDataInterface } from './intent-data.interface';
export declare type OnListenResultFunc = (aText: string) => number;
export declare type OnIntentResultFunc = (aIntentData: IntentDataInterface) => number;
