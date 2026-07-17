# Thevio Systems — Website

Dachmarke: Thevio Systems
Domain: thevio-systems.de (verbunden, live)
Repo: `sebastianprzybyla88-hub/thevio-systems`
Status: Live unter https://thevio-systems.de

## Projektbeschreibung

Dieses Repository enthält den vollständigen Quellcode der statischen Unternehmenswebsite von Thevio Systems.

Thevio Systems entwickelt Lösungen für reale Geschäftsprozesse. Ausgangspunkt ist immer ein Geschäftsproblem oder ein ineffizienter Ablauf – erst danach folgt die passende Kombination aus Customer Experience, Software Engineering und Business Automation. Triovo ist das erste eigenständige Praxisprojekt und dient als Proof of Work dieser Arbeitsweise.

Die Website ist als schlanke, statische HTML/CSS-Website aufgebaut — ohne externe Frameworks, ohne unnötige Abhängigkeiten, ohne Tracking und ohne Cookies.

## Seiten und Sektionen

- `index.html` — Startseite: Hero, Prozess-Visualisierung, Transformation, Leistungen (Customer Experience / Software Engineering / Business Automation), Zielgruppen, Triovo (Proof of Work), Potenzial-Audit-Verweis, Warum Thevio Systems, Kontakt
- `audit.html` — Potenzial-Audit für Prozesse, Workflows und Kundenservice
- `impressum.html` — Impressum (noindex)
- `datenschutz.html` — Datenschutzerklärung (noindex)
- `404.html` — Fehlerseite (noindex)

## Dateistruktur

```
thevio-systems/
├── index.html
├── audit.html
├── impressum.html
├── datenschutz.html
├── 404.html
├── CNAME
├── assets/
│   ├── css/
│   │   └── main.css        # Design-System, keine externen Ressourcen
│   ├── js/
│   │   └── main.js         # Mobile Navigation, Scroll-Reveal, Prozess-Zyklus (prefers-reduced-motion-sicher)
│   └── img/
│       ├── thevio-logo.svg
│       └── triovo-dashboard-preview.png
└── README.md
```

## Technologie

HTML5 (semantisch, barrierefrei), CSS3 (eigene Variablen, kein Framework), minimales JavaScript ohne externe Abhängigkeiten. Kein Tracking, keine Cookies, keine Formulare, keine externen Skript- oder Font-Einbindungen.

## Deployment

GitHub Pages, Quelle: Branch `main`, Root-Verzeichnis. Custom Domain: thevio-systems.de (HTTPS aktiv, Enforce HTTPS aktiviert). Bestehende Tuta-Mail-DNS-Einträge (MX, SPF, DKIM, DMARC, MTA-STS, t-verify) bleiben unverändert.
