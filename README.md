<img src="assets/img/gvz-logo.svg" alt="GVZ logo" width="400px">

# Programmierungsaufgaben für die Rekrutierung von Software-EntwicklerInnen

## [karriere.gvz.ch](https://karriere.gvz.ch/)

Hallo

Du hast dich auf eine Stelle bei der [Gebäudeversicherung Kanton Zürich GVZ](https://www.gvz.ch/) im Bereich Softwareentwicklung beworben und bist hier gelandet?

Wunderbar, hier bist du genau richtig. Dieses Repository beinhaltet Aufgaben für Kandidatinnen und Kandidaten, die sich im Bewerbungsprozesses befinden.

### Hilfsmittel

Entwickle so, wie du es im Alltag tust. Insbesondere:

- nutze ein Entwicklungs-Setup deiner Wahl, so dass du dich wohl fühlst
- benutze das Internet, künstliche Intelligenz oder andere Quellen, die dich weiterbringen

### Abgabe

Zur Abgabe der Resultate schlagen wir vor, ein Repository bei deinem favorisierten Git-Provider (z.B. GitHub, GitLab, Bitbucket) zu erstellen.

Bitte achte darauf, dass du vor der Abgabe alle Commits gepusht hast und das Repository öffentlich ist.

### Bewertungskriterien

Wir bewerten funktionale Korrektheit, Einfachheit, Lesbarkeit und (soweit möglich) dein Vorgehen.

Die Resultate der Aufgabe besprechen wir während dem Zweitgespräch.

Danke, dass du dir Zeit für die Bearbeitung der Aufgaben nimmst. Viel Erfolg!

## Aufgaben

### Aufgabe 1 - Frontend-Entwicklung mit Angular

Im Ordner `./task-1_frontend-angular` befinden sich der Quellcode für eine [Angular](https://angular.dev/) Applikation.

Implementiere folgende Veränderungen und Erweiterungen:

1. Neue Komponente - Eingabe einer Postadresse

- Erstelle eine Komponente im Ordner `src/app/demo`, mit der eine Postaddresse eingegeben werden kann.
- Verwende die bestehenden Komponenten in `src/app/parts`: `card`, `number-input`, `select` und `text-input`.
- Validiere Eingaben von Benutzern.

2. Erweiterung der Navigation

- Füge eine weitere Sektion mit Namen "Kombinierte Bauteile" zur Navigationsleiste auf der linken Seite hinzu.
- Füge ein [Route](https://angular.dev/guide/routing/define-routes) hinzu, über welche die in Schritt 1 erstellte Komponente zur Eingabe einer Postadresse angezeigt wird. Zeige die Route in der Sektion "Kombinierte Bauteile" an.
