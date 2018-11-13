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
export { SPEECH_API_VERSION } from './src/const/speech-version';
export { BASE_TYPE_NAME, BASE_COMPONENT_NAME } from './src/base/base-const';
export { BaseOptionInterface } from './src/base/base-option.interface';
export { BaseInterface } from './src/base/base.interface';
export { ACTION_TYPE_NAME, ACTION_COMPONENT_NAME } from './src/action/action-const';
export { ActionDataInterface } from './src/action/action-data.interface';
export { ActionOptionInterface } from './src/action/action-option.interface';
export { ActionInterface } from './src/action/action.interface';
export { ActionFactory } from './src/action/action-factory';
export { AUDIO_PLUGIN_NAME } from './src/audio/audio-const';
export { AudioInterface } from './src/audio/audio.interface';
export { AudioFactory } from './src/audio/audio-factory';
export { SPEAK_TYPE_NAME, SPEAK_COMPONENT_NAME, SPEAK_DE_LANGUAGE, SPEAK_EN_LANGUAGE } from './src/speak/speak-const';
export { SpeakOptionInterface } from './src/speak/speak-option.interface';
export { SpeakInterface } from './src/speak/speak.interface';
export { SpeakFactory } from './src/speak/speak-factory';
export { LISTEN_TYPE_NAME, LISTEN_COMPONENT_NAME, LISTEN_DE_LANGUAGE, LISTEN_EN_LANGUAGE } from './src/listen/listen-const';
export { ListenOptionInterface } from './src/listen/listen-option.interface';
export { ListenInterface } from './src/listen/listen.interface';
export { ListenFactory } from './src/listen/listen-factory';
export { DIALOG_TYPE_NAME, DIALOG_COMPONENT_NAME, DIALOG_MAIN_NAME, DIALOG_ROOTSTATE_NAME } from './src/dialog/dialog-const';
export { DialogActionInterface } from './src/dialog/dialog-action.interface';
export { DialogSpeakInterface } from './src/dialog/dialog-speak.interface';
export { DialogOptionInterface } from './src/dialog/dialog-option.interface';
export { DialogInterface } from './src/dialog/dialog.interface';
export { DialogFactory } from './src/dialog/dialog-factory';
export { BOT_TYPE_NAME, BOT_COMPONENT_NAME } from './src/bot/bot-const';
export { BotOptionInterface } from './src/bot/bot-option.interface';
export { BotInterface } from './src/bot/bot.interface';
export { BotFactory } from './src/bot/bot-factory';
export { SpeechMain } from './src/speech-main';
