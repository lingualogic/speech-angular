/**
 * Listen Interface
 *
 * API-Version: 1.0
 * Datum:       01.07.2018
 *
 * @module listen
 * @author SB
 */
import { OnSpeechErrorFunc } from '../interface/speech-function.interface';
import { OnListenStartFunc, OnListenStopFunc, OnListenResultFunc } from './listen-function.type';
export { OnListenStartFunc, OnListenStopFunc, OnListenResultFunc } from './listen-function.type';
export { ListenOptionInterface } from './listen-option.interface';
/** @export
 * Listen Schnittstelle
 */
export interface ListenInterface {
    getType(): string;
    getName(): string;
    getVersion(): string;
    setErrorOutputOn(): void;
    setErrorOutputOff(): void;
    addListenStartEvent(aPluginName: string, aEventFunc: OnListenStartFunc): number;
    addListenStopEvent(aPluginName: string, aEventFunc: OnListenStopFunc): number;
    addListenResultEvent(aPluginName: string, aEventFunc: OnListenResultFunc): number;
    addErrorEvent(aPluginName: string, aEventFunc: OnSpeechErrorFunc): number;
    removeListenStartEvent(aPluginName: string): number;
    removeListenStopEvent(aPluginName: string): number;
    removeListenResultEvent(aPluginName: string): number;
    removeErrorEvent(aPluginName: string): number;
    removeAllEvent(aPluginName: string): number;
    isListenRunning(): boolean;
    startListen(): number;
    stopListen(): number;
}
