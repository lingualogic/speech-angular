/**
 * Globale Export-Datei fuer das Speech Angular Framework (speech-angular NPM-Module)
 *
 * Version: 1.1
 * Datum:   10.10.2018
 * Autor:   SB
 *
 * Definiert das gesamte Speech Angular Framework-API:
 *
 *      speak  - SpeakService fuer Sprachausgabe
 *      listen - ListenService fuer Spracheingabe
 *      action - ActionService fuer Aktionsausfuehrung in der App
 *      bot    - BotService fuer Bot-Controller und Dialog
 *
 * @module speech/speak
 * @author SB
 */


// Global API


// const

export { SPEECHSERVICE_API_VERSION } from './const/speech-service-version';


// speak

export { SPEAK_DE_LANGUAGE, SPEAK_EN_LANGUAGE } from './speak/speak-service-const';
export { SpeakServiceOptionInterface } from './speak/speak-service-option.interface';
export { SpeakService } from './speak/speak-service';


// listen

export { LISTEN_DE_LANGUAGE, LISTEN_EN_LANGUAGE } from './listen/listen-service-const';
export { ListenServiceOptionInterface } from './listen/listen-service-option.interface';
export { ListenService } from './listen/listen-service';


// action

export { ActionServiceDataInterface } from './action/action-service-data.interface';
export { ActionServiceOptionInterface } from './action/action-service-option.interface';
export { ActionService } from './action/action-service';


// bot

export { BotServiceActionInterface } from './bot/bot-service-action.interface';
export { BotServiceOptionInterface } from './bot/bot-service-option.interface';
export { BotService } from './bot/bot-service';
