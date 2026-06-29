# Thevio Systems — Website

**Dachmarke:** Thevio Systems
**Domain:** thevio-systems.de
**Repo:** `sebastianprzybyla88-hub/thevio-systems`
**Status:** Phase 6 (Finaler Feinschliff) — **Staging-Ready, nicht Go-Live-Ready**

---

## Projektbeschreibung

Dieses Repository enthält den vollständigen Quellcode der statischen Unternehmenswebsite von Thevio Systems.

Thevio Systems ist die Dachmarke für KI-gestützte Softwarelösungen, digitale Workflows, Prozessautomatisierung und produktionsnahe Softwareentwicklung.

Die Website ist bewusst als schlanke, statische HTML/CSS-Website aufgebaut — ohne externe Frameworks, ohne unnötige Abhängigkeiten.

---

## Staging-Status

Die Website ist **staging-ready** und inhaltlich fertiggestellt. Sie ist **nicht go-live-ready**, da folgende Launch-Blocker noch offen sind.

> **Keine Domain-Umschaltung auf thevio-systems.de vor Abschluss aller Launch-Blocker.**
>
> ---
>
> ### ✅ Erledigt (Phase 1–6)
>
> - Grundstruktur und Design (Phase 1–4)
> - - Alle Sektionen: Hero, Leistungen, Triovo, Über/Gründer, Kontakt, Footer
>   - - Impressum- und Datenschutz-Platzhalter vorhanden (als Entwurf markiert)
>     - - noindex-Meta-Tag aktiv
>       - - 404-Seite
>         - - Hamburger-Navigation (Mobile)
>           - - LinkedIn-Profil-Link integriert: https://www.linkedin.com/in/sebastian-przybyla-9426b0416
>             - - **Phase 6:** Nav-Wortmarke gestärkt (font-size, letter-spacing)
>               - - **Phase 6:** Triovo-Spalten besser lesbar (font-size md, größere Abstände)
>                 - - **Phase 6:** Gründer-Card klarer strukturiert (stärkerer Rahmen, mehr Padding, Name prominenter)
>                   - - **Phase 6:** Gründerrolle farblich abgesetzt (accent-Farbe)
>                     - - **Phase 6:** Kontakt-Bereich professionell vorbereitet (visueller E-Mail-Platzhalter, TODO-Kommentare)
>                      
>                       - ---
>
> ### ❌ Launch-Blocker (vor Go-Live abschließen)
>
> 1. **Impressum** — Platzhalter muss durch rechtsgeprüften Inhalt ersetzt werden (§ 5 DDG)
> 2. 2. **Datenschutzerklärung** — Platzhalter muss durch rechtsgeprüfte DSGVO-Erklärung ersetzt werden
>    3. 3. **E-Mail** — `kontakt@thevio-systems.de` muss eingerichtet, getestet und im Kontaktbereich aktiviert werden (TODO-Kommentar in index.html vorhanden)
>       4. 4. **noindex entfernen** — `<meta name="robots" content="noindex, nofollow">` erst entfernen, wenn Impressum, Datenschutz und E-Mail final sind
>          5. 5. **Domain-Routing** — thevio-systems.de → GitHub Pages (DNS A-Records, CNAME)
>            
>             6. ---
>            
>             7. ## Dateistruktur
>            
>             8. ```
> thevio-systems/
> ├── index.html            # Hauptseite
> ├── impressum.html        # Impressum (Platzhalter — vor Go-Live ersetzen)
> ├── datenschutz.html      # Datenschutzerklärung (Platzhalter — vor Go-Live ersetzen)
> ├── 404.html              # Fehlerseite
> ├── assets/
> │   ├── css/
> │   │   └── main.css      # Gesamtes Stylesheet
> │   └── js/
> │       └── main.js       # Nur Hamburger-Menü-Logik
> └── README.md
> ```
>
> ---
>
> ## Technologie
>
> - **HTML5** — semantisch, barrierefrei
> - **CSS3** — eigene CSS-Variablen, kein Framework
> - **JavaScript** — minimal, nur für Mobile-Navigation
> - **Fonts** — System-Font-Stack, keine externen Anfragen
> - **Icons** — keine externe Icon-Library
> - **Tracking** — keines
> - **Externe Abhängigkeiten** — keine
>
> ---
>
> ## Deployment
>
> Die Website wird über GitHub Pages bereitgestellt.
>
> ### Aktivierung GitHub Pages
> 1. Repository → Settings → Pages
> 2. Source: Deploy from a branch
> 3. Branch: `main` / Root (`/`)
> 4. Speichern
>
> ### Custom Domain (thevio-systems.de)
> - CNAME-Datei erst erstellen, wenn Domain-Routing konfiguriert ist
> - DNS-Einstellungen beim Domain-Registrar anpassen (A-Records auf GitHub Pages IPs)
> - HTTPS wird automatisch via Let's Encrypt aktiviert
