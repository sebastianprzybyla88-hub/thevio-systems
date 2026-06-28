/**
 * Thevio Systems — main.js
  * Ausschliesslich: Mobile Navigation (Hamburger-Menue)
   * Kein Tracking, keine Animationen, keine externen Scripts
    */

    (function () {
      'use strict';

        const toggle = document.getElementById('nav-toggle');
          const mobileMenu = document.getElementById('nav-mobile');

            if (!toggle || !mobileMenu) return;

              // Menue oeffnen / schliessen
                function openMenu() {
                    mobileMenu.classList.add('is-open');
                        toggle.setAttribute('aria-expanded', 'true');
                          }

                            function closeMenu() {
                                mobileMenu.classList.remove('is-open');
                                    toggle.setAttribute('aria-expanded', 'false');
                                      }

                                        function toggleMenu() {
                                            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
                                                if (isOpen) {
                                                      closeMenu();
                                                          } else {
                                                                openMenu();
                                                                    }
                                                                      }

                                                                        // Toggle bei Button-Klick
                                                                          toggle.addEventListener('click', toggleMenu);

                                                                            // Menue schliessen bei Escape-Taste
                                                                              document.addEventListener('keydown', function (e) {
                                                                                  if (e.key === 'Escape') {
                                                                                        closeMenu();
                                                                                              toggle.focus();
                                                                                                  }
                                                                                                    });
                                                                                                    
                                                                                                      // Menue schliessen wenn ein Navigationslink geklickt wird
                                                                                                        const mobileLinks = mobileMenu.querySelectorAll('a');
                                                                                                          mobileLinks.forEach(function (link) {
                                                                                                              link.addEventListener('click', closeMenu);
                                                                                                                });
                                                                                                                
                                                                                                                  // Nav-Shadow beim Scrollen
                                                                                                                    const nav = document.querySelector('.site-nav');
                                                                                                                      if (nav) {
                                                                                                                          window.addEventListener('scroll', function () {
                                                                                                                                if (window.scrollY > 10) {
                                                                                                                                        nav.classList.add('scrolled');
                                                                                                                                              } else {
                                                                                                                                                      nav.classList.remove('scrolled');
                                                                                                                                                            }
                                                                                                                                                                }, { passive: true });
                                                                                                                                                                  }
                                                                                                                                                                  
                                                                                                                                                                  })();
