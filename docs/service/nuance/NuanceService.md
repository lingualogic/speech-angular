# NuanceService

Der NuanceService dient zur dynamischen Änderung der Nuance-Credentials. damit wird es möglich Nuance-Credentials über ein Formular einzugeben und dann erst einzutragen.

## NuanceService-API

Der Nuance-Service hat nur eine Funktion:

	const result = nuanceService.setCredentials( appId, appKey, nluTag ): number;
	
mit der die AppId, der AppKey und der NluTag jeweils als Strings übergeben und als neue Nuance-Credentials im NuanceModule eingetragen werden. 


