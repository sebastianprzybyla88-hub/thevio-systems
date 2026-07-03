# Thevio Systems — Website

**Dachmarke:** Thevio Systems
**Domain:** thevio-systems.de (gesichert, noch nicht verbunden)
**Repo:** `sebastianprzybyla88-hub/thevio-systems`
**Status:** Phase 9 — **Staging-Ready, NICHT Go-Live-Ready** (Impressum und Datenschutz sind Launch-Blocker)

---

## Projektbeschreibung

Dieses Repository enthält den vollständigen Quellcode der statischen Unternehmenswebsite von Thevio Systems.

Thevio Systems ist der professionelle Rahmen für den praktischen Aufbau in Richtung Softwareentwicklung, KI-gestützte Workflows, digitale Produktentwicklung und Customer Experience. Triovo ist das erste eigenständige Praxisprojekt und dient als sichtbarer Nachweis dieser Arbeitsweise.

Die Website ist bewusst als schlanke, statische HTML/CSS-Website aufgebaut — ohne externe Frameworks, ohne unnötige Abhängigkeiten.

---

## Aktueller Status

> **STAGING-READY — NICHT GO-LIVE-READY**
>
> Impressum und Datenschutz enthalten weiterhin Platzhalter bzw. widersprüchliche Angaben. noindex bleibt auf index.html aktiv. Keine Domain-Umschaltung, keine DNS-Änderung, keine CNAME-Datei, solange diese Blocker bestehen.

---

## ✅ Erledigt (Phase 1–9)

- Website-Grundstruktur und Design-System
- Alle Sektionen: Hero, Technische Schwerpunkte, Triovo, Über/Gründer, Kontakt, Footer
- Hero-Text und Subheadline final geschärft (Phase 9): „aus der Praxis aufgebaut" + Triovo-Bezug in der Subheadline
- 404-Seite geprüft — keine Platzhalter, Links korrekt
- Hamburger-Navigation (Mobile) funktionsfähig, keine externen Scripts, kein Tracking (main.js geprüft)
- main.css geprüft — keine externen Imports, keine externen Font-/Asset-Referenzen
- LinkedIn-Integration geprüft und funktionsfähig: https://www.linkedin.com/in/sebastian-przybyla-9426b0416
- Triovo-Link geprüft und funktionsfähig: https://triovo.org
- target="_blank" + rel="noopener noreferrer" korrekt gesetzt
- GitHub Pages Staging live und geprüft (Footer-Links, Impressum/Datenschutz erreichbar)
- E-Mail-Adresse kontakt@thevio-systems.de eingerichtet, verlinkt und getestet ✅
- Kein LinkedIn-Embed, kein externes Script, keine Cookies, keine Formulare im Code bestätigt
- Domain thevio-systems.de ist registriert/gesichert (noch nicht verbunden)

---

## ❌ Launch-Blocker (vor Go-Live zwingend abschließen)

1. **Impressum ist NICHT final** — `impressum.html` enthält weiterhin die Platzhalter `[STRAẞE HAUSNUMMER]` und `[PLZ ORT]` im Abschnitt "Angaben gemäß § 5 DDG". Zusätzlich besteht ein Widerspruch: Die Anschrift bei "Verantwortlich für den Inhalt" (Bahnhofstraße 5, 37318 Arenshausen) weicht von der noch offenen Hauptanschrift ab. Vor Go-Live muss die vollständige, ladungsfähige Anschrift eingetragen und die Konsistenz beider Adressangaben hergestellt werden. **Keine Adressdaten wurden erfunden.**
2. **Datenschutz ist NICHT final** — `datenschutz.html` enthält weiterhin vollständige Platzhalter (Verantwortlicher, Hosting/GitHub Pages, Datenerhebung, Cookies, Betroffenenrechte, Datenschutzkontakt) sowie den Entwurfs-Warnhinweis. Erfordert entweder einen geprüften Datenschutz-Generator oder rechtliche Beratung. **Keine Rechtstexte wurden erfunden.**
3. **noindex auf index.html bleibt aktiv** — darf gemäß obiger Blocker nicht entfernt werden.
4. **Domain-Verbindung nicht vorbereitet** — DNS-Änderungen bei INWX wurden nicht vorgenommen, da Blocker 1 und 2 offen sind. Bestehende Tuta-Mail-DNS-Einträge (MX, SPF, DKIM, DMARC, MTA-STS, t-verify) sind davon nicht betroffen und wurden nicht angefasst.
5. **CNAME-Datei nicht erstellt** — wird erst nach Abschluss der DNS-Vorbereitung angelegt.
6. **HTTPS-Erzwingung** — erst nach Domain-Verbindung relevant.
7. **Finale QA auf thevio-systems.de** — erst nach Domain-Verbindung möglich.

> **noindex-Hinweis:** impressum.html, datenschutz.html und 404.html können noindex auch nach Go-Live behalten. Nur index.html muss für die Indexierung freigegeben werden — aber erst, wenn Blocker 1 und 2 abgeschlossen sind.

---

## Technische Prüfung (Phase 9 — bestanden)

- Keine externen `<script src>`-Einbindungen außerhalb von `assets/`
- Keine `<form>`-Elemente im gesamten Repository
- Keine Cookies, kein Tracking im Code (main.js ausschließlich Hamburger-Menü + Scroll-Shadow)
- Keine `@import` oder externen `url()`-Referenzen in main.css
- LinkedIn-Link, Triovo-Link und mailto-Link auf index.html verifiziert (korrekt, klickbar, live getestet)
- Footer-Links zu Impressum und Datenschutz auf der Live-Staging-Seite erreichbar
- Mobile-Navigation (Hamburger) funktionsfähig laut main.js-Logik

---

## TODO-Stellen im Code

### impressum.html — Adresse vervollständigen und Widerspruch auflösen

**Datei:** `impressum.html`
**Platzhalter:**
```
[STRAẞE HAUSNUMMER]
[PLZ ORT]
```
Vor Go-Live: echte, ladungsfähige Anschrift eintragen. Zusätzlich prüfen, ob diese Anschrift mit der Angabe bei "Verantwortlich für den Inhalt" übereinstimmen soll — aktuell zwei unterschiedliche Zustände (Platzhalter vs. konkrete Adresse) im selben Dokument.

### datenschutz.html — vollständig neu ausformulieren

**Datei:** `datenschutz.html`
Alle sechs Abschnitte (Verantwortlicher, Hosting, Datenerhebung, Cookies, Betroffenenrechte, Datenschutzkontakt) sind noch Platzhalter. Empfehlung weiterhin: geprüften Datenschutz-Generator nutzen oder rechtliche Beratung einholen.

### index.html — noindex entfernen (gesperrt)

**Zeile im `<head>`:** `<meta name="robots" content="noindex, nofollow" />`
Erst entfernen, wenn Impressum UND Datenschutz final sind.

---

## Domain-Vorbereitung (dokumentarisch — noch nicht umgesetzt, da Blocker offen)

### DNS-Einträge bei INWX (erst nach Abschluss der Blocker vorzunehmen)

> Werte vor Eintragung mit aktueller GitHub-Pages-Dokumentation prüfen:
> https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

**A-Records** (apex domain: thevio-systems.de): Vier A-Records auf die zum Zeitpunkt der Einrichtung aktuellen GitHub-Pages-IPs setzen (Werte vorher gegen die offizielle Dokumentation prüfen, nicht blind übernehmen).

**CNAME-Record** (www): `www.thevio-systems.de` → `sebastianprzybyla88-hub.github.io`

**Zwingend zu erhalten — bestehende Tuta-Mail-DNS-Einträge dürfen nicht verändert oder gelöscht werden:**
- MX-Records
- SPF TXT-Record
- DKIM CNAME-Einträge
- DMARC TXT-Record
- MTA-STS CNAME-Einträge
- t-verify TXT-Record

Die GitHub-Pages-DNS-Konfiguration (A-Records + www-CNAME) betrifft ausschließlich die Webserver-Auflösung und darf die oben genannten Mail-Einträge nicht beschädigen oder ersetzen.

**Reihenfolge (erst nach Abschluss von Impressum + Datenschutz):**
1. DNS-Werte bei INWX eintragen, Mail-Einträge unangetastet lassen
2. Propagation abwarten (bis zu 24–48 Stunden)
3. CNAME-Datei im Repository erstellen (Inhalt ausschließlich: `thevio-systems.de`)
4. GitHub Pages: Custom Domain `thevio-systems.de` eintragen
5. "Enforce HTTPS" aktivieren, sobald Zertifikat verfügbar (nicht vor Verfügbarkeit raten)
6. HTTPS testen, finale QA auf thevio-systems.de durchführen

**CNAME-Datei wurde noch nicht erstellt.** Wird erst nach vollständiger DNS-Vorbereitung angelegt.

---

## Dateistruktur

```
thevio-systems/
├── index.html          # Hauptseite (Hero final geschärft, Phase 9)
├── impressum.html      # Impressum — NICHT final (Platzhalter + Widerspruch)
├── datenschutz.html    # Datenschutz — NICHT final (vollständiger Entwurf)
├── 404.html            # Fehlerseite (geprüft, keine Platzhalter)
├── assets/
│   ├── css/
│   │   └── main.css   # Gesamtes Stylesheet (geprüft, keine externen Ressourcen)
│   └── js/
│       └── main.js    # Nur Hamburger-Menü-Logik (geprüft, kein Tracking)
└── README.md
```

---

## Technologie

- **HTML5** — semantisch, barrierefrei
- **CSS3** — eigene CSS-Variablen, kein Framework
- **JavaScript** — minimal, nur für Mobile-Navigation und Scroll-Shadow
- **Fonts** — System-Font-Stack, keine externen Anfragen
- **Icons** — keine externe Icon-Library
- **Tracking** — keines (geprüft)
- **Cookies** — keine (geprüft)
- **Externe Abhängigkeiten** — keine (geprüft)

---

## Deployment

### Aktivierung GitHub Pages
1. Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / Root (`/`)
4. Speichern

### Custom Domain (thevio-systems.de)
- Domain ist registriert/gesichert, aber noch nicht verbunden
- Reihenfolge: Impressum + Datenschutz final → DNS konfigurieren (ohne Tuta-Mail-Einträge zu beschädigen) → CNAME-Datei erstellen → Domain eintragen → HTTPS erzwingen
- CNAME-Datei noch nicht vorhanden (gesperrt durch offene Launch-Blocker)
- HTTPS wird automatisch via Let's Encrypt aktiviert, sobald DNS propagiert ist
