"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// Global API
// const
var speech_service_version_1 = require("./speech-angular");
exports.SPEECHSERVICE_API_VERSION = speech_service_version_1.SPEECHSERVICE_API_VERSION;
// nuance
var nuance_module_1 = require("./speech-angular");
exports.NuanceModule = nuance_module_1.NuanceModule;
var base_service_1 = require("./speech-angular");
exports.BaseService = base_service_1.BaseService;
// speak
var speak_service_const_1 = require("./speech-angular");
exports.SPEAK_HTML5_TTS = speak_service_const_1.SPEAK_HTML5_TTS;
exports.SPEAK_NUANCE_TTS = speak_service_const_1.SPEAK_NUANCE_TTS;
exports.SPEAK_DE_LANGUAGE = speak_service_const_1.SPEAK_DE_LANGUAGE;
exports.SPEAK_EN_LANGUAGE = speak_service_const_1.SPEAK_EN_LANGUAGE;
var speak_service_1 = require("./speech-angular");
exports.SpeakService = speak_service_1.SpeakService;
// listen
var listen_service_const_1 = require("./speech-angular");
exports.LISTEN_HTML5_ASR = listen_service_const_1.LISTEN_HTML5_ASR;
exports.LISTEN_NUANCE_ASR = listen_service_const_1.LISTEN_NUANCE_ASR;
exports.LISTEN_DE_LANGUAGE = listen_service_const_1.LISTEN_DE_LANGUAGE;
exports.LISTEN_EN_LANGUAGE = listen_service_const_1.LISTEN_EN_LANGUAGE;
var listen_service_1 = require("./speech-angular");
exports.ListenService = listen_service_1.ListenService;
// intent
var intent_service_const_1 = require("./speech-angular");
exports.INTENT_DE_LANGUAGE = intent_service_const_1.INTENT_DE_LANGUAGE;
exports.INTENT_EN_LANGUAGE = intent_service_const_1.INTENT_EN_LANGUAGE;
var intent_service_1 = require("./speech-angular");
exports.IntentService = intent_service_1.IntentService;
var action_service_1 = require("./speech-angular");
exports.ActionService = action_service_1.ActionService;
var bot_service_1 = require("./speech-angular");
exports.BotService = bot_service_1.BotService;
//# sourceMappingURL=index.js.map