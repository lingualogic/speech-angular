/**
 * Automatisch erzeugte globale index.ts Datei fuer Speech-Angular
 */


// const

export { SPEECHSERVICE_API_VERSION } from './const/speech-service-version';


// nuance-modul

export { NuanceModuleConfigInterface } from './nuance/nuance-module-config.interface';
export { NuanceModuleOptionInterface } from './nuance/nuance-module-option.interface';
export { NuanceModule } from './nuance/nuance-module';
export { NuanceService } from './nuance/nuance-service';


// amazon-modul

export { AmazonModuleConfigInterface } from './amazon/amazon-module-config.interface';
export { AmazonModuleOptionInterface } from './amazon/amazon-module-option.interface';
export { AmazonModule } from './amazon/amazon-module';
export { AmazonService } from './amazon/amazon-service';


// google-modul

export { GoogleModuleConfigInterface } from './google/google-module-config.interface';
export { GoogleModuleOptionInterface } from './google/google-module-option.interface';
export { GoogleModule } from './google/google-module';
export { GoogleService } from './google/google-service';


// microsoft-modul

export { MicrosoftModuleConfigInterface } from './microsoft/microsoft-module-config.interface';
export { MicrosoftModuleOptionInterface } from './microsoft/microsoft-module-option.interface';
export { MicrosoftModule } from './microsoft/microsoft-module';
export { MicrosoftService } from './microsoft/microsoft-service';


// rasa-modul

export { RasaModuleConfigInterface } from './rasa/rasa-module-config.interface';
export { RasaModuleOptionInterface } from './rasa/rasa-module-option.interface';
export { RasaModule } from './rasa/rasa-module';
export { RasaService } from './rasa/rasa-service';


// base-service

export { BaseServiceOptionInterface } from './base/base-service-option.interface';
export { BaseService } from './base/base-service';


// speak-service

// tslint:disable-next-line: max-line-length
export { SPEAK_HTML5_TTS, SPEAK_AMAZON_TTS, SPEAK_GOOGLE_TTS, SPEAK_MICROSOFT_TTS, SPEAK_NUANCE_TTS, SPEAK_DE_LANGUAGE, SPEAK_EN_LANGUAGE } from './speak/speak-service-const';
export { SpeakServiceOptionInterface } from './speak/speak-service-option.interface';
export { SpeakService } from './speak/speak-service';


// listen-service

// tslint:disable-next-line: max-line-length
export { LISTEN_HTML5_ASR, LISTEN_GOOGLE_ASR, LISTEN_MICROSOFT_ASR, LISTEN_NUANCE_ASR, LISTEN_DE_LANGUAGE, LISTEN_EN_LANGUAGE, LISTEN_COMMAND_MODE, LISTEN_DICTATE_MODE } from './listen/listen-service-const';
export { ListenServiceOptionInterface } from './listen/listen-service-option.interface';
export { ListenService } from './listen/listen-service';


// intent-service

// tslint:disable-next-line: max-line-length
export { INTENT_GOOGLE_NLU, INTENT_MICROSOFT_NLU, INTENT_RASA_NLU, INTENT_NUANCE_NLU, INTENT_DE_LANGUAGE, INTENT_EN_LANGUAGE } from './intent/intent-service-const';
export { IntentServiceDataInterface } from './intent/intent-service-data.interface';
export { IntentServiceOptionInterface } from './intent/intent-service-option.interface';
export { IntentService } from './intent/intent-service';


// action-service

export { ActionServiceDataInterface } from './action/action-service-data.interface';
export { ActionServiceOptionInterface } from './action/action-service-option.interface';
export { ActionService } from './action/action-service';


// dialog-service

export { DialogServiceActionInterface } from './dialog/dialog-service-action.interface';
export { DialogServiceSpeakInterface } from './dialog/dialog-service-speak.interface';
export { DialogServiceOptionInterface } from './dialog/dialog-service-option.interface';
export { DialogServiceDataInterface } from './dialog/dialog-service-data.interface';
export { DialogService } from './dialog/dialog-service';


// bot-service

export { BotServiceActionInterface } from './bot/bot-service-action.interface';
export { BotServiceOptionInterface } from './bot/bot-service-option.interface';
// tslint:disable-next-line: max-line-length
export { BotServiceDataInterface, BotServiceStateInterface, BotServiceIntentInterface, BotServiceCommandInterface, BotServiceTextInterface } from './bot/bot-service-data.interface';
export { BotService } from './bot/bot-service';


