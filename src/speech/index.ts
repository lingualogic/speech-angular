/**
 * Globale Export-Datei fuer das Speech Angular Framework (speech-angular NPM-Module)
 *
 * Version: 1.4
 * Datum:   16.12.2018
 * Autor:   SB
 *
 * Definiert das gesamte Speech Angular Framework-API:
 *
 *      nuance - Nuance-Modul fuer Initialisierung des Nuance-Cloudservice
 *      base   - Basisklasse aller SpeechServices
 *      speak  - SpeakService fuer Sprachausgabe
 *      listen - ListenService fuer Spracheingabe
 *      intent - IntentService fuer Sprachanalyse
 *      action - ActionService fuer Aktionsausfuehrung in der App
 *      bot    - BotService fuer Bot-Controller und Dialog
 *
 * @module speech/speak
 * @author SB
 */


// Global API


// const

export { SPEECHSERVICE_API_VERSION } from './const/speech-service-version';


// nuance

export { NuanceModuleOptionInterface } from './nuance/nuance-module-option.interface';
export { NuanceModule } from './nuance/nuance-module';


// base

export { BaseServiceOptionInterface } from './base/base-service-option.interface';
export { BaseService } from './base/base-service';


// speak

export { SPEAK_HTML5_TTS, SPEAK_NUANCE_TTS, SPEAK_DE_LANGUAGE, SPEAK_EN_LANGUAGE } from './speak/speak-service-const';
export { SpeakServiceOptionInterface } from './speak/speak-service-option.interface';
export { SpeakService } from './speak/speak-service';


// listen

export { LISTEN_HTML5_ASR, LISTEN_NUANCE_ASR, LISTEN_DE_LANGUAGE, LISTEN_EN_LANGUAGE } from './listen/listen-service-const';
export { ListenServiceOptionInterface } from './listen/listen-service-option.interface';
export { ListenService } from './listen/listen-service';


// intent

export { INTENT_DE_LANGUAGE, INTENT_EN_LANGUAGE } from './intent/intent-service-const';
export { IntentServiceDataInterface } from './intent/intent-service-data.interface';
export { IntentServiceOptionInterface } from './intent/intent-service-option.interface';
export { IntentService } from './intent/intent-service';


// action

export { ActionServiceDataInterface } from './action/action-service-data.interface';
export { ActionServiceOptionInterface } from './action/action-service-option.interface';
export { ActionService } from './action/action-service';


// bot

export { BotServiceActionInterface } from './bot/bot-service-action.interface';
export { BotServiceOptionInterface } from './bot/bot-service-option.interface';
export { BotService } from './bot/bot-service';
