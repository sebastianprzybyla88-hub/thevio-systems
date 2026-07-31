/**
* Thevio Systems -- main.js
* Mobile Navigation, Scroll-Reveal (IntersectionObserver) und
* dezenter Prozess-Zyklus. Kein Tracking, keine externen Scripts.
* Respektiert prefers-reduced-motion vollstaendig.
*/

(function () {
'use strict';

var toggle = document.getElementById('nav-toggle');
var mobileMenu = document.getElementById('nav-mobile');

if (toggle && mobileMenu) {
function openMenu() {
mobileMenu.classList.add('is-open');
toggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
mobileMenu.classList.remove('is-open');
toggle.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
var isOpen = toggle.getAttribute('aria-expanded') === 'true';
if (isOpen) {
closeMenu();
} else {
openMenu();
}
}

toggle.addEventListener('click', toggleMenu);

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') {
closeMenu();
toggle.focus();
}
});

var mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(function (link) {
link.addEventListener('click', closeMenu);
});
}

var nav = document.querySelector('.site-nav');
if (nav) {
window.addEventListener('scroll', function () {
if (window.scrollY > 10) {
nav.classList.add('scrolled');
} else {
nav.classList.remove('scrolled');
}
}, { passive: true });
}

var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

var revealTargets = document.querySelectorAll('.reveal');
if (revealTargets.length) {
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
} else {
var revealObserver = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
revealObserver.unobserve(entry.target);
}
});
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(function (el) { revealObserver.observe(el); });
}
}

})();


/**
* Experience Redesign: Thevio Process Pulse
* Eigenstaendige Zustandsautomaten je Sektion -- Hero, Funktionsprinzip,
* Transformation, Resolution, Zielgruppen, Triovo-Demo, Triovo-Pfad und
* Abschluss besitzen jeweils eine eigene Instanz und eigenen Zustand.
* Kein globaler, sektionsuebergreifender Index. Auto-Advance nur bei
* Sichtbarkeit, Pause bei Hover/Fokus/Touch/Tab-Wechsel und nach
* manueller Auswahl. Vollstaendige Bedienbarkeit ohne Animation.
*/
(function () {
'use strict';

var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var hasHoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function setPulse(container, activeEl, dotSelector) {
if (!container) { return; }
var dots = container.querySelectorAll(dotSelector);
dots.forEach(function (d) { d.classList.remove('pulse-dot'); });
if (activeEl) {
var dot = activeEl.querySelector(dotSelector);
if (dot) { dot.classList.add('pulse-dot'); }
}
}

function Stepper(config) {
this.root = config.root;
this.items = config.items || [];
this.controls = config.controls || [];
this.count = this.items.length || this.controls.length;
this.interval = config.interval || 3200;
this.loopOnce = !!config.loopOnce;
this.autoplay = config.autoplay !== false && !reducedMotion;
this.onActivate = config.onActivate || function () {};
this.resumeDelay = config.resumeDelay || 7000;
this.index = 0;
this.timer = null;
this.resumeTimer = null;
this.manuallyPaused = false;
this.visible = false;
this.finishedOnce = false;
this.observerThreshold = config.observerThreshold || 0.2;
this._bind();
this._observe();
this.activate(0, false);
if (this.autoplay && (!this.root || this.visible)) { this.resume(); }
}

Stepper.prototype._bind = function () {
var self = this;
this.controls.forEach(function (btn, i) {
btn.addEventListener('click', function () {
self.activate(i, true);
self.pauseForInteraction();
});
btn.addEventListener('keydown', function (e) {
var last = self.controls.length - 1;
var n = null;
if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { n = i === last ? 0 : i + 1; }
else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { n = i === 0 ? last : i - 1; }
if (n !== null) {
e.preventDefault();
self.controls[n].focus();
self.activate(n, true);
self.pauseForInteraction();
}
});
});
if (this.root) {
if (hasHoverPointer) {
self.root.addEventListener('mouseenter', function () { self.pause(); }, { passive: true });
self.root.addEventListener('mouseleave', function () { self.resumeSoon(); }, { passive: true });
}
self.root.addEventListener('focusin', function () { self.pause(); }, { passive: true });
self.root.addEventListener('focusout', function () { self.resumeSoon(); }, { passive: true });
}
document.addEventListener('visibilitychange', function () {
if (document.hidden) {
self.pause();
if (self.resumeTimer) { window.clearTimeout(self.resumeTimer); self.resumeTimer = null; }
}
else if (self.visible && !self.manuallyPaused) { self.resume(); }
});
};

Stepper.prototype._observe = function () {
var self = this;
if (!this.root || !('IntersectionObserver' in window)) { this.visible = true; return; }
var io = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
self.visible = entry.isIntersecting;
if (self.visible && self.autoplay && !self.manuallyPaused && !(self.loopOnce && self.finishedOnce)) {
self.resume();
} else {
self.pause();
}
});
}, { threshold: this.observerThreshold});
io.observe(this.root);
};

Stepper.prototype.activate = function (i, manual) {
this.index = i;
this.items.forEach(function (el, idx) {
if (idx === i) { el.classList.add('is-active'); } else { el.classList.remove('is-active'); }
});
this.controls.forEach(function (btn, idx) {
var attr = btn.hasAttribute('aria-pressed') ? 'aria-pressed' : (btn.hasAttribute('aria-selected') ? 'aria-selected' : null);
if (attr) { btn.setAttribute(attr, idx === i ? 'true' : 'false'); }
if (btn.getAttribute('role') === 'tab') { btn.tabIndex = idx === i ? 0 : -1; }
});
this.onActivate(i, manual);
};

Stepper.prototype.next = function () {
var n = this.index + 1;
if (n >= this.count) {
if (this.loopOnce) { this.finishedOnce = true; this.pause(); return; }
n = 0;
}
this.activate(n, false);
};

Stepper.prototype.resume = function () {
if (!this.autoplay || this.manuallyPaused || (this.loopOnce && this.finishedOnce)) { return; }
this.pause();
var self = this;
this.timer = window.setInterval(function () { self.next(); }, this.interval);
};

Stepper.prototype.pause = function () {
if (this.timer) { window.clearInterval(this.timer); this.timer = null; }
};

Stepper.prototype.pauseForInteraction = function () {
this.manuallyPaused = true;
this.pause();
this.resumeSoon();
};

Stepper.prototype.resumeSoon = function () {
var self = this;
if (this.resumeTimer) { window.clearTimeout(this.resumeTimer); }
if (!this.autoplay) { return; }
this.resumeTimer = window.setTimeout(function () {
self.manuallyPaused = false;
if (self.visible && !document.hidden) { self.resume(); }
}, this.resumeDelay);
};

window.ThevioStepper = Stepper;

/* Hero: lebende Prozess-Szene (eigener Loop-Zustand) */
(function () {
var scene = document.getElementById('hero-scene');
if (!scene) { return; }
var rows = Array.prototype.slice.call(scene.querySelectorAll('.hero-row'));
var controls = Array.prototype.slice.call(scene.querySelectorAll('.hero-phase-btn'));
var statusLine = scene.querySelector('.hero-system-line');
var statusTexts = [
'Eingang erkannt',
'Angaben geprüft',
'Vorgang eingeordnet',
'Route bestimmt',
'Freigabe bestätigt',
'Bearbeitung vorbereitet',
'Abschluss dokumentiert'
];
var stepper = new Stepper({
root: scene,
items: rows,
controls: controls,
interval: 1500,
autoplay: true,
onActivate: function (i) {
rows.forEach(function (r, idx) {
if (idx < i) { r.classList.add('is-done'); } else if (idx !== i) { r.classList.remove('is-done'); }
});
setPulse(scene, rows[i], '.hero-row-dot');
if (statusLine && statusTexts[i]) { statusLine.textContent = statusTexts[i]; }
}
});
if (reducedMotion) {
var last = rows.length - 1;
stepper.activate(last, false);
rows.forEach(function (r) { r.classList.add('is-done'); });
setPulse(scene, rows[last], '.hero-row-dot');
}
})();

/* Funktionsprinzip: Prozess-Stepper (eigener Auto-Advance-Zustand) */
(function () {
var wrap = document.querySelector('[data-component="process-stepper"]');
if (!wrap) { return; }
var tabs = Array.prototype.slice.call(wrap.querySelectorAll('.process-tab'));
var panels = Array.prototype.slice.call(wrap.querySelectorAll('.process-panel-body'));
var panelEl = wrap.querySelector('.process-panel');
new Stepper({
root: wrap,
items: panels,
controls: tabs,
interval: 4200,
autoplay: true,
observerThreshold: 0.05,
onActivate: function (i) {
if (panelEl && tabs[i]) { panelEl.setAttribute('aria-labelledby', tabs[i].id); }
  if (tabs[i] && window.innerWidth < 640) {
    tabs[i].scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
  }
}
});
})();

/* Process Engine: sichtbarer Signalpfad mit eigener Sequenz */
(function () {
var engine = document.querySelector('[data-component="process-engine"]');
if (!engine) { return; }
var nodes = Array.prototype.slice.call(engine.querySelectorAll('.engine-node'));
var gate = engine.querySelector('[data-engine-gate]');
var status = engine.querySelector('.engine-status');
var phases = [
{ label: 'Eingang erkannt', step: 0 },
{ label: 'Angaben geprüft', step: 1 },
{ label: 'Daten eingeordnet', step: 2 },
{ label: 'Zuständigkeit bestimmt', step: 3 },
{ label: 'Menschliche Freigabe bestätigt', step: 4 },
{ label: 'Bearbeitung vorbereitet', step: 5 },
{ label: 'Abschluss dokumentiert', step: 6 }
];
var index = 0;
var timer = null;
var resumeTimer = null;
var visible = false;
var manualPause = false;

function render(i) {
index = i;
engine.setAttribute('data-phase', String(i));
nodes.forEach(function (node) {
var step = Number(node.getAttribute('data-engine-step'));
node.classList.toggle('is-active', step === i);
node.classList.toggle('is-complete', step < i || i === phases.length - 1);
node.setAttribute('aria-pressed', step === i ? 'true' : 'false');
});
if (gate) {
gate.classList.toggle('is-active', i === 4);
gate.classList.toggle('is-complete', i > 4 || i === phases.length - 1);
}
if (status && phases[i]) { status.textContent = phases[i].label; }
}

function stop() {
if (timer) { window.clearInterval(timer); timer = null; }
}

function start() {
if (reducedMotion || manualPause || !visible || document.hidden) { return; }
stop();
timer = window.setInterval(function () {
render((index + 1) % phases.length);
}, 1050);
}

function restartSoon() {
if (resumeTimer) { window.clearTimeout(resumeTimer); }
manualPause = true;
stop();
resumeTimer = window.setTimeout(function () {
manualPause = false;
start();
}, 6400);
}

nodes.forEach(function (node) {
node.setAttribute('aria-pressed', 'false');
node.addEventListener('click', function () {
render(Number(node.getAttribute('data-engine-step')));
restartSoon();
});
});

document.addEventListener('visibilitychange', function () {
if (document.hidden) {
stop();
if (resumeTimer) { window.clearTimeout(resumeTimer); resumeTimer = null; }
engine.classList.add('is-paused');
} else {
engine.classList.remove('is-paused');
start();
}
});

if (reducedMotion) {
visible = true;
render(phases.length - 1);
return;
}
if (!('IntersectionObserver' in window)) {
visible = true;
render(0);
start();
return;
}
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
visible = entry.isIntersecting;
if (visible) { engine.classList.remove('is-paused'); start(); }
else { engine.classList.add('is-paused'); stop(); }
});
}, { threshold: 0.28 });
observer.observe(engine);
render(0);
})();

  /* Leistungen: verbundene Systemebenen mit automatisch laufendem Signal */
  (function () {
    var system = document.querySelector('[data-component="capability-system"]');
    if (!system) { return; }
    var nodes = Array.prototype.slice.call(system.querySelectorAll('.capability-node'));
    new Stepper({
      root: system,
      items: nodes,
      interval: 2800,
      autoplay: true,
      observerThreshold: 0.15,
      onActivate: function (i) {
        system.setAttribute('data-active', String(i));
        nodes.forEach(function (node, idx) {
          if (idx === i) { node.setAttribute('aria-current', 'step'); }
          else { node.removeAttribute('aria-current'); }
        });
        setPulse(system, nodes[i], '.capability-node-signal');
      }
    });
  })();

/* Transformation: einmalige Szene beim Eintritt in den Viewport */
(function () {
var scene = document.querySelector('.transformation-scene[data-component="transform-scene"]');
if (!scene) { return; }
function activateScene() { scene.classList.add('is-active'); }
if (reducedMotion || !('IntersectionObserver' in window)) { activateScene(); return; }
var io = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) { activateScene(); io.unobserve(entry.target); }
});
}, { threshold: 0.4 });
io.observe(scene);
})();

/* Controlled Transformation: einmal sichtbare Systemumwandlung mit Replay */
(function () {
var scene = document.querySelector('[data-component="controlled-transformation"]');
if (!scene) { return; }
var section = scene.closest('section');
var replay = section ? section.querySelector('[data-transform-replay]') : null;
var visible = false;
var completeTimer = null;
var hasPlayed = false;

function clearCompleteTimer() {
if (completeTimer) { window.clearTimeout(completeTimer); completeTimer = null; }
}

function complete() {
scene.classList.remove('is-running');
scene.classList.add('is-complete');
hasPlayed = true;
clearCompleteTimer();
}

function play(force) {
if (reducedMotion) { complete(); return; }
if (!visible || document.hidden || (!force && hasPlayed)) { return; }
clearCompleteTimer();
scene.classList.remove('is-complete', 'is-paused', 'is-running');
void scene.offsetWidth;
scene.classList.add('is-running');
completeTimer = window.setTimeout(complete, 9200);
}

if (replay) {
replay.addEventListener('click', function () {
hasPlayed = false;
play(true);
});
}

document.addEventListener('visibilitychange', function () {
if (document.hidden) {
scene.classList.add('is-paused');
clearCompleteTimer();
} else if (visible && scene.classList.contains('is-running')) {
play(true);
} else if (visible && !hasPlayed) {
play(false);
}
});

if (reducedMotion) {
visible = true;
complete();
return;
}
if (!('IntersectionObserver' in window)) {
visible = true;
play(false);
return;
}
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
visible = entry.isIntersecting;
if (visible) { play(false); }
else {
scene.classList.add('is-paused');
clearCompleteTimer();
}
});
}, { threshold: 0.25 });
observer.observe(scene);
})();

/* Resolution Principle: einmalige, kumulative Sequenz */
(function () {
var seq = document.querySelector('.resolution-sequence[data-component="resolution-sequence"]');
if (!seq) { return; }
var steps = Array.prototype.slice.call(seq.querySelectorAll('.resolution-step'));
var played = false;
function play() {
if (played) { return; }
played = true;
var visual = document.querySelector('[data-component="resolution-visual"]');
if (visual) { visual.classList.add('is-active'); }
if (reducedMotion) {
steps.forEach(function (s) { s.classList.add('is-active'); });
setPulse(seq, steps[steps.length - 1], '.resolution-step-dot');
return;
}
steps.forEach(function (step, i) {
window.setTimeout(function () {
step.classList.add('is-active');
setPulse(seq, step, '.resolution-step-dot');
}, i * 550);
});
}
if (!('IntersectionObserver' in window)) { play(); return; }
var io = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) { if (entry.isIntersecting) { play(); io.unobserve(entry.target); } });
}, { threshold: 0.5 });
io.observe(seq);
})();

/* Zielgruppen: primaer Benutzersteuerung, langsame Demonstration bis zur ersten Interaktion */
(function () {
var map = document.querySelector('[data-component="scenario-demo"]');
if (!map || reducedMotion) { return; }
var details = Array.prototype.slice.call(map.querySelectorAll('.scenario-details'));
if (details.length < 2) { return; }
var idx = 0;
var userInteracted = false;
var timer = null;
  var visible = false;
  function startDemo() {
    if (timer || userInteracted || !visible) { return; }
    timer = window.setInterval(tick, 5200);
  }
  function stopDemo() {
    if (timer) { window.clearInterval(timer); timer = null; }
  }
  function tick() {
    if (userInteracted) { stopDemo(); return; }
    idx = (idx + 1) % details.length;
    details[idx].open = true;
  }
  details.forEach(function (d, i) {
    var summary = d.querySelector('.scenario-summary');
    if (!summary) { return; }
    ['click', 'keydown'].forEach(function (evt) {
      summary.addEventListener(evt, function () {
        userInteracted = true;
        idx = i;
        stopDemo();
      });
    });
  });
  if (!('IntersectionObserver' in window)) { return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      visible = entry.isIntersecting;
      if (visible) { startDemo(); } else { stopDemo(); }
    });
  }, { threshold: 0.5 });
  io.observe(map);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { stopDemo(); } else { startDemo(); }
  });
})();

/* Triovo: kontrollierte Produktfuehrung (einmaliger Durchlauf, danach Benutzersteuerung) */
(function () {
var demo = document.querySelector('[data-component="triovo-demo"]');
if (!demo) { return; }
var tabs = Array.prototype.slice.call(demo.querySelectorAll('.triovo-demo-step'));
var callouts = Array.prototype.slice.call(demo.querySelectorAll('.triovo-demo-callout'));
var caption = demo.querySelector('.triovo-demo-step-text');
var texts = [
'Ein Anliegen wird strukturiert eingereicht \u2013 Ausgangspunkt jedes Vorgangs.',
'Angaben werden auf Vollständigkeit geprüft, bevor der Fall weiterläuft.',
'Die KI-Triage ordnet Kategorie und Priorität automatisch ein.',
'Der Fall erscheint strukturiert im Business-Dashboard.',
'Die Bearbeitung wird vorbereitet, alle Informationen liegen gebündelt vor.',
'Resolution Score und Abschlussstatus machen die Wirkung sichtbar.'
];
new Stepper({
root: demo,
items: callouts,
controls: tabs,
interval: 3600,
loopOnce: true,
autoplay: true,
onActivate: function (i) {
if (caption && texts[i]) { caption.textContent = texts[i]; }
}
});
})();

/* Triovo: technische Eigenleistung (einmalige Sequenz, danach Benutzersteuerung) */
(function () {
var pathWrap = document.querySelector('[data-component="triovo-path"]');
if (!pathWrap) { return; }
var tabs = Array.prototype.slice.call(pathWrap.querySelectorAll('.triovo-path-btn'));
var panels = Array.prototype.slice.call(pathWrap.querySelectorAll('.triovo-path-body'));
new Stepper({
root: pathWrap,
items: panels,
controls: tabs,
interval: 4200,
loopOnce: true,
autoplay: true
});
})();

/* Abschluss: ruhige, gestaffelte Bestaetigung beim Eintritt in den Viewport */
(function () {
var list = document.querySelector('.abschluss-status-list');
if (!list) { return; }
var items = Array.prototype.slice.call(list.querySelectorAll('.abschluss-status-item'));
items.forEach(function (item, i) { item.style.transitionDelay = reducedMotion ? '0s' : (i * 0.25) + 's'; });
function activate() { list.classList.add('is-visible'); }
if (reducedMotion || !('IntersectionObserver' in window)) { activate(); return; }
var io = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) { if (entry.isIntersecting) { activate(); io.unobserve(entry.target); } });
}, { threshold: 0.5 });
io.observe(list);
})();

})();
