/**
 * Globale Export-Datei fuer Speech-Framework (Speech NPM-Module)
 *
 * Version: 1.4
 * Datum:   16.12.2018
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
 *      intent - Intent API fuer Dialogmanager
 *      bot    - Bot API fuer Bot-Controller
 *      nuance  - Hauptprogramm NUance fuer die Initialisierung des Nuance-Clouddienstes
 *      speech - Hauptprogramm von Speech-Framework fuer die Initialisierung aller Builder
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
export { SPEAK_TYPE_NAME, SPEAK_COMPONENT_NAME, SPEAK_DE_LANGUAGE, SPEAK_EN_LANGUAGE, SPEAK_HTML5_TTS, SPEAK_NUANCE_TTS } from './src/speak/speak-const';
export { SpeakOptionInterface } from './src/speak/speak-option.interface';
export { SpeakInterface } from './src/speak/speak.interface';
export { SpeakFactory } from './src/speak/speak-factory';
export { LISTEN_TYPE_NAME, LISTEN_COMPONENT_NAME, LISTEN_DE_LANGUAGE, LISTEN_EN_LANGUAGE, LISTEN_HTML5_ASR, LISTEN_NUANCE_ASR } from './src/listen/listen-const';
export { ListenOptionInterface } from './src/listen/listen-option.interface';
export { ListenInterface } from './src/listen/listen.interface';
export { ListenFactory } from './src/listen/listen-factory';
export { INTENT_TYPE_NAME, INTENT_COMPONENT_NAME, INTENT_DE_LANGUAGE, INTENT_EN_LANGUAGE, INTENT_HTML5_NLU, INTENT_NUANCE_NLU } from './src/intent/intent-const';
export { IntentDataInterface } from './src/intent/intent-data.interface';
export { IntentOptionInterface } from './src/intent/intent-option.interface';
export { IntentInterface } from './src/intent/intent.interface';
export { IntentFactory } from './src/intent/intent-factory';
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
export { NuanceOptionInterface } from './src/cloud/nuance/nuance-option.interface';
export { Nuance } from './src/cloud/nuance/nuance';
export { SpeechMain } from './src/speech-main';
