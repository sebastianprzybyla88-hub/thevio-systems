# Thevio Systems QA Checklist

Diese Checkliste ist die wiederholbare Abnahme fuer Design-, Content-, SEO- und Security-Aenderungen an der statischen Website.

## 1. Vor der Aenderung

- Aktuellen Branch und Status pruefen: `git status --short --branch`.
- Klaeren, ob die Arbeit auf `main` basiert oder ein genehmigter Feature-Branch genutzt wird.
- Bestehende ungetrackte Ordner nicht ungefragt stage-en.
- Betroffene Sektionen im Browser ansehen, bevor Code geaendert wird.

## 2. Code-Checks

- JavaScript-Syntax pruefen: `node --check assets/js/main.js`.
- JSON-LD in allen geaenderten HTML-Dateien auf valides JSON pruefen.
- `git diff --check` ausfuehren.
- Interne Links und Anker pruefen: Navigation, CTA, Footer, FAQ und Bildpfade.
- Keine neuen externen Skripte, Fonts, Tracker oder Cookies ohne Freigabe.

## 3. Desktop- und Mobile-QA

- Viewports pruefen: 390px, 768px, 1440px.
- Fuer Desktop zusaetzlich grosse Browserbreiten ab ca. 1600px pruefen, damit die Seite nicht gepresst oder zu klein wirkt.
- Horizontales Overflow ausschliessen: `document.documentElement.scrollWidth <= window.innerWidth`.
- Hero, Leistungsbereiche, interaktive Visuals, Kontaktbereich und Footer komplett ansehen.
- Text in Buttons, Cards, Tabs, Badges und Panels darf nicht ueberlaufen.
- Linien, Overlays und Hintergrundraster duerfen keine Inhalte unprofessionell durchschneiden.

## 4. Interaktion und Accessibility

- Alle klickbaren Visual-Tabs und CTAs per Maus und Tastatur testen.
- Fokuszustand muss sichtbar sein.
- Aktive Tabs brauchen sinnvolle `aria-selected` oder `aria-pressed` Zustaende.
- Navigation funktioniert mit und ohne Mobile-Menue.
- `prefers-reduced-motion` testen: keine zwingenden Animationen, keine blinkenden Kerninhalte.
- Bilder brauchen sinnvolle `alt`-Texte oder leere `alt`-Attribute, wenn rein dekorativ.

## 5. SEO-QA

- Pro oeffentlicher Seite eindeutigen Title und Meta Description pruefen.
- Canonical URLs muessen zur Live-Struktur passen.
- `robots.txt` muss auf `https://thevio-systems.de/sitemap.xml` zeigen.
- `sitemap.xml` muss alle indexierbaren Seiten enthalten und Pflichtseiten nur aufnehmen, wenn sie indexiert werden sollen.
- H1 pro Seite eindeutig, H2/H3 semantisch geordnet.
- Wichtige Begriffe natuerlich abdecken: Websites fuer KMU, Web-Apps, interne Tools, KI-Workflows, Automatisierung, Schnittstellen, Dashboard, Prozesssoftware.

## 6. Security-QA

- Keine Inline-Eventhandler oder unsichere URL-Schemata einfuehren.
- Keine ungeprueften HTML-Injektionen mit Nutzerdaten. Wenn DOM geschrieben wird, bevorzugt `textContent` und Element-APIs verwenden.
- Externe Links mit `rel="noopener noreferrer"` absichern, wenn `target="_blank"` genutzt wird.
- `security.txt` und Hosting-Header-Anforderungen separat dokumentieren, falls die Plattform Header nicht direkt im Repo setzen kann.
- HTTPS, HSTS, CSP, X-Content-Type-Options, Referrer-Policy und X-Frame-Options nach Deployment mit externem Scanner erneut pruefen.

## 7. Abschluss

- `git status --short --branch` dokumentieren.
- Bei Commit: nur die zur Phase gehoerenden Dateien stage-en.
- Commit-SHA melden.
- Nicht pushen, mergen oder deployen, solange keine ausdrueckliche Freigabe vorliegt.
