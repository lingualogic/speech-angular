/**
 * Globale Export-Datei fuer Speech-Framework (Speech NPM-Module)
 *
 * Version: 1.0
 * Datum:   14.09.2018
 * Autor:   SB
 *
 * Definiert das gesamte Speech-Framework-API:
 *
 *      action - Action API fuer Actionverarbeitung
 *      audio  - AudioPlayer API zum Abspielen von Audiodateien
 *      speak  - Speak API fuer Sprachausgabe
 *      listen - Listen API fuer Spracheingabe
 *      dialog - Dialog API fuer Dialogmanager
 *      bot    - Bot API fuer Bot-Controller
 */
export { SPEECH_API_VERSION } from './src/const/speech-version';
export { ACTION_TYPE_NAME, ACTION_COMPONENT_NAME } from './src/action/action-const';
export { ActionInterface, ActionOptionInterface, ActionDataInterface } from './src/action/action.interface';
export { ActionFactory } from './src/action/action-factory';
export { AUDIO_PLUGIN_NAME } from './src/audio/audio-const';
export { AudioInterface } from './src/audio/audio.interface';
export { AudioFactory } from './src/audio/audio-factory';
export { SPEAK_TYPE_NAME, SPEAK_COMPONENT_NAME, SPEAK_DE_LANGUAGE, SPEAK_EN_LANGUAGE } from './src/speak/speak-const';
export { SpeakInterface, SpeakOptionInterface } from './src/speak/speak.interface';
export { SpeakFactory } from './src/speak/speak-factory';
export { LISTEN_TYPE_NAME, LISTEN_COMPONENT_NAME } from './src/listen/listen-const';
export { ListenInterface, ListenOptionInterface } from './src/listen/listen.interface';
export { ListenFactory } from './src/listen/listen-factory';
export { DIALOG_TYPE_NAME, DIALOG_COMPONENT_NAME, DIALOG_MAIN_NAME, DIALOG_ROOTSTATE_NAME } from './src/dialog/dialog-const';
export { DialogInterface, DialogOptionInterface, DialogActionInterface, DialogSpeakInterface } from './src/dialog/dialog.interface';
export { DialogFactory } from './src/dialog/dialog-factory';
export { BOT_TYPE_NAME, BOT_COMPONENT_NAME } from './src/bot/bot-const';
export { BotInterface, BotOptionInterface } from './src/bot/bot.interface';
export { BotFactory } from './src/bot/bot-factory';
