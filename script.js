/* =========================================
   NoNic — Brand Website
   Interactions, i18n & Animations v3
   ========================================= */

(function () {
  'use strict';

  // =========================================
  // Translations
  // =========================================
  var translations = {
    cs: {
      nav_story: 'Příběh', nav_founders: 'Zakladatelé', nav_mission: 'Proč',
      nav_product: 'Produkt', nav_shop: 'Obchod', nav_partners: 'Spolupráce', nav_contact: 'Kontakt',
      hero_eyebrow: 'Nová generace alternativy',
      hero_title: 'Alternativa,<br>která nahrazuje návyk',
      hero_subtitle: 'Designovaný objekt bez nikotinu, bez elektroniky, bez kompromisů.<br>Jiná forma. Stejný pocit.',
      hero_btn_product: 'Prozkoumat produkt', hero_btn_story: 'Jak vznikl', hero_scroll: 'Scroll',
      story_label: '01 — Příběh',
      story_title: 'Návyk má svou formu.<br>My jsme jí dali novou.',
      story_body_1: 'Lidé vapují a kouří z různých důvodů. Ale jeden motiv se opakuje — potřeba mít něco v ruce, gesto, návyk. NoNic vznikl jako odpověď na tuhle potřebu. Bez nikotinu, bez elektroniky.',
      story_body_2: 'Žádná další náhražka. Promyšlený produkt, který dává každodennímu návyku jinou podobu. Jednoduchou, čistou a bez kompromisů.',
      story_body_3: 'Z pozorování trhu a reálné potřeby vznikla značka s vlastním designovým jazykem a jasným směrem.',
      founders_label: '02 — Zakladatelé', founders_title: 'Tým za produktem',
      founders_intro: 'Dva lidé. Jasný koncept. Produkt, který má směr od prvního dne.',
      founder_1_role: 'Vize & strategie',
      founder_1_desc: 'Směr značky, obchodní strategie a positioning. Propojuje koncept s trhem a řídí růst projektu.',
      founder_2_role: 'Produkt & design',
      founder_2_desc: 'Vizuální identita, produkt a komunikace. Definuje, jak NoNic vypadá, jak se drží a jak mluví.',
      mission_label: '03 — Proč existujeme',
      mission_title: 'Trh plný náhražek.<br>Žádná skutečná alternativa.',
      mission_body_1: 'Vapování, nikotinové sáčky, e-cigarety. Segment roste, ale nabídka se točí v kruhu — jiná forma stejné závislosti. Chyběl produkt, který řeší návyk z druhé strany. Ne chemicky. Formou.',
      mission_body_2: 'NoNic vznikl z přesvědčení, že většina lidí nehledá další nikotinový produkt. Hledá způsob, jak si zachovat gesto, pocit a každodenní formu — bez toho, co k ní dosud patřilo.',
      mission_body_3: 'Nejsme proti ničemu. Jsme pro jinou možnost. Promyšlenou, současnou a bez zbytečných příslibů.',
      mission_quote: 'Nechtěli jsme vytvořit další náhražku. Chtěli jsme vytvořit jinou kategorii.',
      mission_role: 'Zakladatelé NoNic',
      product_label: '04 — Produkt',
      product_title: 'Jeden objekt.<br>Nová kategorie.',
      product_lead: 'NoNic je kompaktní pero navržené jako alternativa vapování a kouření. Bez nikotinu, bez elektroniky, bez nabíjení. Fyzický produkt, který zachovává formu návyku — a mění jeho obsah.',
      pillar_1_title: 'Forma, která sedne do ruky',
      pillar_1_text: 'Gesto. Pohyb. Pocit něčeho mezi prsty. Většina návyků není jen o obsahu — je o formě. NoNic je pero navržené tak, aby přirozeně nahradilo právě tento rozměr. Leží v ruce, funguje intuitivně, nevyžaduje vysvětlování.',
      pillar_2_title: 'Aromatická kompozice',
      pillar_2_text: 'Každé pero obsahuje vybranou aromatickou směs. Jemná, přirozená, bez umělých příchutí. Doplňuje formu o senzorický rozměr — tichý, ale zřetelný. Přesně to, co odlišuje NoNic od obyčejného předmětu.',
      pillar_3_title: 'Diskrétní a bez omezení',
      pillar_3_text: 'Žádná pára, žádné nabíjení, žádné pohledy. NoNic vypadá jako designový objekt — ne jako e-cigareta. Používejte ho v práci, na cestách, mezi lidmi. Kdykoliv a kdekoliv, bez vysvětlování.',
      detail_form_label: 'Forma', detail_form_value: 'Kompaktní pero, intuitivní držení',
      detail_aroma_label: 'Aroma', detail_aroma_value: 'Přírodní aromatická směs',
      detail_comp_label: 'Složení', detail_comp_value: '0 % nikotinu, 0 % elektroniky',
      detail_use_label: 'Použití', detail_use_value: 'Bez omezení, bez nabíjení, bez údržby',
      shop_label: '05 — Obchod', shop_title: 'Čtyři barvy. Jeden standard.',
      shop_intro: 'Vyberte si barvu, která vám odpovídá. Brzy dostupné.',
      shop_red: 'Červená', shop_blue: 'Modrá', shop_green: 'Zelená', shop_pink: 'Růžová',
      shop_price: 'BRZY',
      shop_notify: 'Upozornit', shop_submit: 'Odeslat', shop_email_placeholder: 'Váš e-mail',
      partners_label: '06 — Spolupráce',
      partners_title: 'Otevřeni spolupráci.<br>Připraveni na scale.',
      partners_body: 'NoNic je hotový koncept — produkt, identita, positioning. Hledáme partnery pro distribuci, růst a vstup na nové trhy.',
      partners_point_1: 'Definovaná značka a vizuální systém',
      partners_point_2: 'Hotový produkt připravený k distribuci',
      partners_point_3: 'Jasný tržní positioning',
      partners_point_4: 'Škálovatelný obchodní model',
      partners_card_1_title: 'Investice a distribuce',
      partners_card_1_text: 'Máte zájem o distribuci, investici nebo strategické partnerství? Pojďme to probrat.',
      partners_card_1_btn: 'Domluvit schůzku',
      partners_card_2_title: 'Kolaborace a edice',
      partners_card_2_text: 'Limitované edice, co-brandingy, kreativní projekty. Jsme otevření.',
      partners_card_2_btn: 'Napište nám',
      contact_label: '07 — Kontakt',
      contact_title: 'Ozvěte se.<br>Odpovídáme.',
      contact_body: 'Produkt, spolupráce, distribuce — ať je to cokoliv, jsme tady.',
      form_name: 'Jméno', form_email: 'E-mail', form_interest: 'Zájem o', form_message: 'Zpráva',
      form_select_default: 'Vyberte...', form_select_product: 'Produkt',
      form_select_partnership: 'Partnerství', form_select_investment: 'Investice',
      form_select_creative: 'Kreativní spolupráce', form_select_other: 'Jiné',
      form_submit: 'Odeslat zprávu', form_sent: 'Odesláno',
      footer_tagline: 'Alternativa, která nahrazuje návyk',
      footer_copy: '\u00A9 2025 NoNic. Všechna práva vyhrazena.',
      notify_success: '\u2713 Budeme vás informovat na ',
      notify_error: 'Zadejte platný e-mail'
    },
    en: {
      nav_story: 'Story', nav_founders: 'Founders', nav_mission: 'Why',
      nav_product: 'Product', nav_shop: 'Shop', nav_partners: 'Partners', nav_contact: 'Contact',
      hero_eyebrow: 'A new generation alternative',
      hero_title: 'The alternative<br>that replaces the habit',
      hero_subtitle: 'A designed object with no nicotine, no electronics, no compromises.<br>Different form. Same feeling.',
      hero_btn_product: 'Explore the product', hero_btn_story: 'How it started', hero_scroll: 'Scroll',
      story_label: '01 — Story',
      story_title: 'Habits have a form.<br>We gave them a new one.',
      story_body_1: 'People vape and smoke for many reasons. But one motive keeps repeating — the need to hold something, a gesture, a habit. NoNic was born as an answer to this need. No nicotine, no electronics.',
      story_body_2: 'Not another substitute. A thoughtful product that gives everyday habits a new shape. Simple, clean, and without compromise.',
      story_body_3: 'From market observation and real demand, a brand with its own design language and clear direction was born.',
      founders_label: '02 — Founders', founders_title: 'The team behind the product',
      founders_intro: 'Two people. A clear concept. A product with direction from day one.',
      founder_1_role: 'Vision & Strategy',
      founder_1_desc: 'Brand direction, business strategy and positioning. Connects the concept with the market and drives growth.',
      founder_2_role: 'Product & Design',
      founder_2_desc: 'Visual identity, product and communication. Defines how NoNic looks, feels and speaks.',
      mission_label: '03 — Why we exist',
      mission_title: 'A market full of substitutes.<br>No real alternative.',
      mission_body_1: 'Vaping, nicotine pouches, e-cigarettes. The segment is growing, but the offer goes in circles — a different form of the same addiction. There was no product solving the habit from the other side. Not chemically. Through form.',
      mission_body_2: 'NoNic was born from the belief that most people are not looking for another nicotine product. They are looking for a way to keep the gesture, the feeling, the everyday form — without what used to come with it.',
      mission_body_3: 'We are not against anything. We are for a different option. Thoughtful, contemporary, and without empty promises.',
      mission_quote: 'We didn\u2019t want to create another substitute. We wanted to create a different category.',
      mission_role: 'NoNic Founders',
      product_label: '04 — Product',
      product_title: 'One object.<br>A new category.',
      product_lead: 'NoNic is a compact pen designed as an alternative to vaping and smoking. No nicotine, no electronics, no charging. A physical product that preserves the form of the habit — and changes its content.',
      pillar_1_title: 'A form that fits in your hand',
      pillar_1_text: 'Gesture. Movement. The feeling of something between your fingers. Most habits are not just about content — they are about form. NoNic is a pen designed to naturally replace exactly this dimension. It sits in your hand, works intuitively, needs no explanation.',
      pillar_2_title: 'Aromatic composition',
      pillar_2_text: 'Each pen contains a selected aromatic blend. Subtle, natural, no artificial flavors. It adds a sensory dimension to the form — quiet but distinct. Exactly what sets NoNic apart from an ordinary object.',
      pillar_3_title: 'Discreet and unrestricted',
      pillar_3_text: 'No vapor, no charging, no stares. NoNic looks like a design object — not an e-cigarette. Use it at work, on the go, among people. Anytime and anywhere, without explanation.',
      detail_form_label: 'Form', detail_form_value: 'Compact pen, intuitive grip',
      detail_aroma_label: 'Aroma', detail_aroma_value: 'Natural aromatic blend',
      detail_comp_label: 'Composition', detail_comp_value: '0% nicotine, 0% electronics',
      detail_use_label: 'Usage', detail_use_value: 'No limits, no charging, no maintenance',
      shop_label: '05 — Shop', shop_title: 'Four colors. One standard.',
      shop_intro: 'Choose the color that suits you. Coming soon.',
      shop_red: 'Red', shop_blue: 'Blue', shop_green: 'Green', shop_pink: 'Pink',
      shop_price: 'SOON',
      shop_notify: 'Notify me', shop_submit: 'Submit', shop_email_placeholder: 'Your e-mail',
      partners_label: '06 — Partners',
      partners_title: 'Open to collaboration.<br>Ready to scale.',
      partners_body: 'NoNic is a complete concept — product, identity, positioning. We are looking for partners for distribution, growth, and entry into new markets.',
      partners_point_1: 'Defined brand and visual system',
      partners_point_2: 'Finished product ready for distribution',
      partners_point_3: 'Clear market positioning',
      partners_point_4: 'Scalable business model',
      partners_card_1_title: 'Investment & Distribution',
      partners_card_1_text: 'Interested in distribution, investment, or strategic partnership? Let\u2019s talk.',
      partners_card_1_btn: 'Schedule a meeting',
      partners_card_2_title: 'Collaborations & Editions',
      partners_card_2_text: 'Limited editions, co-brandings, creative projects. We are open.',
      partners_card_2_btn: 'Write to us',
      contact_label: '07 — Contact',
      contact_title: 'Get in touch.<br>We respond.',
      contact_body: 'Product, partnership, distribution — whatever it is, we are here.',
      form_name: 'Name', form_email: 'E-mail', form_interest: 'Interest', form_message: 'Message',
      form_select_default: 'Select...', form_select_product: 'Product',
      form_select_partnership: 'Partnership', form_select_investment: 'Investment',
      form_select_creative: 'Creative collaboration', form_select_other: 'Other',
      form_submit: 'Send message', form_sent: 'Sent',
      footer_tagline: 'The alternative that replaces the habit',
      footer_copy: '\u00A9 2025 NoNic. All rights reserved.',
      notify_success: '\u2713 We will notify you at ',
      notify_error: 'Enter a valid e-mail'
    }
  };

  var currentLang = localStorage.getItem('nonic-lang') || 'cs';
  var currencies = ['CZK', 'EUR', 'USD'];
  var currentCurrencyIndex = currencies.indexOf(localStorage.getItem('nonic-currency') || 'CZK');
  if (currentCurrencyIndex < 0) currentCurrencyIndex = 0;

  // =========================================
  // i18n — Apply translations
  // =========================================
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nonic-lang', lang);
    document.documentElement.lang = lang;

    var t = translations[lang];
    if (!t) return;

    // data-i18n = textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // data-i18n-html = innerHTML (for <br> tags)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    // Update lang label
    var label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'cs' ? 'CZ' : 'EN';

    // Update page title
    document.title = lang === 'cs'
      ? 'NoNic — Alternativa, která nahrazuje návyk'
      : 'NoNic — The alternative that replaces the habit';
  }

  // =========================================
  // Language Toggle
  // =========================================
  function setupLanguageToggle() {
    var btn = document.getElementById('langToggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var newLang = currentLang === 'cs' ? 'en' : 'cs';
      applyLanguage(newLang);
    });

    // Apply saved language
    applyLanguage(currentLang);
  }

  // =========================================
  // Currency Toggle
  // =========================================
  function setupCurrencyToggle() {
    var btn = document.getElementById('currencyToggle');
    var label = document.getElementById('currencyLabel');
    if (!btn || !label) return;

    label.textContent = currencies[currentCurrencyIndex];

    btn.addEventListener('click', function () {
      currentCurrencyIndex = (currentCurrencyIndex + 1) % currencies.length;
      var cur = currencies[currentCurrencyIndex];
      label.textContent = cur;
      localStorage.setItem('nonic-currency', cur);
    });
  }

  // =========================================
  // Navigation
  // =========================================
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

  // Smooth scroll
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

  // =========================================
  // Reveal on scroll
  // =========================================
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

    revealElements.forEach(function (el) { el.classList.add('reveal'); });

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
            setTimeout(function () { entry.target.classList.add('is-visible'); }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    revealElements.forEach(function (el) { observer.observe(el); });
  }

  // =========================================
  // Global curves entrance animation
  // =========================================
  function animateCurvesEntrance() {
    var gcPaths = document.querySelectorAll('.gc');
    if (!gcPaths.length) return;
    gcPaths.forEach(function (path) {
      var length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.setProperty('--path-length', length);
    });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        gcPaths.forEach(function (path) { path.classList.add('is-drawn'); });
      });
    });
  }

  function setupGlobalCurves() {
    // Skip on mobile — global SVG curves are hidden, CSS handles background curves
    if (window.innerWidth <= 768) return;

    var globalSvg = document.querySelector('.global-curves__svg');
    if (!globalSvg) return;
    var gcPaths = document.querySelectorAll('.gc');
    if (!gcPaths.length) return;
    animateCurvesEntrance();
    var pageHeight = document.documentElement.scrollHeight;
    var viewHeight = window.innerHeight;
    var speeds = { slow: 0.15, medium: 0.25 };
    var time = 0;

    function updateCurves() {
      var scrollY = window.scrollY;
      var scrollFraction = scrollY / (pageHeight - viewHeight);
      var svgTranslateY = -scrollFraction * (pageHeight * 0.6);
      globalSvg.style.transform = 'translateY(' + svgTranslateY + 'px)';
      time += 0.008;
      gcPaths.forEach(function (path, i) {
        var isSlow = path.classList.contains('gc--slow');
        var speed = isSlow ? speeds.slow : speeds.medium;
        var parallaxY = scrollY * speed * (i % 2 === 0 ? 1 : -1) * 0.05;
        var swayX = Math.sin(time + i * 0.7) * 6;
        var swayY = Math.cos(time + i * 0.5) * 4;
        path.style.transform = 'translate(' + swayX + 'px, ' + (parallaxY + swayY) + 'px)';
      });
      requestAnimationFrame(updateCurves);
    }

    window.addEventListener('resize', function () {
      pageHeight = document.documentElement.scrollHeight;
      viewHeight = window.innerHeight;
    });
    requestAnimationFrame(updateCurves);
  }

  // =========================================
  // Section background curves
  // =========================================
  function setupSectionCurves() {
    var isMobile = window.innerWidth <= 768;
    var sectionsWithCurves = document.querySelectorAll('.section');

    // IntersectionObserver for scroll-triggered curve reveal (both mobile & desktop)
    var curveObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-curves-visible');
            curveObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sectionsWithCurves.forEach(function (s) { curveObserver.observe(s); });

    if (isMobile) {
      // Mobile: parallax effect on body::before (global background curves)
      function updateMobileParallax() {
        var scrollY = window.scrollY;
        var docHeight = document.documentElement.scrollHeight;
        var viewHeight = window.innerHeight;
        var scrollFraction = scrollY / (docHeight - viewHeight);
        // Move background up as user scrolls (parallax)
        var translateY = -scrollFraction * viewHeight * 0.3;
        document.body.style.setProperty('--mobile-curve-y', translateY + 'px');
      }

      // Apply transform via a style we can update
      var style = document.createElement('style');
      style.textContent = '@media(max-width:768px){body::before{transform:translateY(var(--mobile-curve-y,0px))}}';
      document.head.appendChild(style);

      window.addEventListener('scroll', updateMobileParallax, { passive: true });
      updateMobileParallax();
      return;
    }

    // Desktop: SVG-based section curves with parallax
    var sectionBgs = document.querySelectorAll('.section__curves-bg');

    function updateSectionCurves() {
      sectionBgs.forEach(function (bg) {
        var rect = bg.getBoundingClientRect();
        var vh = window.innerHeight;
        if (rect.top < vh && rect.bottom > 0) {
          var progress = (vh - rect.top) / (vh + rect.height);
          var offsetY = (progress - 0.5) * 40;
          var svg = bg.querySelector('.section-bg-svg');
          if (svg) { svg.style.transform = 'translateY(' + offsetY + 'px) scale(1.05)'; }
        }
      });
    }
    window.addEventListener('scroll', updateSectionCurves, { passive: true });
    updateSectionCurves();
  }

  // =========================================
  // Product scroll rotation
  // =========================================
  function setupProductRotation() {
    // Skip 3D rotation on mobile for better performance
    if (window.innerWidth <= 768) return;

    var productWrap = document.getElementById('storyProduct');
    if (!productWrap) return;
    var shadow = productWrap.parentElement.querySelector('.story__product-shadow');
    var scene = productWrap.parentElement;

    function updateRotation() {
      var rect = scene.getBoundingClientRect();
      var vh = window.innerHeight;
      if (rect.top > vh || rect.bottom < 0) { requestAnimationFrame(updateRotation); return; }
      var progress = (vh - rect.top) / (vh + rect.height);
      var rotateY = (progress - 0.5) * 30;
      var rotateX = (progress - 0.5) * -8;
      var distFromCenter = Math.abs(progress - 0.5);
      var scale = 1 + (1 - distFromCenter * 2) * 0.04;
      var translateY = Math.sin(progress * Math.PI) * -12;
      productWrap.style.transform =
        'rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg) translateY(' + translateY + 'px) scale(' + scale + ')';
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

  // =========================================
  // Contact form feedback
  // =========================================
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('.btn');
      var t = translations[currentLang];
      btn.textContent = t.form_sent;
      btn.style.background = '#4A7C59';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = t.form_submit;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // =========================================
  // Active nav link highlight
  // =========================================
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
            if (link.getAttribute('href') === '#' + id) { link.style.color = 'var(--c-black)'; }
          });
        }
      });
    }
    window.addEventListener('scroll', update, { passive: true });
  }

  // =========================================
  // Dark Mode Toggle (now in nav)
  // =========================================
  function setupDarkMode() {
    var toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    var sunIcon = toggle.querySelector('.theme-icon--sun');
    var moonIcon = toggle.querySelector('.theme-icon--moon');

    var saved = localStorage.getItem('nonic-theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }

    toggle.addEventListener('click', function () {
      var isDark = document.body.classList.toggle('dark');
      localStorage.setItem('nonic-theme', isDark ? 'dark' : 'light');
      if (isDark) {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
      } else {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
      }
    });
  }

  // =========================================
  // Dark Mode — Logo Swap
  // =========================================
  function setupDarkModeLogo() {
    var navLogo = document.querySelector('.nav__logo-img');
    if (!navLogo) return;
    function updateLogo() {
      var isDark = document.body.classList.contains('dark');
      navLogo.src = isDark ? 'logo-white.png' : 'logo.png';
    }
    updateLogo();
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) { if (m.attributeName === 'class') updateLogo(); });
    });
    observer.observe(document.body, { attributes: true });
  }

  // =========================================
  // Device Preview Switcher
  // =========================================
  function setupPreviewBar() {
    // Preview bar only shows when ?mobile is in URL
    var params = new URLSearchParams(window.location.search);
    if (!params.has('mobile')) return;

    var bar = document.getElementById('previewBar');
    var frame = document.getElementById('previewFrame');
    var sizeLabel = document.getElementById('previewSize');
    if (!bar || !frame) return;

    var deviceButtons = bar.querySelectorAll('.preview-bar__btn[data-device]');
    var widths = { desktop: '100%', tablet: '768px', mobile: '390px' };
    var labels = { desktop: '1440px', tablet: '768px', mobile: '390px' };
    document.body.classList.add('has-preview-bar');

    deviceButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var device = btn.getAttribute('data-device');
        deviceButtons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        if (device === 'desktop') {
          document.body.classList.remove('is-previewing');
          document.body.removeAttribute('data-device');
          frame.style.maxWidth = '';
          if (sizeLabel) sizeLabel.textContent = labels.desktop;
        } else {
          document.body.classList.add('is-previewing');
          document.body.setAttribute('data-device', device);
          frame.style.maxWidth = widths[device];
          if (sizeLabel) sizeLabel.textContent = labels[device];
        }
      });
    });
    if (sizeLabel) sizeLabel.textContent = labels.desktop;
  }

  // =========================================
  // Editor Mode — URL key + password
  // =========================================
  function setupEditorMode() {
    var params = new URLSearchParams(window.location.search);
    if (!params.has('vepreknonic')) return;

    var password = prompt('Zadej heslo pro editor:');
    if (password !== '12345678910') {
      alert('Nesprávné heslo.');
      var cleanUrl = new URL(window.location);
      cleanUrl.searchParams.delete('vepreknonic');
      window.history.replaceState({}, '', cleanUrl.toString());
      return;
    }

    document.body.classList.add('is-editor');
    var editables = document.querySelectorAll('[data-editable]');

    editables.forEach(function (el) {
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('spellcheck', 'false');
      var originalHTML = el.innerHTML;
      el.addEventListener('input', function () {
        el.classList.toggle('is-changed', el.innerHTML !== originalHTML);
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          document.execCommand('insertLineBreak');
        }
      });
    });

    var saveBtn = document.getElementById('editorSave');
    if (saveBtn) {
      saveBtn.addEventListener('click', function () {
        var data = {};
        editables.forEach(function (el) { data[el.getAttribute('data-editable')] = el.innerHTML.trim(); });
        var json = JSON.stringify(data, null, 2);
        var blob = new Blob([json], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'nonic-content-' + new Date().toISOString().slice(0, 10) + '.json';
        a.click();
        URL.revokeObjectURL(url);
        saveBtn.style.background = '#4A7C59';
        saveBtn.style.borderColor = '#4A7C59';
        saveBtn.style.color = '#fff';
        setTimeout(function () { saveBtn.style.background = ''; saveBtn.style.borderColor = ''; saveBtn.style.color = ''; }, 1500);
      });
    }

    var closeBtn = document.getElementById('editorClose');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        document.body.classList.remove('is-editor');
        editables.forEach(function (el) { el.removeAttribute('contenteditable'); el.classList.remove('is-changed'); });
        var url = new URL(window.location);
        url.searchParams.delete('vepreknonic');
        window.history.replaceState({}, '', url.toString());
      });
    }
  }

  // =========================================
  // Shop — Watchdog / Notify Buttons
  // =========================================
  function setupShopNotify() {
    var notifyBtns = document.querySelectorAll('.shop__notify-btn');

    notifyBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var product = btn.getAttribute('data-product');
        var form = document.querySelector('.shop__notify-form[data-notify="' + product + '"]');
        if (!form) return;
        var isOpen = form.classList.contains('is-open');
        document.querySelectorAll('.shop__notify-form.is-open').forEach(function (f) { f.classList.remove('is-open'); });
        if (!isOpen) {
          form.classList.add('is-open');
          var input = form.querySelector('.shop__notify-input');
          if (input) input.focus();
        }
      });
    });

    document.querySelectorAll('.shop__notify-submit').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var product = btn.getAttribute('data-product');
        var form = document.querySelector('.shop__notify-form[data-notify="' + product + '"]');
        if (!form) return;
        var input = form.querySelector('.shop__notify-input');
        var email = input ? input.value.trim() : '';
        var t = translations[currentLang];

        if (!email || !email.includes('@')) {
          input.style.borderColor = '#C8352B';
          input.setAttribute('placeholder', t.notify_error);
          setTimeout(function () { input.style.borderColor = ''; input.setAttribute('placeholder', t.shop_email_placeholder); }, 2000);
          return;
        }

        form.innerHTML = '<p class="shop__notify-success">' + t.notify_success + email + '</p>';
        var stored = JSON.parse(localStorage.getItem('nonic-watchdog') || '{}');
        stored[product] = email;
        localStorage.setItem('nonic-watchdog', JSON.stringify(stored));
      });
    });
  }

  // =========================================
  // Init
  // =========================================
  document.addEventListener('DOMContentLoaded', function () {
    setupReveal();
    setupGlobalCurves();
    setupSectionCurves();
    setupProductRotation();
    setupActiveNav();
    setupDarkMode();
    setupDarkModeLogo();
    setupLanguageToggle();
    setupCurrencyToggle();
    setupPreviewBar();
    setupEditorMode();
    setupShopNotify();
  });
})();
