# MuanceModule

Das NuanceModule dient zur Initialisierung des NuancePorts zur Verbindung mit dem Nuance Cloud-Server.
Es ist eine Singleton in Form einer statischen Klasse und wird in main.ts eingegbaut.
Hier ist der gesamte Quelltext von NuanceModule untergebracht.


## NuanceModule API

Das NuanceModule API besteht aus folgenden Dateien:

* **nuance-module-config.interface.ts:** Konfigurationsparameter zum Unkonfigurieren von NuanceModule
* **nuance-module-option.interface.ts:** Optionale Parameter zur Initialisierung von NuanceModule
* **nuance-module.ts:** NuanceModule API und Wrapper für die speech-framework.Nuance Komponente
* **nuance-service.ts:** NuanceService zum dynamischen Setzen der Nuance-Credentials
