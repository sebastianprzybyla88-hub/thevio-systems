# Thevio Systems — Website

**Dachmarke:** Thevio Systems
**Domain:** thevio-systems.de
**Repo:** `sebastianprzybyla88-hub/thevio-systems`
**Status:** Phase 5 (Finaler Feinschliff) — Staging-Ready, nicht Go-Live-Ready

---

## Projektbeschreibung

Dieses Repository enthält den vollständigen Quellcode der statischen Unternehmenswebsite von Thevio Systems.

Thevio Systems ist die Dachmarke für KI-gestützte Softwarelösungen, digitale Workflows, Prozessautomatisierung und produktionsnahe Softwareentwicklung.

Die Website ist bewusst als schlanke, statische HTML/CSS-Website aufgebaut — ohne externe Frameworks, ohne unnötige Abhängigkeiten.

---

## Staging-Status

Die Website ist **staging-ready** und inhaltlich fertiggestellt. Sie ist **nicht go-live-ready**, da folgende Launch-Blocker noch offen sind:

### ✅ Erledigt
- Grundstruktur und Design (Phase 1–4)
- Alle Sektionen: Hero, Leistungen, Triovo, Über/Gründer, Kontakt, Footer
- Impressum- und Datenschutz-Platzhalter vorhanden (als Entwurf markiert)
- noindex-Meta-Tag aktiv
- 404-Seite
- Hamburger-Navigation (Mobile)
- LinkedIn-Profil-Link integriert: https://www.linkedin.com/in/sebastian-przybyla-9426b0416

### ❌ Launch-Blocker (vor Go-Live abschließen)
- **Impressum** — Platzhalter muss durch rechtsgeprüften Inhalt ersetzt werden (§ 5 DDG)
- **Datenschutzerklärung** — Platzhalter muss durch rechtsgeprüfte DSGVO-Erklärung ersetzt werden
- **E-Mail** — kontakt@thevio-systems.de muss eingerichtet, getestet und im Kontaktbereich sichtbar gemacht werden
- **noindex entfernen** — Meta-Tag `<meta name="robots" content="noindex, nofollow">` muss entfernt werden, sobald Impressum, Datenschutz und E-Mail final sind
- **Domain-Routing** — thevio-systems.de → GitHub Pages (DNS A-Records, CNAME)
- **Keine Domain-Umschaltung** vor Abschluss aller obigen Punkte

---

## Dateistruktur

```
thevio-systems/
├── index.html          # Hauptseite
├── impressum.html      # Impressum (Platzhalter — vor Go-Live ersetzen)
├── datenschutz.html    # Datenschutzerklärung (Platzhalter — vor Go-Live ersetzen)
├── 404.html            # Fehlerseite
├── assets/
│   ├── css/
│   │   └── main.css   # Gesamtes Stylesheet
│   └── js/
│       └── main.js    # Nur Hamburger-Menü-Logik
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
