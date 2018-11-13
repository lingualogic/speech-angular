"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Globale Export-Datei fuer das Speech Angular Framework (speech-angular NPM-Module)
 *
 * Version: 1.2
 * Datum:   19.10.2018
 * Autor:   SB
 *
 * Definiert das gesamte Speech Angular Framework-API:
 *
 *      base   - Basisklasse aller SpeechServices
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
var speech_service_version_1 = require("./speech-angular");
exports.SPEECHSERVICE_API_VERSION = speech_service_version_1.SPEECHSERVICE_API_VERSION;
var base_service_1 = require("./speech-angular");
exports.BaseService = base_service_1.BaseService;
// speak
var speak_service_const_1 = require("./speech-angular");
exports.SPEAK_DE_LANGUAGE = speak_service_const_1.SPEAK_DE_LANGUAGE;
exports.SPEAK_EN_LANGUAGE = speak_service_const_1.SPEAK_EN_LANGUAGE;
var speak_service_1 = require("./speech-angular");
exports.SpeakService = speak_service_1.SpeakService;
// listen
var listen_service_const_1 = require("./speech-angular");
exports.LISTEN_DE_LANGUAGE = listen_service_const_1.LISTEN_DE_LANGUAGE;
exports.LISTEN_EN_LANGUAGE = listen_service_const_1.LISTEN_EN_LANGUAGE;
var listen_service_1 = require("./speech-angular");
exports.ListenService = listen_service_1.ListenService;
var action_service_1 = require("./speech-angular");
exports.ActionService = action_service_1.ActionService;
var bot_service_1 = require("./speech-angular");
exports.BotService = bot_service_1.BotService;
//# sourceMappingURL=index.js.map
