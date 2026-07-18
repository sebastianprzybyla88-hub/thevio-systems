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
