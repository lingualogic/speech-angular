"use strict";
/**
 * Globale Export-Datei fuer Speech-Framework (Speech NPM-Module)
 *
 * Version: 1.2
 * Datum:   18.10.2018
 * Autor:   SB
 *
 * Definiert das gesamte Speech-Framework-API:
 *
 *      base   - Abstraktes Basis API fuer alle Komponenten
 *      action - Action API fuer Actionverarbeitung
 *      audio  - AudioPlayer API zum Abspielen von Audiodateien
 *      speak  - Speak API fuer Sprachausgabe
 *      listen - Listen API fuer Spracheingabe
 *      dialog - Dialog API fuer Dialogmanager
 *      bot    - Bot API fuer Bot-Controller
 *      speech - Hauptprogramm von Speech-Framework
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Global API
// const
var speech_version_1 = require("./speech.bundle");
exports.SPEECH_API_VERSION = speech_version_1.SPEECH_API_VERSION;
// base
var base_const_1 = require("./speech.bundle");
exports.BASE_TYPE_NAME = base_const_1.BASE_TYPE_NAME;
exports.BASE_COMPONENT_NAME = base_const_1.BASE_COMPONENT_NAME;
// action
var action_const_1 = require("./speech.bundle");
exports.ACTION_TYPE_NAME = action_const_1.ACTION_TYPE_NAME;
exports.ACTION_COMPONENT_NAME = action_const_1.ACTION_COMPONENT_NAME;
var action_factory_1 = require("./speech.bundle");
exports.ActionFactory = action_factory_1.ActionFactory;
// audio
var audio_const_1 = require("./speech.bundle");
exports.AUDIO_PLUGIN_NAME = audio_const_1.AUDIO_PLUGIN_NAME;
var audio_factory_1 = require("./speech.bundle");
exports.AudioFactory = audio_factory_1.AudioFactory;
// speak
var speak_const_1 = require("./speech.bundle");
exports.SPEAK_TYPE_NAME = speak_const_1.SPEAK_TYPE_NAME;
exports.SPEAK_COMPONENT_NAME = speak_const_1.SPEAK_COMPONENT_NAME;
exports.SPEAK_DE_LANGUAGE = speak_const_1.SPEAK_DE_LANGUAGE;
exports.SPEAK_EN_LANGUAGE = speak_const_1.SPEAK_EN_LANGUAGE;
var speak_factory_1 = require("./speech.bundle");
exports.SpeakFactory = speak_factory_1.SpeakFactory;
// listen
var listen_const_1 = require("./speech.bundle");
exports.LISTEN_TYPE_NAME = listen_const_1.LISTEN_TYPE_NAME;
exports.LISTEN_COMPONENT_NAME = listen_const_1.LISTEN_COMPONENT_NAME;
exports.LISTEN_DE_LANGUAGE = listen_const_1.LISTEN_DE_LANGUAGE;
exports.LISTEN_EN_LANGUAGE = listen_const_1.LISTEN_EN_LANGUAGE;
var listen_factory_1 = require("./speech.bundle");
exports.ListenFactory = listen_factory_1.ListenFactory;
// dialog
var dialog_const_1 = require("./speech.bundle");
exports.DIALOG_TYPE_NAME = dialog_const_1.DIALOG_TYPE_NAME;
exports.DIALOG_COMPONENT_NAME = dialog_const_1.DIALOG_COMPONENT_NAME;
exports.DIALOG_MAIN_NAME = dialog_const_1.DIALOG_MAIN_NAME;
exports.DIALOG_ROOTSTATE_NAME = dialog_const_1.DIALOG_ROOTSTATE_NAME;
var dialog_factory_1 = require("./speech.bundle");
exports.DialogFactory = dialog_factory_1.DialogFactory;
// bot
var bot_const_1 = require("./speech.bundle");
exports.BOT_TYPE_NAME = bot_const_1.BOT_TYPE_NAME;
exports.BOT_COMPONENT_NAME = bot_const_1.BOT_COMPONENT_NAME;
var bot_factory_1 = require("./speech.bundle");
exports.BotFactory = bot_factory_1.BotFactory;
// speech
var speech_main_1 = require("./speech.bundle");
exports.SpeechMain = speech_main_1.SpeechMain;
//# sourceMappingURL=index.js.map