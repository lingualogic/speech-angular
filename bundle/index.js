"use strict";
/**
 * Globale Export-Datei fuer das Speech Angular Framework (speech-angular NPM-Module)
 *
 * Version: 1.0
 * Datum:   15.09.2018
 * Autor:   SB
 *
 * Definiert das gesamte Speech Angular Framework-API:
 *
 *      speak  - SpeakService fuer Sprachausgabe
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
// speak
var speak_service_const_1 = require("./speech-angular");
exports.SPEAK_DE_LANGUAGE = speak_service_const_1.SPEAK_DE_LANGUAGE;
exports.SPEAK_EN_LANGUAGE = speak_service_const_1.SPEAK_EN_LANGUAGE;
var speak_service_1 = require("./speech-angular");
exports.SpeakService = speak_service_1.SpeakService;
var action_service_1 = require("./speech-angular");
exports.ActionService = action_service_1.ActionService;
var bot_service_1 = require("./speech-angular");
exports.BotService = bot_service_1.BotService;
//# sourceMappingURL=index.js.map
