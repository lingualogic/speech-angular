# Speech-Angular Quellcode

**Version:** **0.5.2**

Der Quellcode von Speech-Angular ist vollständig im Verzeichnis src/speech untergebracht, und besteht aus zwei großen Teilen. Der erste Teil ist das Speech-Framework, welches den gesamten Code für die Speech-Funktionalität beinhaltet. Der zweite Teil ist das Speech-Angular SDK, welches das Speech-Framework in Angular einbettet.

Der Speech-Framework Code ist in speech.bundle.js, speech.js und speech.d.ts untergebracht. Auf ihn wird über das Speech-Angular SDK zugegriffen. Es sollten keine direkten Zugriffe auf das Speech-Framework genutzt werden, da sich das Speech-Framework API noch stark ändern kann. Alle Zugriffe sollten nur über die Services des Speech-Angular SDK im eigenen Code erfolgen.


Das Speech-Angular SDK besteht aus folgenden Services:

* **BaseService**: ist die Basisklasse für alle anderen Speech-Services

* **SpeakService**: dient zur Sprachausgabe mittels Sprachsyntese (Text to Speech)

* **ListenService**: dient zur Spracheingabe mittels Spracherkennung (Speech to Text)

* **ActionService**: dient zur Weitergabe von Aktionen aus dem Bot

* **BotService**: dient zum Abspielen von Dialogen für die Sprachausgabe und Aktionen

Jeder Service hat sein eigenes Verzeichnis, in dem der Code des Service untergebracht ist.
