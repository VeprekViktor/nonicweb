/* =========================================
   NoNic — Brand Website
   Interactions & Animations v2
   ========================================= */

(function () {
  'use strict';

  // --- Navigation ---
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function handleNavScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('is-active');
    navLinks.classList.toggle('is-open');
    document.body.style.overflow = navLinks.classList.contains('is-open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('is-active');
      navLinks.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // --- Smooth scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // --- Reveal on scroll ---
  function setupReveal() {
    var revealElements = document.querySelectorAll(
      '.section__label, .section__title, .section__intro, .section__body, ' +
      '.story__product-scene, .founder, .mission__card, .mission__text, ' +
      '.product__pillar, .product__detail, ' +
      '.product__hero, .product__lead, ' +
      '.shop__card, .partners__point, .partners__card, ' +
      '.contact__form, .contact__info, .hero__eyebrow, .hero__title, ' +
      '.hero__subtitle, .hero__actions'
    );

    revealElements.forEach(function (el) {
      el.classList.add('reveal');
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var parent = entry.target.parentElement;
            var siblings = Array.from(parent ? parent.children : []).filter(function (c) {
              return c.classList.contains('reveal');
            });
            var index = siblings.indexOf(entry.target);
            var delay = Math.min(index * 80, 400);

            setTimeout(function () {
              entry.target.classList.add('is-visible');
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Global curves entrance animation ---
  function animateCurvesEntrance() {
    var gcPaths = document.querySelectorAll('.gc');
    if (!gcPaths.length) return;

    gcPaths.forEach(function (path) {
      // Measure actual SVG path length for stroke-dasharray draw-in
      var length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.setProperty('--path-length', length);
    });

    // Trigger draw-in with a small delay so the browser registers the initial state
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        gcPaths.forEach(function (path) {
          path.classList.add('is-drawn');
        });
      });
    });
  }

  // --- Global scroll-reactive curves ---
  function setupGlobalCurves() {
    var globalSvg = document.querySelector('.global-curves__svg');
    if (!globalSvg) return;

    var gcPaths = document.querySelectorAll('.gc');
    if (!gcPaths.length) return;

    // Start entrance animation
    animateCurvesEntrance();

    // Get page height for mapping
    var pageHeight = document.documentElement.scrollHeight;
    var viewHeight = window.innerHeight;

    // Each curve gets slight individual parallax offset based on speed class
    var speeds = {
      slow: 0.15,
      medium: 0.25
    };

    var time = 0;

    function updateCurves() {
      var scrollY = window.scrollY;
      var scrollFraction = scrollY / (pageHeight - viewHeight);

      // Move the entire SVG based on scroll to create parallax
      // The SVG is taller than viewport, so we translate it upward as user scrolls
      var svgTranslateY = -scrollFraction * (pageHeight * 0.6);
      globalSvg.style.transform = 'translateY(' + svgTranslateY + 'px)';

      // Add per-path micro-offsets for depth + gentle sway
      time += 0.008;

      gcPaths.forEach(function (path, i) {
        var isSlow = path.classList.contains('gc--slow');
        var speed = isSlow ? speeds.slow : speeds.medium;

        // Parallax offset per path
        var parallaxY = scrollY * speed * (i % 2 === 0 ? 1 : -1) * 0.05;

        // Gentle horizontal sway
        var swayX = Math.sin(time + i * 0.7) * 6;
        var swayY = Math.cos(time + i * 0.5) * 4;

        path.style.transform = 'translate(' + swayX + 'px, ' + (parallaxY + swayY) + 'px)';
      });

      requestAnimationFrame(updateCurves);
    }

    // Recalculate page height on resize
    window.addEventListener('resize', function () {
      pageHeight = document.documentElement.scrollHeight;
      viewHeight = window.innerHeight;
    });

    requestAnimationFrame(updateCurves);
  }

  // --- Section background curves parallax ---
  function setupSectionCurves() {
    var sectionBgs = document.querySelectorAll('.section__curves-bg');

    // Trigger draw-in when sections scroll into view
    var sectionsWithCurves = document.querySelectorAll('.section');
    var curveObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-curves-visible');
            curveObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionsWithCurves.forEach(function (s) {
      curveObserver.observe(s);
    });

    function updateSectionCurves() {
      sectionBgs.forEach(function (bg) {
        var rect = bg.getBoundingClientRect();
        var vh = window.innerHeight;
        if (rect.top < vh && rect.bottom > 0) {
          var progress = (vh - rect.top) / (vh + rect.height);
          var offsetY = (progress - 0.5) * 40;
          var svg = bg.querySelector('.section-bg-svg');
          if (svg) {
            svg.style.transform = 'translateY(' + offsetY + 'px) scale(1.05)';
          }
        }
      });
    }

    window.addEventListener('scroll', updateSectionCurves, { passive: true });
    updateSectionCurves();
  }

  // --- Product scroll rotation ---
  function setupProductRotation() {
    var productWrap = document.getElementById('storyProduct');
    if (!productWrap) return;

    var shadow = productWrap.parentElement.querySelector('.story__product-shadow');
    var scene = productWrap.parentElement;

    function updateRotation() {
      var rect = scene.getBoundingClientRect();
      var vh = window.innerHeight;

      // Only animate when in viewport
      if (rect.top > vh || rect.bottom < 0) {
        requestAnimationFrame(updateRotation);
        return;
      }

      // Progress: 0 = entering bottom, 0.5 = center, 1 = leaving top
      var progress = (vh - rect.top) / (vh + rect.height);

      // Rotation: tilt Y from -15° to +15° as you scroll through
      var rotateY = (progress - 0.5) * 30;

      // Gentle tilt X based on scroll
      var rotateX = (progress - 0.5) * -8;

      // Slight scale pulse at center
      var distFromCenter = Math.abs(progress - 0.5);
      var scale = 1 + (1 - distFromCenter * 2) * 0.04;

      // Gentle float up/down
      var translateY = Math.sin(progress * Math.PI) * -12;

      productWrap.style.transform =
        'rotateY(' + rotateY + 'deg) ' +
        'rotateX(' + rotateX + 'deg) ' +
        'translateY(' + translateY + 'px) ' +
        'scale(' + scale + ')';

      // Shadow reacts to tilt
      if (shadow) {
        var shadowScale = 1 - Math.abs(rotateY) / 40;
        var shadowX = rotateY * 0.5;
        shadow.style.transform = 'scaleX(' + shadowScale + ') translateX(' + shadowX + 'px)';
        shadow.style.opacity = (0.6 + shadowScale * 0.4).toString();
      }

      requestAnimationFrame(updateRotation);
    }

    requestAnimationFrame(updateRotation);
  }

  // --- Contact form feedback ---
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('.btn');
      btn.textContent = 'Odesláno';
      btn.style.background = '#4A7C59';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Odeslat zprávu';
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // --- Active nav link highlight ---
  function setupActiveNav() {
    var sections = document.querySelectorAll('.section[id], .hero[id]');
    var navLinksAll = document.querySelectorAll('.nav__link[href^="#"]');

    function update() {
      var scrollY = window.scrollY + 120;
      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          navLinksAll.forEach(function (link) {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + id) {
              link.style.color = '#1A1A1A';
            }
          });
        }
      });
    }
    window.addEventListener('scroll', update, { passive: true });
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', function () {
    setupReveal();
    setupGlobalCurves();
    setupSectionCurves();
    setupProductRotation();
    setupActiveNav();
  });
})();
