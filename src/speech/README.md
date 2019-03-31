# Speech-Angular Quellcode

**Version:** **0.5.7**

Der Quellcode von Speech-Angular ist vollständig im Verzeichnis src/speech untergebracht, und baut auf dem Speech-Framework auf. Es sollten keine direkten Zugriffe auf das Speech-Framework genutzt werden, da sich das Speech-Framework API noch stark ändern kann. Alle Zugriffe sollten nur über die Services des Speech-Angular SDK im eigenen Code erfolgen.

Das Speech-Angular SDK besteht aus folgenden Services:

* **BaseService**: ist die Basisklasse für alle anderen Speech-Services

* **SpeakService**: dient zur Sprachausgabe mittels Sprachsyntese (Text to Speech)

* **ListenService**: dient zur Spracheingabe mittels Spracherkennung (Speech to Text)

* **IntentService**: dient zur Bedeutungsermittlung mittels Sprachanalyse (Natural Language Understandig)

* **ActionService**: dient zur Weitergabe von Aktionen aus dem Bot

* **DialogService**: dient zum Abspielen von Dialogen

* **BotService**: dient zum Abspielen von Dialogen für die Sprachausgabe und Aktionen

* **NuanceService**: dient zum eintragen von Nuance-Credentials

Jeder Service hat sein eigenes Verzeichnis, in dem der Code des Service untergebracht ist.


Zusätzlich gibt des noch Module, die für die Initialsierung von optionalen Subsystemen verantwortlich sind:

* **NuanceModule**: dient zur Initialisierung des Nuance Cloud-Service
