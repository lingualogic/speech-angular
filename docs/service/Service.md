# Speech-Angular Services

Die Speech-Angular Services kapseln das Speech-Framework vollständig und definieren eine öffentliche Speech-Service API für eine Angular-App.


![Service-Architektur](Service-1.gif)


Die Speech-Services sind normale Angular-Services und integrieren sich nahtlos in die jeweilige Angular-App. Sie sind Service-Wrapperklassen für die gleichnamigen Speech-Framework Komponenten, wie in der oberen Grafik dargestellt.

In der folgenden Grafik werden die Vererbungsbeziehungen der Speech-Service Klassen zur BaseService-Klasse und die Enthaltensein-Beziehungen zu den Speech-Framework Komponenten dargestellt.

![Service-Architektur](Service-2.gif)


Folgende Speech-Services gibt es:


* **[ActionService](./action/ActionService.md):** erlaubt die Fernsteuerung der Web-App über Aktionen

* **[BotService](./bot/BotService.md):** erlaubt die Ausführung eines Dialogs über die [Dialog-Skriptsprache](./bot/DialogScript.md)

* **[IntentService](./intent/IntentService.md):** erlaubt die Intentanalyse eines Textes

* **[ListenService](./listen/ListenService.md):** erlaubt die Spracheingabe und Umwandlung in Text

* **[SpeakService](./speak/SpeakService.md):** erlaubt die Sprachausgabe eines kurzen Textes


Folgende Basis-Services gibt es:


* **[BaseService](./base/BaseService.md):** beinhaltet die gemeinsame Grundfunktionalität der Speech-Services

* **[NuanceService](./nuance/NuanceService.md):** erlaubt die Änderung der Nuance-Credentials


Folgende Module gibt es:


* **[NuanceModule](./../cloud/nuance/Nuance.md):** verwaltet die Nuance Cloud-Dienstanbindung

