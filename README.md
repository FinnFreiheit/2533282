# Abschlussprojekt Web-Engineering ITA19

Das Prjekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2 erstellt.
Zur Installation von Angular siehe offizielle Dokumentation: https://angular.io/guide/setup-local
## Development server

Führe den Befehl `ng serve` im Projekt Ordner aus. Navigiere zu `http://localhost:4200/`. 


## Wetter Komponente
Die aktuellen Wetter Daten werden von `https://weatherstack.com` zur Verfügung gestellt. In der Kostenfreien 
Version können nur die aktuellen Daten abgefragt werden. Eine Wettervorhersage war nicht möglich.
Desweiteren wird in der Wetterkomponente die Geolocation abgefragt. Somit wird das Wetter für 
den Aktuellen Standort ausgegeben. 
Die Wetterseite sieht folgendermaßen aus.

![WetterStartseite] [Wetter Startseite]

Bei einer efolgreichen Eingabe, werden die Wetterdaten und das Wetterbild
aktualisiert. 

![WetterSuche][WetterSuche]

Bei einer Fehlerhaften eingabe erfolgt eine Warnmeldung, der benutzer kann die Eingabe widerhohlen. Die Fehlerbehandlung in der
Wetterkomponente verlief am reibungslosesten, dar die Wetter API ein `error JSON-Objekt` übergibt.

![WetterFehler][WetterFehler]

Die Wetterkomponente wird zwischen der Header und Footerkomponente eingebunden. Eine Verlinkung auf die Wetterseite befindet sich in
der NAV-Bar unter dem Schlagwort Wetter.

## Aktien Komponente
Die Aktien Informationen erhalte ich über `financialmodelingprep.com`
Die API stellt mir ein JSON Objekt mit den letzten 100 Historischen Kursdaten zur 
verfügung. Die Daten werden mithilfe von Chart.js visualisiert. 

Die Aktienstartseite besteht aus einer Sucheingabe und drei voreingestellten Aktiencharts. Von den Firmen Apple, Google und Facebook
werden die Kursdaten des letzten Jahres angezeigt. Das Angularprojekt besitzt die Komponenten Apple, Google und Facebook im Ordner aktien.
Die Komponenten werden durch ` routing ` in der Aktien Startseite aufgerufen. Diese Lösung ist nicht optimal. In den Komponeten doppelt sich viel Code.
Für nachfolgende Projekte würde ich das ` Array Datasets ` erweitern. Aus Zeitgründen habe ich darauf verzichtet es im nachhinein zu ändern. 


![AktienStart][aktienStart]


Durch Klicken auf einen der drei Charts, wird der Chart auf maximaler Fenstergröße angezeigt.

![aktienGroß][aktienGross]

Nach erfolgreicher eingabe eines Aktienkürzels wird der Kursverlauf des letzten Jahres angezeigt. Die Implementierung von Chart.js 
in Angular war mit Herausforderungen verbunden. Die Dokumentation ist nicht sehr detailliert, und bezog sich so gut wie immer auf `JavaScript`.
Die Charteinstellungen wurden in `JSON-Objekten` vorgenommen, jedoch war nicht auf anhieb klar welche ` Key-Value-Paare` angepasst werden müssen.
Angepasst wurden die Farbe der Charts, Messpunkte und Gitter wurden entfernt und die Labels wurden reduziert. 

![AktienSuche][aktienSuche]

Die Chart Komponente beinhaltet auch eine Fehlerbehebung. Die Umsetzung der Fehlerbehebung ist ausreichend, jedoch würde ich für folgende 
Projekte einen globalen `errorHandler` implemetieren. 

![AktienFehler][aktienFehler]



## Wikipedia API
Einen kurzen Artikel über das gesuchte Schlagwort in der Wikipediakomponente erhalte ich
über die Wikipedia API `de.wikipedia.org`. Die Abfrage muss über einem Proxy 
stattfinden. Dafür verwende ich `cors-anywhere.herokuapp.com`. 
Die Wikipedia Startseite sieht folgendermaßen aus. 

![WikiStart][wikiStart]

Nach eingabe einer 

## Erfahrungsbericht
Die Internet seite ist mein erstes Angular Projekt. Der Einstieg in Angular viel am
anfang schwer. Das Framework wird regelmäßig aktualisert, somit sind viele quellen aus dem
internett veraltet, das erschwert die Fehlersuche. 
Die Strukturierung der Internetseite in viele einzel Komponenten hat die Arbeit 
erleichtert. Man behält leichter überblick und die Datein bleiben überschaubar. 
Ich würde meine nächste Seite erneut mit Angular erstellen. 

[Wetter Startseite]:img/wetter.png  "Wetter Startseite"
[WetterSuche]:img/wetterSuche.png "Wetter Suche"
[WetterFehler]:img/wetterFehler.png "Wetter Fehler"
[aktienStart]:img/aktienStart.png "Aktien Startseite"
[aktienSuche]:img/aktienSuche.png "Aktien Suche"
[aktienFehler]:img/aktienFehler.png " Aktien Fehler"
[aktienGross]:img/aktienStandartGroß.png
[wikiStart]:img/wiki.png
