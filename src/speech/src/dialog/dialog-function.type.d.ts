/**
 * Funktionstypen fuer Dialog
 *
 * API-Version: 1.0
 * Datum:   07.09.2018
 *
 * Letzte Aenderung: 07.09.2018
 * Status: gelb
 *
 * @module dialog
 * @author SB
 */
import { DialogActionInterface } from './dialog-action.interface';
import { DialogSpeakInterface } from './dialog-speak.interface';
/** Definiert die StartAction Funktion fuer eine Dialogaktion */
export declare type DialogStartActionFunc = (aActionObject: DialogActionInterface) => void;
/** Definiert die StopAction Funktion fuer eine Dialogaktion */
export declare type DialogStopActionFunc = () => void;
export declare type DialogWriteFileDataFunc = (aFileData: string) => number;
export declare type OnDialogParseFunc = () => number;
export declare type OnDialogSetFunc = (aDialogName: string) => number;
export declare type OnDialogStartFunc = (aResult: number) => number;
export declare type OnDialogStopFunc = () => number;
export declare type OnDialogStateSetFunc = (aState: string) => number;
export declare type OnDialogActionFunc = (aAction: DialogActionInterface) => number;
export declare type OnDialogActionStopFunc = () => number;
export declare type OnDialogSpeakFunc = (aSpeak: DialogSpeakInterface) => number;
export declare type OnDialogSpeakStartFunc = () => number;
export declare type OnDialogSpeakStopFunc = () => number;
