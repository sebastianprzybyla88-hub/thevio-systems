# Thevio Systems — Website

**Dachmarke:** Thevio Systems
**Domain:** thevio-systems.de
**Repo:** `sebastianprzybyla88-hub/thevio-systems`
**Status:** Phase 7 — **Staging-Ready, nicht Go-Live-Ready**

---

## Projektbeschreibung

Dieses Repository enthält den vollständigen Quellcode der statischen Unternehmenswebsite von Thevio Systems.

Thevio Systems ist die Dachmarke für KI-gestützte Softwarelösungen, digitale Workflows, Prozessautomatisierung und produktionsnahe Softwareentwicklung.

Die Website ist bewusst als schlanke, statische HTML/CSS-Website aufgebaut — ohne externe Frameworks, ohne unnötige Abhängigkeiten.

---

## Aktueller Status

> **STAGING-READY — NICHT GO-LIVE-READY**
>
> Keine Domain-Umschaltung auf thevio-systems.de vor Abschluss aller Launch-Blocker.

---

## ✅ Erledigt (Phase 1–7)

- Website-Grundstruktur und Design-System
- Alle Sektionen: Hero, Leistungen, Triovo, Über/Gründer, Kontakt, Footer
- noindex-Meta-Tag aktiv auf allen Seiten
- 404-Seite
- Hamburger-Navigation (Mobile)
- LinkedIn-Integration: https://www.linkedin.com/in/sebastian-przybyla-9426b0416
- target="_blank" + rel="noopener noreferrer" korrekt gesetzt
- Eingebaut in: Gründer-Card + Kontakt-Sektion (index.html)
- Kein LinkedIn-Embed, kein externes Script
- GitHub Pages Staging aktiv
- E-Mail-Adresse kontakt@thevio-systems.de eingerichtet und getestet ✅
- Kontaktzeile (index.html) auf finale Formulierung aktualisiert ✅
- Triovo-Referenz-Card vollständig
- Gründerprofil vollständig
- Impressum (impressum.html) mit echten Angaben befüllt gemäß § 5 DDG ✅
  - Name und Dachmarke eingetragen
  - Adressfeld für Geschäftsanschrift als Platzhalter gesetzt (abhängig von echten Adressdaten)
  - Verantwortlich für Inhalt: Sebastian Przybyla, Bahnhofstraße 5, 37318 Arenshausen
  - Hinweis zum Aufbaustatus eingefügt
  - Entwurfs-Platzhalter vollständig entfernt

---

## ❌ Launch-Blocker (vor Go-Live zwingend abschließen)

1. **Impressum-Adresse vervollständigen** — Geschäftsanschrift `[STRAẞE HAUSNUMMER]` / `[PLZ ORT]` durch echte Adressdaten ersetzen
2. **Datenschutz finalisieren** — Platzhalter durch DSGVO-konforme Datenschutzerklärung ersetzen
3. **noindex entfernen** — `<meta name="robots" content="noindex, nofollow">` aus index.html entfernen (erst nach Abschluss aller obigen Punkte)
4. **Domain DNS konfigurieren** — A-Records bei INWX auf GitHub Pages IPs setzen
5. **CNAME-Datei erstellen** — erst nach DNS-Konfiguration
6. **HTTPS aktivieren** — "Enforce HTTPS" in GitHub Pages nach Domain-Verbindung
7. **Finale QA** — vollständiger Test auf thevio-systems.de

> **noindex-Hinweis:** impressum.html, datenschutz.html und 404.html können noindex auch nach Go-Live behalten. Nur index.html muss für die Indexierung freigegeben werden.

---

## TODO-Stellen im Code

### impressum.html — Geschäftsanschrift vervollständigen

**Datei:** `impressum.html`
**Platzhalter:**
```
[STRAẞE HAUSNUMMER]
[PLZ ORT]
```
Durch echte Geschäftsanschrift ersetzen, sobald Unternehmensanmeldung abgeschlossen.

### index.html — noindex entfernen

**Datei:** `index.html`
**Zeile im `<head>`:** `<meta name="robots" content="noindex, nofollow" />`
**Kommentar:** `<!-- STAGING: noindex aktiv. Vor Go-Live auf thevio-systems.de entfernen! -->`
Diese Zeile und den Kommentar erst nach Abschluss aller Launch-Blocker entfernen.

---

## Domain-Vorbereitung (dokumentarisch — noch nicht umsetzen)

### DNS-Einträge bei INWX

> Werte vor Eintragung mit aktueller GitHub-Pages-Dokumentation prüfen:
> https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

**A-Records** (apex domain: thevio-systems.de): Vier A-Records auf aktuelle GitHub Pages IPs setzen.

**CNAME-Record** (www): `www.thevio-systems.de` → `sebastianprzybyla88-hub.github.io`

**Reihenfolge:**
1. DNS-Werte bei INWX eintragen
2. Propagation abwarten (bis zu 24–48 Stunden)
3. CNAME-Datei im Repository erstellen (Inhalt: `thevio-systems.de`)
4. GitHub Pages: Custom Domain `thevio-systems.de` eintragen
5. "Enforce HTTPS" aktivieren, sobald Zertifikat verfügbar
6. HTTPS testen

**CNAME-Datei wird noch nicht erstellt.** Erst nach DNS-Konfiguration anlegen.

---

## Dateistruktur

```
thevio-systems/
├── index.html          # Hauptseite
├── impressum.html      # Impressum (Angaben gem. § 5 DDG — Adresse ausstehend)
├── datenschutz.html    # Datenschutz (Entwurf — vor Go-Live ersetzen)
├── 404.html            # Fehlerseite (noindex kann bleiben)
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
- **Cookies** — keine
- **Externe Abhängigkeiten** — keine

---

## Deployment

### Aktivierung GitHub Pages
1. Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / Root (`/`)
4. Speichern

### Custom Domain (thevio-systems.de)
- Reihenfolge: DNS konfigurieren → CNAME-Datei erstellen → Domain eintragen → HTTPS erzwingen
- CNAME-Datei noch nicht vorhanden (Launch-Blocker)
- HTTPS wird automatisch via Let's Encrypt aktiviert, sobald DNS propagiert ist
