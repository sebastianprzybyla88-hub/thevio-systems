# Thevio Systems — Website

**Dachmarke:** Thevio Systems
**Domain:** thevio-systems.de (verbunden, live)
**Repo:** `sebastianprzybyla88-hub/thevio-systems`
**Status:** Phase 12 final — **GO-LIVE ABGESCHLOSSEN** — live unter https://thevio-systems.de

---

## Projektbeschreibung

Dieses Repository enthält den vollständigen Quellcode der statischen Unternehmenswebsite von Thevio Systems.

Thevio Systems ist der professionelle Rahmen für den praktischen Aufbau in Richtung Softwareentwicklung, KI-gestützte Workflows, digitale Produktentwicklung und Customer Experience. Triovo ist das erste eigenständige Praxisprojekt und dient als sichtbarer Nachweis dieser Arbeitsweise.

Die Website ist bewusst als schlanke, statische HTML/CSS-Website aufgebaut — ohne externe Frameworks, ohne unnötige Abhängigkeiten.

---

## Aktueller Status

> **PHASE 12 FINAL — GO-LIVE-READY, LIVE**
>
> Die Website ist unter https://thevio-systems.de live und öffentlich erreichbar. Domain-Verbindung, HTTPS und finale QA sind abgeschlossen.

---

## ✅ Go-Live abgeschlossen (Phase 11–12)

- Domain thevio-systems.de mit GitHub Pages verbunden (DNS-Check erfolgreich)
- HTTPS aktiviert (Zertifikat aktiv)
- „Enforce HTTPS" in GitHub Pages aktiviert
- http://thevio-systems.de leitet korrekt auf https://thevio-systems.de weiter
- https://www.thevio-systems.de leitet korrekt auf die Apex-Domain https://thevio-systems.de weiter
- Impressum final und über HTTPS erreichbar (impressum.html)
- Datenschutz final und über HTTPS erreichbar (datenschutz.html)
- index.html enthält `<meta name="robots" content="index, follow" />`
- impressum.html, datenschutz.html und 404.html behalten weiterhin `noindex, nofollow` (gewollt)
- E-Mail-Adresse kontakt@thevio-systems.de aktiv und als mailto-Link korrekt eingebunden
- LinkedIn-Link geprüft und korrekt: https://www.linkedin.com/in/sebastian-przybyla-9426b0416
- Triovo-Link geprüft und korrekt: https://triovo.org
- Bestehende Tuta-Mail-DNS-Einträge (MX, SPF, DKIM, DMARC, MTA-STS, t-verify) unverändert und vollständig erhalten
- Keine sichtbaren Platzhalter im Code (geprüft)
- Keine offenen Launch-Blocker mehr

---

## ✅ Erledigt (Phase 1–9)

- Website-Grundstruktur und Design-System
- Alle Sektionen: Hero, Technische Schwerpunkte, Triovo, Über/Gründer, Kontakt, Footer
- Hero-Text und Subheadline final geschärft (Phase 9): „aus der Praxis aufgebaut" + Triovo-Bezug in der Subheadline
- 404-Seite geprüft — keine Platzhalter, Links korrekt
- Hamburger-Navigation (Mobile) funktionsfähig, keine externen Scripts, kein Tracking (main.js geprüft)
- main.css geprüft — keine externen Imports, keine externen Font-/Asset-Referenzen
- LinkedIn-Integration geprüft und funktionsfähig
- Triovo-Link geprüft und funktionsfähig
- target="_blank" + rel="noopener noreferrer" korrekt gesetzt
- GitHub Pages Staging live und geprüft (Footer-Links, Impressum/Datenschutz erreichbar)
- E-Mail-Adresse kontakt@thevio-systems.de eingerichtet, verlinkt und getestet
- Kein LinkedIn-Embed, kein externes Script, keine Cookies, keine Formulare im Code bestätigt

## ✅ Erledigt seit letztem Update

- Impressum final — impressum.html enthält keine Platzhalter mehr, Adressangaben konsistent (Bahnhofstraße 5, 37318 Arenshausen, Deutschland)
- Datenschutz final — datenschutz.html vollständig auf den tatsächlichen technischen Stand zugeschnitten (Verantwortlicher, GitHub-Pages-Hosting, Server-Logfiles, Kontakt per E-Mail, keine Cookies/kein Tracking/keine externen Scripts, externe Links zu LinkedIn/Triovo, Rechtsgrundlagen, Speicherdauer, Betroffenenrechte, Beschwerderecht, Stand)
- noindex entfernt — index.html enthält `<meta name="robots" content="index, follow" />`
- CNAME-Datei erstellt — Inhalt exakt eine Zeile: thevio-systems.de
- DNS-Einträge bei INWX gesetzt (A-Records apex + CNAME www), Tuta-Mail-Einträge unangetastet
- GitHub Pages Custom Domain eingetragen, DNS-Check erfolgreich
- „Enforce HTTPS" aktiviert
- Finale QA auf https://thevio-systems.de durchgeführt und bestanden

**noindex-Hinweis:** impressum.html, datenschutz.html und 404.html behalten bewusst dauerhaft `noindex`. Nur index.html ist für die Indexierung freigegeben.

---

## Technische Prüfung (bestanden)

- Keine externen `<script src>`-Einbindungen außerhalb von assets/
- Keine `<form>`-Elemente im gesamten Repository
- Keine Cookies, kein Tracking im Code (main.js ausschließlich Hamburger-Menü + Scroll-Shadow)
- Keine `@import` oder externen `url()`-Referenzen in main.css
- LinkedIn-Link, Triovo-Link und mailto-Link auf index.html verifiziert (korrekt, klickbar, live getestet)
- Footer-Links zu Impressum und Datenschutz auf der Live-Seite erreichbar
- Mobile-Navigation (Hamburger) funktionsfähig laut main.js-Logik
- HTTP → HTTPS Redirect verifiziert
- www → Apex-Domain Redirect verifiziert
- Tuta-Mail-DNS-Einträge (MX, SPF, DKIM, DMARC, MTA-STS, t-verify) unverändert verifiziert

---

## Dateistruktur

```
thevio-systems/
├── index.html          # Hauptseite (index, follow)
├── impressum.html       # Impressum — final (noindex)
├── datenschutz.html     # Datenschutz — final (noindex)
├── 404.html             # Fehlerseite (noindex)
├── CNAME                # Custom Domain für GitHub Pages (Inhalt: thevio-systems.de)
├── assets/
│   ├── css/
│   │   └── main.css     # Gesamtes Stylesheet (geprüft, keine externen Ressourcen)
│   └── js/
│       └── main.js      # Nur Hamburger-Menü-Logik (geprüft, kein Tracking)
└── README.md
```

---

## Technologie

- HTML5 — semantisch, barrierefrei
- CSS3 — eigene CSS-Variablen, kein Framework
- JavaScript — minimal, nur für Mobile-Navigation und Scroll-Shadow
- Fonts — System-Font-Stack, keine externen Anfragen
- Icons — keine externe Icon-Library
- Tracking — keines (geprüft)
- Cookies — keine (geprüft)
- Externe Abhängigkeiten — keine (geprüft)

---

## Deployment

### GitHub Pages
- Repository → Settings → Pages
- Source: Deploy from a branch
- Branch: main / Root (/)
- Custom Domain: thevio-systems.de (verbunden, DNS-Check erfolgreich)
- Enforce HTTPS: aktiviert

### DNS (bei INWX)
- A-Records (apex thevio-systems.de) → GitHub-Pages-IPs
- CNAME www → sebastianprzybyla88-hub.github.io
- Bestehende Tuta-Mail-Einträge (MX, SPF, DKIM, DMARC, MTA-STS, t-verify) unverändert und vollständig erhalten

HTTPS ist aktiv (Let's Encrypt via GitHub Pages), Enforce HTTPS ist aktiviert. Die Website ist live und final geprüft.
