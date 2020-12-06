# Abschlussprojekt Web-Engineering ITA19

Das Prjekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2 erstellt.
Zur Installation von Angular verweise ich auf die offizielle Dokumentation: https://angular.io/guide/setup-local.

Als Frontend-CSS-Framework benutze ich [Bootstrap](https://getbootstrap.com)

## Development server
Eine Arbeitskopie des Projektes kann mithilfe des befehls `git clone https://github.com/FinnFreiheit/WebEngProjekt.git` erzeugt werden.
Alternativ kann das Projekt auch als `zip` heruntergeladen werden. 
Im Projektverzeichnis muss über die Konsole  `ng serve` ausgeführt werden. Im anschluss kann die Seite im Browser unter `http://localhost:4200/`
eingesehen werden. 

## header Komponente

Die Header Komponente besteht aus einer Navbar, in der alle anderen Seiten verlinkt sind. Die Header und Footer Komponenten werden in
der `app.component.html` direkt eingebunden und werden somit immer geladen. Alle anderen Komponenten werden über das `routing` bei bedarf 
unter den Header eingebunden. 
Das Angular Projekt besteht aus folgenden Komponenten.

- aktien
    - apple
    - facebook
    - google
- chart
- cover
- footer
- header
- weather-comp
- wiki
   

## Wetter Komponente
Die aktuellen Wetterdaten werden von `https://weatherstack.com` zur Verfügung gestellt. In der kostenfreien 
Version können nur die aktuellen Wetterdaten abgefragt werden. Eine Wettervorhersage war nicht möglich.
Desweiteren wird in der Wetterkomponente die Geolocation abgefragt. Somit wird das Wetter für 
den aktuellen Standort ausgegeben. 
Die Wetterseite sieht folgendermaßen aus.

![WetterStartseite] [Wetter Startseite]

Bei einer erfolgreichen Eingabe werden die Wetterdaten und das Wetterbild
aktualisiert. 

![WetterSuche][WetterSuche]

Bei einer fehlerhaften Eingabe erfolgt eine Warnmeldung, der benutzer kann die Eingabe wiederholen. Die Fehlerbehandlung in der
Wetterkomponente verlief am reibungslosesten, da die Wetter API ein `error JSON-Objekt` übergibt.

![WetterFehler][WetterFehler]


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



## Wikipedia 
Einen kurzen Artikel über das gesuchte Schlagwort in der Wikipediakomponente erhalte ich
über die Wikipedia API `de.wikipedia.org`. Die Abfrage muss über einem Proxy 
stattfinden. Dafür verwende ich `cors-anywhere.herokuapp.com`. 
Die Wikipedia Startseite sieht folgendermaßen aus. 

![WikiStart][wikiStart]

Nach eingabe eines Schlagwortes, wird eine Kurze Erklärung und der Titel auf der Seite angezeigt.

![WikiSuche][wikiSuche]

Bei einer Fehlerhaften eingabe erfolgt ein Warnhinweis und er benutzer kann die Eingabe überarbeiten. 

![WikiFehler][wikiFehler]


## Erfahrungsbericht
Die Internet seite ist mein erstes Angular Projekt. Der Einstieg in Angular viel am
Anfang schwer. Das Framework wird regelmäßig aktualisiert, somit sind viele Quellen aus dem
Internett veraltet, das erschwert die Fehlersuche. 
Die Strukturierung der Internetseite in viele einzel Komponenten, hat die Arbeit 
erleichtert. Man behält leichter überblick und die Datein bleiben überschaubar. 
Ich würde meine nächste Seite erneut mit Angular erstellen. 

## Flussdiagramm
Das Flussdiagramm ist unter Flussdiagramm.png gespeichert. 

![Flussdiagramm][flussdiagramm]

[Wetter Startseite]:img/wetter.png  "Wetter Startseite"
[WetterSuche]:img/wetterSuche.png "Wetter Suche"
[WetterFehler]:img/wetterFehler.png "Wetter Fehler"
[aktienStart]:img/aktienStart.png "Aktien Startseite"
[aktienSuche]:img/aktienSuche.png "Aktien Suche"
[aktienFehler]:img/aktienFehler.png " Aktien Fehler"
[aktienGross]:img/aktienStandartGroß.png
[wikiStart]:img/wiki.png
[wikiSuche]:img/wikiSuche.png
[wikiFehler]:img/wikiFehler.png
[flussdiagramm]:Flussdiagramm.png
