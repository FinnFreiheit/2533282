# Abschlussprojekt Web-Engineering ITA19

Das Prjekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2 erstellt.
Zur Installation von Angular siehe offizielle Dokumentation: https://angular.io/guide/setup-local
## Development server

Führe den Befehl `ng serve` im Projekt Ordner aus. Navigiere zu `http://localhost:4200/`. 


## Wetter API 
Die aktuellen Wetter Daten erhalte ich über `https://weatherstack.com`. In der Kostenfreien 
Version können nur die Aktuellen Daten abgefragt werden. Eine Wettervorhersage war nicht möglich.
Desweiteren wird in der Wetterkomponente die Geolocation abgefragt. Somit wird das Wetter für 
den Aktuellen Standort ausgegeben. 

## Aktie API 
Die Aktien Informationen erhalte ich über `financialmodelingprep.com`
Die API stellt mir ein JSON Objekt mit den letzten 100 Historischen Kursdaten zur 
verfügung. Die Daten werden mithilfe von Chart.js visualisiert. 

## Wikipedia API
Einen kurzen Artikel über das gesuchte Schlagwort in der Wikipediakomponente erhalte ich
über die Wikipedia API `de.wikipedia.org`. Die Abfrage muss über einem Proxy 
stattfinden. Dafür verwende ich `cors-anywhere.herokuapp.com`.

## Erfahrungsbericht
Die Internet seite ist mein erstes Angular Projekt. Der Einstieg in Angular viel am
anfang schwer. Das Framework wird regelmäßig aktualisert, somit sind viele quellen aus dem
internett veraltet, das erschwert die Fehlersuche. 
Die Strukturierung der Internetseite in viele einzel Komponenten hat die Arbeit 
erleichtert. Man behält leichter überblick und die Datein bleiben überschaubar. 
Ich würde meine nächste Seite erneut mit Angular erstellen. 
