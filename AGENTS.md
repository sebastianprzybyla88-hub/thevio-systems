# Thevio Systems Agent Guide

## Zielbild

Thevio Systems positioniert sich als AI-native Softwarestudio fuer KMU: digitale Systeme fuer Prozesse, die heute unnoetig manuell, verteilt oder schwer nachvollziehbar laufen. Die Website muss auf den ersten Blick erklaeren, was gebaut wird: Websites, Web-Apps, interne Tools, Schnittstellen, KI-Workflows und Automatisierungen.

Triovo ist der Proof of Work. Es darf als Praxisbeispiel fuer Produkt-, UX-, Backend-, Datenmodell- und Workflow-Kompetenz genutzt werden, aber nicht als externer Branchenstandard oder validierte Benchmark behauptet werden.

## Projektstruktur

- `index.html`: Hauptseite mit Hero, Leistungen, Resolution Principle, Zielgruppen, Triovo, Audit, Ueber, FAQ und Kontakt.
- `audit.html`: Potenzial-Audit als Einstiegsangebot.
- `impressum.html`, `datenschutz.html`, `404.html`: Pflicht- und Systemseiten.
- `assets/css/main.css`: Designsystem, Layout, responsive Verhalten.
- `assets/js/main.js`: Navigation, Interaktion, Animationen und progressive Enhancements.
- `robots.txt`, `sitemap.xml`: Suchmaschinen- und Indexierungsgrundlage.

## Content-Regeln

- Schreibe fuer Unternehmer und Entscheider, nicht fuer interne Technikteams.
- Fuehre immer vom konkreten Nutzen zur Technik: weniger manuelle Arbeit, klare Zustaendigkeiten, sichtbarer Status, schnellere Rueckfragen, belastbare Nachweise.
- Benenne Leistungen konkret: Website, Landingpage, Web-App, Dashboard, Portal, API, Datenmodell, KI-Workflow, n8n-Automatisierung, Schnittstelle.
- Vermeide doppelte Erklaerungen. Jede Sektion braucht eine eigene Aufgabe im Verkaufsgeschehen.
- Keine erfundenen Kunden, Kennzahlen, Preise, Auszeichnungen, Zertifizierungen oder Referenzen.
- Keine Aussagen wie "KI ersetzt Mitarbeiter". Thevio baut Systeme mit Kontrolle, Freigaben und menschlicher Verantwortung.

## Design-Regeln

- Desktop darf nicht wie hochskalierte Mobile-Version wirken. Ab 1200px muessen Breite, Bildgroessen und Informationsdichte bewusst fuer Web genutzt werden.
- Mobile bleibt eigenstaendig zu pruefen; Desktop-Optimierungen duerfen 390px und 768px nicht verschlechtern.
- Keine generischen SaaS-Helden, keine rein dekorativen Diagramme ohne Aussage.
- Interaktive Visuals muessen auf eine erkennbare Frage antworten: Was wird gebaut? Was veraendert sich? Was kann der Nutzer anklicken?
- Text darf niemals aus Karten, Buttons oder Panels laufen. Lange Woerter brauchen Umbruch- oder Layoutschutz.
- Nutze bestehende Farben, Abstaende, Radius- und Typografie-Patterns aus `assets/css/main.css`.

## Technische Regeln

- Statische Website ohne Build-System. Keine externen Frameworks, Tracker, Fonts oder Third-Party-Skripte ohne ausdrueckliche Freigabe.
- JavaScript muss ohne Fehler ausfallen koennen. Inhalte bleiben auch ohne JS lesbar.
- Animationen beachten `prefers-reduced-motion`.
- Interaktive Controls brauchen echte Buttons, Tastaturbedienung, sichtbaren Fokus und sinnvolle ARIA-Zustaende.
- SEO-Daten muessen pro Seite eindeutig sein: Title, Description, Canonical, Open Graph, Twitter, strukturierte Daten, Sitemap.
- Security-Hardening wird ueber statische Dateien, sichere Links, Header-Hinweise fuer Hosting und keine unnoetigen Fremdquellen umgesetzt.

## Git- und Arbeitsregeln

- Pro Phase einen eigenen Branch und einen fokussierten Commit verwenden.
- Keine Deployments, Merges, Force-Pushes oder normalen Pushes ohne ausdrueckliche Bestaetigung.
- Ungetrackte Arbeitsordner wie `worktrees/` nicht anfassen oder stage-en, sofern die Aufgabe sie nicht explizit betrifft.
- Vor sichtbaren Aenderungen immer den aktuellen Stand in Browser und Code verstehen.
- Abschluesse immer mit Branch, Commit-SHA, geaenderten Dateien und getesteten Punkten melden.

## QA-Pflicht

Vor Abschluss jeder sichtbaren Aenderung die Checkliste in `QA-CHECKLIST.md` verwenden. Minimum: 390px, 768px und 1440px pruefen, horizontales Overflow ausschliessen, Tastaturfokus testen, reduzierte Bewegung testen und SEO-/Security-Basics erneut kontrollieren.
