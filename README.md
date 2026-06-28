# Thevio Systems — Website

**Dachmarke:** Thevio Systems  
**Domain:** thevio-systems.de  
**Repo:** `sebastianprzybyla88-hub/thevio-systems`  
**Status:** In Entwicklung — Phase 4

---

## Projektbeschreibung

Dieses Repository enthält den vollständigen Quellcode der statischen Unternehmenswebsite von Thevio Systems.

Thevio Systems ist die Dachmarke für KI-gestützte Softwarelösungen, digitale Workflows, Prozessautomatisierung und produktionsnahe Softwareentwicklung.

Die Website ist bewusst als schlanke, statische HTML/CSS-Website aufgebaut — ohne externe Frameworks, ohne unnötige Abhängigkeiten.

---

## Dateistruktur

```
thevio-systems/
├── index.html           # Hauptseite
├── impressum.html       # Impressum (Platzhalter — vor Go-Live ersetzen)
├── datenschutz.html     # Datenschutzerklärung (Platzhalter — vor Go-Live ersetzen)
├── 404.html             # Fehlerseite
├── assets/
│   ├── css/
│   │   └── main.css     # Gesamtes Stylesheet
│   └── js/
│       └── main.js      # Nur Hamburger-Menü-Logik
└── README.md
```

---

## Technologie

- **HTML5** — semantisch, barrierefrei
- **CSS3** — eigene CSS-Variablen, kein Framework
- **JavaScript** — minimal, nur für Mobile-Navigation
- **Fonts** — System-Font-Stack, keine externen Anfragen
- **Icons** — keine externe Icon-Library
- **Tracking** — keines
- **Externe Abhängigkeiten** — keine

---

## Deployment

Die Website wird über **GitHub Pages** bereitgestellt.

### Aktivierung GitHub Pages
1. Repository → Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / Root (`/`)
4. Speichern

### Custom Domain (thevio-systems.de)
- CNAME-Datei erst erstellen, wenn Domain-Routing konfiguriert ist
- DNS-Einstellungen beim Domain-Registrar anpassen (A-Records auf GitHub Pages IPs)
- HTTPS wird automatisch via Let's Encrypt aktiviert

> ⚠ CNAME ist in diesem Repository noch nicht angelegt. Erst nach Domain-Konfiguration hinzufügen.

---

## TODOs vor Go-Live

- [ ] `impressum.html` — finale Rechtstexte gemäß § 5 DDG eintragen
- [ ] `datenschutz.html` — DSGVO-konforme Datenschutzerklärung eintragen
- [ ] Kontakt-E-Mail (`kontakt@thevio-systems.de`) einrichten, testen und in `index.html` eintragen
- [ ] LinkedIn-Profil-URL in `index.html` eintragen
- [ ] Triovo-Link (`https://triovo.org`) prüfen und in `index.html` aktivieren
- [ ] GitHub Pages aktivieren (Settings → Pages)
- [ ] Domain-Routing beim Registrar konfigurieren
- [ ] CNAME-Datei anlegen
- [ ] Finale QA auf Desktop und Mobile
- [ ] Rechtliche Seiten durch Anwalt oder geprüften Generator abnehmen lassen

---

## Erstes Produkt

[Triovo](https://triovo.org) — strukturiertes Anliegen-Management für Verbraucher und Unternehmen.  
Erstes eigenständiges Produkt unter Thevio Systems.

---

## Lizenz

Alle Rechte vorbehalten. © 2026 Thevio Systems / Sebastian Przybyla.  
Dieser Code ist nicht zur Weiterverwendung freigegeben.
