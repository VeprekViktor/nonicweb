/* =========================================
   NoNic — Brand Website
   Interactions, i18n & Animations v4
   Multi-page architecture
   ========================================= */

(function () {
  'use strict';

  // =========================================
  // Translations
  // =========================================
  var translations = {
    cs: {
      // Navigation
      nav_home: 'Domů', nav_shop: 'Obchod', nav_contact: 'Kontakt',

      // Hero
      hero_eyebrow: 'Nová generace alternativy',
      hero_title: 'Alternativa,<br>která nahrazuje návyk',
      hero_subtitle: 'Kompaktní pero bez nikotinu, bez elektroniky, bez kompromisů.<br>Jiná forma. Stejný pocit.',
      hero_btn_who: 'Kdo jsme?', hero_scroll: 'Scroll',

      // 4 steps (co-je-nonic)
      steps_label: 'Jak to funguje',
      steps_title: 'Čtyři kroky. Žádné komplikace.',
      step_1_title: 'Odšroubujte',
      step_1_text: 'Spodní část jednoduše odšroubujete.',
      step_2_title: 'Vložte jádro',
      step_2_text: 'Do pera zasunete aroma náplň ve zvolené variantě.',
      step_3_title: 'Uzavřete',
      step_3_text: 'Obě části znovu spojíte a pero je připravené.',
      step_4_title: 'Nadechněte se',
      step_4_text: 'Pak už jen inhalujete aroma podle potřeby.',

      // Story
      story_label: 'Příběh',
      story_title: 'Návyk má svou formu.<br>My jsme jí dali novou.',
      story_body_1: 'Potřeba mít něco v ruce se opakuje u většiny lidí — gesto, pohyb, každodenní forma. NoNic je odpověď na tuto potřebu. Bez nikotinu, bez elektroniky.',
      story_body_2: 'Promyšlený produkt, který dává návyku novou podobu. Jednoduchou, čistou a bez kompromisů.',
      story_body_3: 'Z reálné potřeby vznikla značka s vlastním designovým jazykem a jasným směrem.',

      // Founders
      founders_label: 'Zakladatelé', founders_title: 'Kdo za tím stojí',
      founders_intro: 'Dva lidi, kteří spojili marketing a výrobu, aby vytvořili produkt nové kategorie.',
      founder_1_role: 'Marketing & strategie',
      founder_1_desc: 'Zodpovídá za marketing, positioning, product-market fit, budování značky, komunikaci a růst.',
      founder_2_role: 'Výroba & produkt',
      founder_2_desc: 'Zodpovídá za výrobu, technickou stránku, produktová řešení a konstrukci.',

      // Development
      dev_label: 'Kde jsme teď',
      dev_title: 'Projekt ve vývoji.<br>Ne na papíře — v praxi.',
      dev_body_1: 'NoNic není hotový produkt s velkým týmem za zády. Jsme dva studenti, kteří na tom pracují každý den — od konstrukce pera přes design až po obchodní strategii.',
      dev_body_2: 'Prošli jsme ICOK Akcelerátorem, vyhráli pitching show na Business Campu a postupně dotahujeme produkt do podoby, která dává smysl. Žádné zkratky, žádné sliby, které nemůžeme splnit.',
      dev_body_3: 'Oba máme kolem sebe lidi, kterým tahle závislost komplikuje život. To je osobní důvod, proč na tom děláme. Chceme nabídnout něco, co zatím na trhu chybí. Reálně, ne jen jako nápad.',
      dev_hl_1: 'ICOK Akcelerátor — absolventi',
      dev_hl_2: 'Business Camp — výhra v pitching show',
      dev_hl_3: 'Aktivní vývoj produktu a značky',

      // Mission
      mission_label: 'Proč existujeme',
      mission_title: 'Trh plný náhražek.<br>Žádná skutečná alternativa.',
      mission_body_1: 'Segment alternativ roste, ale nabídka se točí v kruhu — jiná forma stejné závislosti. Chyběl produkt, který přistupuje k návyku z druhé strany. Ne chemicky. Formou.',
      mission_body_2: 'Většina lidí nehledá další nikotinový produkt. Hledá způsob, jak si zachovat gesto a každodenní formu — bez toho, co k ní dosud patřilo.',
      mission_body_3: 'Nejsme proti ničemu. Jsme pro jinou možnost. Promyšlenou, současnou a bez zbytečných příslibů.',
      mission_quote: 'Nechtěli jsme vytvořit další náhražku. Chtěli jsme vytvořit jinou kategorii.',
      mission_role: 'Zakladatelé NoNic',

      // Product
      product_label: 'Produkt',
      product_title: 'Jeden objekt.<br>Nová kategorie.',
      product_lead: 'Kompaktní pero bez nikotinu, bez elektroniky, bez nabíjení. Fyzický produkt, který zachovává formu návyku — a mění jeho obsah.',
      pillar_1_title: 'Forma, která sedne do ruky',
      pillar_1_text: 'Pero navržené tak, aby přirozeně nahradilo potřebu držet něco v ruce. Leží v dlani, funguje intuitivně.',
      pillar_2_title: 'Aromatická kompozice',
      pillar_2_text: 'Vybraná aromatická směs bez umělých příchutí. Senzorický rozměr, který odlišuje NoNic od obyčejného předmětu.',
      pillar_3_title: 'Diskrétní a bez omezení',
      pillar_3_text: 'Žádná pára, žádné nabíjení. Vypadá jako designový objekt. Používejte ho kdekoliv, bez vysvětlování.',
      detail_form_label: 'Forma', detail_form_value: 'Kompaktní pero, intuitivní držení',
      detail_aroma_label: 'Aroma', detail_aroma_value: 'Přírodní aromatická směs',
      detail_comp_label: 'Složení', detail_comp_value: '0 % nikotinu, 0 % elektroniky',
      detail_use_label: 'Použití', detail_use_value: 'Bez omezení, bez nabíjení, bez údržby',

      // Shop — hero CTA (homepage button)
      hero_btn_shop: 'Mám zájem',

      // Shop page
      shop_label: 'Obchod',
      shop_status: 'Ve vývoji',
      shop_hero_title: 'Připravujeme launch.<br>Buďte u toho.',
      shop_hero_body: 'NoNic se blíží k vydání. Zanechte nám e-mail — ozveme se vám jako prvním a získáte možnost předobjednávky se slevou 25 %.',
      attr_nicotine: '0 % nikotinu',
      attr_smoke: 'Bez kouře',
      attr_vapor: 'Bez páry',
      attr_aroma: 'Čistý vzduch s aroma',
      attr_colors: '6 barev',
      attr_scents: 'Různá aromata',
      shop_cta_interest: 'Mám zájem',
      shop_cta_how: 'Jak to funguje?',
      shop_discount_text: 'Sleva 25 % pro první zákazníky',
      shop_colors_label: '6 barev gripů',

      // Product details section
      product_details_title: 'Jeden objekt.<br>Nová kategorie.',
      product_details_lead: 'Fyzický produkt bez nikotinu, bez elektroniky, bez nabíjení. Zachovává formu návyku — a mění jeho obsah.',
      detail_steel_title: 'Nerezové pero', detail_steel_sub: 'Konstruováno z nerezové oceli. Pevné, čisté, trvalé.',
      detail_colors_title: 'Různé barvy gripů', detail_colors_sub: 'Červená, magenta, hnědá, zelená, modrá, černá. Každá varianta je jiná.',
      detail_aromas_title: 'Různé typy aromat', detail_aromas_sub: 'Ovocné, fresh, sladší nebo jemné. Náplně jsou vyměnitelné.',
      detail_nonicotine_title: '0 % nikotinu', detail_nonicotine_sub: 'Žádná závislost. Žádná chemie. Jen vůně.',
      detail_nosmoke_title: '0 % kouře', detail_nosmoke_sub: 'Nepálí se nic. Žádné zplodiny, žádný závan.',
      detail_novapor_title: '0 % páry', detail_novapor_sub: 'Žádná elektronika, žádný oblak páry.',
      detail_clean_title: 'Jen čistý vzduch', detail_clean_sub: 'Ochucený vzduch aromatem. Nic víc, nic míň.',

      // Interest form
      interest_label: 'Předobjednávka',
      interest_title: 'Buďte u toho.',
      interest_body: 'Zanechte nám e-mail a pár rychlých odpovědí. Jakmile NoNic spustíme, ozveme se vám mezi prvními.',
      interest_perk_1: 'Mezi prvními při launchi',
      interest_perk_2: 'Možnost předobjednávky',
      interest_perk_3: 'Sleva 25 % na první objednávku',
      interest_perk_4: 'Nezávazně',
      interest_email_label: 'E-mail',
      interest_email_placeholder: 'vas@email.cz',
      interest_q1_label: 'Co dnes používáte nejčastěji?',
      interest_q1_a: 'Cigarety', interest_q1_b: 'Vape', interest_q1_c: 'Obojí',
      interest_q1_d: 'Nic z toho', interest_q1_e: 'Chci alternativu bez nikotinu',
      interest_q2_label: 'Co by pro vás bylo u NoNicu nejdůležitější?',
      interest_q2_hint: 'Lze vybrat více možností.',
      interest_q2_a: 'Bez nikotinu', interest_q2_b: 'Bez kouře', interest_q2_c: 'Jednoduché použití',
      interest_q2_d: 'Aroma', interest_q2_e: 'Design', interest_q2_f: 'Diskrétnost',
      interest_q3_label: 'Jaké aroma by vás lákalo nejvíc?',
      interest_q3_a: 'Ovocné', interest_q3_b: 'Fresh', interest_q3_c: 'Sladší',
      interest_q3_d: 'Jemné', interest_q3_e: 'Ještě nevím',
      interest_submit: 'Odeslat',
      interest_form_note: 'Nezávazně. Ozveme se, až budeme připraveni.',
      interest_success_title: 'Zájem zaznamenán.',
      interest_success_body: 'Ozveme se vám mezi prvními, jakmile NoNic spustíme. Děkujeme.',
      interest_error_email: 'Zadejte platný e-mail.',

      // Legacy shop (kept for compatibility)
      shop_title: 'Čtyři barvy. Jeden standard.',
      shop_intro: 'Vyberte si barvu, která vám odpovídá. Předprodej brzy.',
      shop_red: 'Červená', shop_blue: 'Modrá', shop_green: 'Zelená', shop_pink: 'Růžová',
      shop_price: 'PŘEDPRODEJ BRZY',
      shop_notify: 'Upozornit', shop_submit: 'Odeslat', shop_email_placeholder: 'Váš e-mail',

      // Partners
      partners_label: 'Spolupráce',
      partners_title: 'Spolupráce',
      partners_body: 'Máte zájem o spolupráci, partnerství nebo chcete NoNic blíž poznat? Ozvěte se nám a rádi probereme možnosti propojení, distribuce nebo dalšího rozvoje projektu.',
      partners_card_1_title: 'Distribuce a partnerství',
      partners_card_1_text: 'Zajímá vás distribuce, partnerství nebo jiná forma spolupráce? Rádi si domluvíme schůzku.',
      partners_card_1_btn: 'Domluvit schůzku',
      partners_card_2_title: 'Kreativní spolupráce',
      partners_card_2_text: 'Limitované edice, společné projekty nebo jiné propojení. Jsme otevření návrhům.',
      partners_card_2_btn: 'Napište nám',

      // Contact
      contact_label: 'Kontakt',
      contact_title: 'Ozvěte se nám',
      contact_body: 'Pro dotazy, spolupráci nebo cokoliv dalšího — napište nám.',
      contact_email_label: 'E-mail',
      form_name: 'Jméno', form_email: 'E-mail', form_interest: 'Zájem o', form_message: 'Zpráva',
      form_select_default: 'Vyberte...', form_select_product: 'Produkt',
      form_select_partnership: 'Partnerství', form_select_investment: 'Investice',
      form_select_creative: 'Kreativní spolupráce', form_select_other: 'Jiné',
      form_submit: 'Odeslat zprávu', form_sent: 'Odesláno',

      // Terms
      terms_label: 'Obchodní podmínky',
      terms_title: 'Obchodní podmínky',
      terms_placeholder: 'Obsah bude doplněn.',

      // Footer
      footer_tagline: 'Alternativa, která nahrazuje návyk',
      footer_copy: '\u00A9 2025 NoNic. Všechna práva vyhrazena.',
      footer_contact: 'Kontakt', footer_why: 'Proč existujeme',
      footer_terms: 'Obchodní podmínky', footer_instagram: 'Instagram',

      // Notify
      notify_success: '\u2713 Budeme vás informovat na ',
      notify_error: 'Zadejte platný e-mail',

      // Page titles
      page_title_home: 'NoNic \u2014 Alternativa, která nahrazuje návyk',
      page_title_shop: 'Obchod \u2014 NoNic',
      page_title_contact: 'Kontakt \u2014 NoNic',
      page_title_why: 'Proč existujeme \u2014 NoNic',
      page_title_terms: 'Obchodní podmínky \u2014 NoNic'
    },
    en: {
      // Navigation
      nav_home: 'Home', nav_shop: 'Shop', nav_contact: 'Contact',

      // Hero
      hero_eyebrow: 'A new generation alternative',
      hero_title: 'The alternative<br>that replaces the habit',
      hero_subtitle: 'A compact pen with no nicotine, no electronics, no compromises.<br>Different form. Same feeling.',
      hero_btn_who: 'Who are we?', hero_scroll: 'Scroll',

      // 4 steps (co-je-nonic)
      steps_label: 'How it works',
      steps_title: 'Four steps. No complications.',
      step_1_title: 'Unscrew',
      step_1_text: 'Simply unscrew the bottom part.',
      step_2_title: 'Insert the core',
      step_2_text: 'Slide in the aroma refill in your chosen variant.',
      step_3_title: 'Close',
      step_3_text: 'Reconnect both parts and the pen is ready.',
      step_4_title: 'Inhale',
      step_4_text: 'Then simply inhale the aroma as needed.',

      // Story
      story_label: 'Story',
      story_title: 'Habits have a form.<br>We gave them a new one.',
      story_body_1: 'The need to hold something repeats across most people \u2014 a gesture, a movement, an everyday form. NoNic is the answer to this need. No nicotine, no electronics.',
      story_body_2: 'A thoughtful product that gives everyday habits a new shape. Simple, clean, and without compromise.',
      story_body_3: 'From real demand, a brand with its own design language and clear direction was born.',

      // Founders
      founders_label: 'Founders', founders_title: 'Who\u2019s behind it',
      founders_intro: 'Two people who combined marketing and production to create a new product category.',
      founder_1_role: 'Marketing & Strategy',
      founder_1_desc: 'Responsible for marketing, positioning, product-market fit, brand building, communication and growth.',
      founder_2_role: 'Production & Product',
      founder_2_desc: 'Responsible for production, technical side, product solutions and construction.',

      // Development
      dev_label: 'Where we are now',
      dev_title: 'A project in development.<br>Not on paper — in practice.',
      dev_body_1: 'NoNic is not a finished product with a big team behind it. We are two students working on it every day — from pen construction to design and business strategy.',
      dev_body_2: 'We completed the ICOK Accelerator, won the pitching show at Business Camp, and are gradually shaping the product into something that makes sense. No shortcuts, no promises we can\u2019t keep.',
      dev_body_3: 'We both have people around us whose lives are complicated by this addiction. That\u2019s not a manifesto — it\u2019s a personal reason why we do this. We want to offer something the market is missing. For real, not just as an idea.',
      dev_hl_1: 'ICOK Accelerator — graduates',
      dev_hl_2: 'Business Camp — pitching show winners',
      dev_hl_3: 'Active product and brand development',

      // Mission
      mission_label: 'Why we exist',
      mission_title: 'A market full of substitutes.<br>No real alternative.',
      mission_body_1: 'The alternatives segment is growing, but the offer goes in circles \u2014 a different form of the same dependency. No product was solving the habit from the other side. Not chemically. Through form.',
      mission_body_2: 'Most people are not looking for another nicotine product. They want to keep the gesture and everyday form \u2014 without what used to come with it.',
      mission_body_3: 'We are not against anything. We are for a different option. Thoughtful, contemporary, and without empty promises.',
      mission_quote: 'We didn\u2019t want to create another substitute. We wanted to create a different category.',
      mission_role: 'NoNic Founders',

      // Product
      product_label: 'Product',
      product_title: 'One object.<br>A new category.',
      product_lead: 'A compact pen with no nicotine, no electronics, no charging. A physical product that preserves the form of the habit \u2014 and changes its content.',
      pillar_1_title: 'A form that fits in your hand',
      pillar_1_text: 'A pen designed to naturally replace the need to hold something. It sits in your hand and works intuitively.',
      pillar_2_title: 'Aromatic composition',
      pillar_2_text: 'A selected aromatic blend with no artificial flavors. The sensory dimension that sets NoNic apart from an ordinary object.',
      pillar_3_title: 'Discreet and unrestricted',
      pillar_3_text: 'No vapor, no charging. Looks like a design object. Use it anywhere, without explanation.',
      detail_form_label: 'Form', detail_form_value: 'Compact pen, intuitive grip',
      detail_aroma_label: 'Aroma', detail_aroma_value: 'Natural aromatic blend',
      detail_comp_label: 'Composition', detail_comp_value: '0% nicotine, 0% electronics',
      detail_use_label: 'Usage', detail_use_value: 'No limits, no charging, no maintenance',

      // Shop — hero CTA (homepage button)
      hero_btn_shop: 'I\'m interested',

      // Shop page
      shop_label: 'Shop',
      shop_status: 'In development',
      shop_hero_title: 'Launch is coming.<br>Be first.',
      shop_hero_body: 'NoNic is approaching launch. Leave your email — we\'ll reach out to you first and you\'ll get a pre-order with 25% off.',
      attr_nicotine: '0% nicotine',
      attr_smoke: 'No smoke',
      attr_vapor: 'No vapor',
      attr_aroma: 'Pure air with aroma',
      attr_colors: '6 colors',
      attr_scents: 'Various aromas',
      shop_cta_interest: 'I\'m interested',
      shop_cta_how: 'How does it work?',
      shop_discount_text: '25% off for early customers',
      shop_colors_label: '6 grip colors',

      // Product details section
      product_details_title: 'One object.<br>A new category.',
      product_details_lead: 'A physical product with no nicotine, no electronics, no charging. Preserves the form of habit — and changes its content.',
      detail_steel_title: 'Stainless steel pen', detail_steel_sub: 'Constructed from stainless steel. Solid, clean, lasting.',
      detail_colors_title: 'Various grip colors', detail_colors_sub: 'Red, magenta, brown, green, blue, black. Each variant is different.',
      detail_aromas_title: 'Various aroma types', detail_aromas_sub: 'Fruity, fresh, sweeter or subtle. Refills are replaceable.',
      detail_nonicotine_title: '0% nicotine', detail_nonicotine_sub: 'No addiction. No chemistry. Just scent.',
      detail_nosmoke_title: '0% smoke', detail_nosmoke_sub: 'Nothing burns. No exhaust, no smell.',
      detail_novapor_title: '0% vapor', detail_novapor_sub: 'No electronics, no cloud of vapor.',
      detail_clean_title: 'Just clean air', detail_clean_sub: 'Flavored air with aroma. Nothing more, nothing less.',

      // Interest form
      interest_label: 'Pre-order',
      interest_title: 'Be there.',
      interest_body: 'Leave your email and a few quick answers. When NoNic launches, we\'ll reach out to you first.',
      interest_perk_1: 'First to know at launch',
      interest_perk_2: 'Pre-order opportunity',
      interest_perk_3: '25% off your first order',
      interest_perk_4: 'No commitment',
      interest_email_label: 'E-mail',
      interest_email_placeholder: 'your@email.com',
      interest_q1_label: 'What do you use most often today?',
      interest_q1_a: 'Cigarettes', interest_q1_b: 'Vape', interest_q1_c: 'Both',
      interest_q1_d: 'Neither', interest_q1_e: 'I want a nicotine-free alternative',
      interest_q2_label: 'What would be most important to you about NoNic?',
      interest_q2_hint: 'Multiple options allowed.',
      interest_q2_a: 'No nicotine', interest_q2_b: 'No smoke', interest_q2_c: 'Simple use',
      interest_q2_d: 'Aroma', interest_q2_e: 'Design', interest_q2_f: 'Discretion',
      interest_q3_label: 'Which aroma would appeal to you most?',
      interest_q3_a: 'Fruity', interest_q3_b: 'Fresh', interest_q3_c: 'Sweeter',
      interest_q3_d: 'Subtle', interest_q3_e: 'Not sure yet',
      interest_submit: 'Send',
      interest_form_note: 'No commitment. We\'ll reach out when we\'re ready.',
      interest_success_title: 'Interest recorded.',
      interest_success_body: 'We\'ll reach out to you first when NoNic launches. Thank you.',
      interest_error_email: 'Please enter a valid email.',

      // Legacy shop (kept for compatibility)
      shop_title: 'Four colors. One standard.',
      shop_intro: 'Choose the color that suits you. Pre-sale coming soon.',
      shop_red: 'Red', shop_blue: 'Blue', shop_green: 'Green', shop_pink: 'Pink',
      shop_price: 'PRE-SALE SOON',
      shop_notify: 'Notify me', shop_submit: 'Submit', shop_email_placeholder: 'Your e-mail',

      // Partners
      partners_label: 'Collaboration',
      partners_title: 'Collaboration',
      partners_body: 'Interested in collaboration, partnership, or want to learn more about NoNic? Get in touch and we\u2019ll be happy to discuss distribution, partnership, or further development.',
      partners_card_1_title: 'Distribution & Partnership',
      partners_card_1_text: 'Interested in distribution, partnership, or another form of collaboration? Let\u2019s schedule a meeting.',
      partners_card_1_btn: 'Schedule a meeting',
      partners_card_2_title: 'Creative Collaboration',
      partners_card_2_text: 'Limited editions, joint projects, or other connections. We are open to proposals.',
      partners_card_2_btn: 'Write to us',

      // Contact
      contact_label: 'Contact',
      contact_title: 'Get in touch',
      contact_body: 'Questions, partnerships, or anything else \u2014 write to us.',
      contact_email_label: 'E-mail',
      form_name: 'Name', form_email: 'E-mail', form_interest: 'Interest', form_message: 'Message',
      form_select_default: 'Select...', form_select_product: 'Product',
      form_select_partnership: 'Partnership', form_select_investment: 'Investment',
      form_select_creative: 'Creative collaboration', form_select_other: 'Other',
      form_submit: 'Send message', form_sent: 'Sent',

      // Terms
      terms_label: 'Terms & Conditions',
      terms_title: 'Terms & Conditions',
      terms_placeholder: 'Content coming soon.',

      // Footer
      footer_tagline: 'The alternative that replaces the habit',
      footer_copy: '\u00A9 2025 NoNic. All rights reserved.',
      footer_contact: 'Contact', footer_why: 'Why we exist',
      footer_terms: 'Terms & Conditions', footer_instagram: 'Instagram',

      // Notify
      notify_success: '\u2713 We will notify you at ',
      notify_error: 'Enter a valid e-mail',

      // Page titles
      page_title_home: 'NoNic \u2014 The alternative that replaces the habit',
      page_title_shop: 'Shop \u2014 NoNic',
      page_title_contact: 'Contact \u2014 NoNic',
      page_title_why: 'Why we exist \u2014 NoNic',
      page_title_terms: 'Terms & Conditions \u2014 NoNic'
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

    // Update page title based on data-page-title attribute
    var titleKey = document.body.getAttribute('data-page-title') || 'page_title_home';
    if (t[titleKey]) document.title = t[titleKey];
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
  // Navigation (multi-page safe)
  // =========================================
  function setupNavigation() {
    var nav = document.getElementById('nav');
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    if (!nav || !navToggle || !navLinks) return;

    // Scroll-based nav appearance
    var ticking = false;
    function handleNavScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 60) {
            nav.classList.add('is-scrolled');
          } else {
            nav.classList.remove('is-scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // Helper: close mobile menu
    function closeMenu() {
      navToggle.classList.remove('is-active');
      navLinks.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    // Helper: open mobile menu
    function openMenu() {
      navToggle.classList.add('is-active');
      navLinks.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    // Mobile hamburger toggle — use touchend + click for reliability
    function handleToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      if (navLinks.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }
    navToggle.addEventListener('click', handleToggle);
    navToggle.addEventListener('touchend', function (e) {
      e.preventDefault();
      handleToggle(e);
    }, { passive: false });

    // Close mobile menu on link click
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Close drawer when clicking outside (overlay area)
    document.addEventListener('click', function (e) {
      if (navLinks.classList.contains('is-open') &&
          !navLinks.contains(e.target) &&
          !navToggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Also close on touchstart outside for mobile
    document.addEventListener('touchstart', function (e) {
      if (navLinks.classList.contains('is-open') &&
          !navLinks.contains(e.target) &&
          !navToggle.contains(e.target)) {
        closeMenu();
      }
    }, { passive: true });

    // Smooth scroll for same-page #anchor links only
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (!href || href === '#' || href.length <= 1) return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  // =========================================
  // Active nav link highlight (multi-page)
  // =========================================
  function setupActiveNav() {
    // Highlight nav link matching current page URL
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === '') currentPage = 'index.html';

    document.querySelectorAll('.nav__link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      // Strip hash, query, and path to get just the filename
      var linkPage = href.split('/').pop().split('#')[0].split('?')[0];
      if (linkPage === currentPage) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  // =========================================
  // Reveal on scroll
  // =========================================
  function setupReveal() {
    var revealElements = document.querySelectorAll(
      '.section__label, .section__title, .section__intro, .section__body, ' +
      '.story__product-scene, .founder, .mission__card, .mission__text, ' +
      '.product__pillar, .product__detail, ' +
      '.product__hero, .product__lead, ' +
      '.shop__card, .partners__point, .partners__card, .partners__text, .partners__cta-area, ' +
      '.contact__form, .contact__info, .contact__channels, .contact__form-side, ' +
      '.hero__eyebrow, .hero__title, .hero__subtitle, .hero__actions, ' +
      '.steps-layout__visual, .home-teaser__content, ' +
      '.dev__text, .dev__visual, .dev__highlights'
    );

    if (!revealElements.length) return;

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
      var scrollFraction = scrollY / (pageHeight - viewHeight || 1);
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
    if (!sectionsWithCurves.length) return;

    var curveObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-curves-visible');
            curveObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -60px 0px' }
    );
    sectionsWithCurves.forEach(function (s) { curveObserver.observe(s); });

    if (isMobile) {
      function updateMobileParallax() {
        var scrollY = window.scrollY;
        var docHeight = document.documentElement.scrollHeight;
        var viewHeight = window.innerHeight;
        var scrollFraction = scrollY / (docHeight - viewHeight || 1);
        var translateY = -scrollFraction * viewHeight * 0.3;
        document.body.style.setProperty('--mobile-curve-y', translateY + 'px');
      }
      var style = document.createElement('style');
      style.textContent = '@media(max-width:768px){body::before{transform:translateY(var(--mobile-curve-y,0px))}}';
      document.head.appendChild(style);
      window.addEventListener('scroll', updateMobileParallax, { passive: true });
      updateMobileParallax();
      return;
    }

    var sectionBgs = document.querySelectorAll('.section__curves-bg');
    if (!sectionBgs.length) return;

    function updateSectionParallax() {
      var vh = window.innerHeight;
      sectionBgs.forEach(function (bg) {
        var rect = bg.parentElement.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        var center = rect.top + rect.height / 2;
        var offset = (center - vh / 2) * 0.04;
        bg.style.transform = 'translateY(' + offset + 'px)';
      });
      requestAnimationFrame(updateSectionParallax);
    }
    requestAnimationFrame(updateSectionParallax);
  }

  // =========================================
  // Product scroll rotation
  // =========================================
  function setupProductRotation() {
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
  function setupContactForm() {
    var contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('.btn');
      var t = translations[currentLang];
      var action = contactForm.getAttribute('action');
      var formData = new FormData(contactForm);

      btn.textContent = t.form_sent || 'Odesláno';
      btn.style.background = '#4A7C59';
      btn.disabled = true;

      // Send data via fetch to Formspree (or configured endpoint)
      // If action still contains YOUR_FORM_ID, skip actual send (not configured yet)
      if (action && action.indexOf('YOUR_FORM_ID') === -1) {
        fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).then(function (response) {
          if (!response.ok) {
            console.warn('Form submission error:', response.status);
          }
        }).catch(function (err) {
          console.warn('Form submission failed:', err);
        });
      } else {
        // Backend not configured yet — log data for debugging
        console.log('[NoNic] Contact form data (not sent — configure Formspree endpoint):');
        formData.forEach(function(value, key) { console.log('  ' + key + ':', value); });
      }

      setTimeout(function () {
        btn.textContent = t.form_submit;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // =========================================
  // Dark Mode Toggle
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
  // Color Switcher (obchod.html)
  // =========================================
  function setupColorSwitcher() {
    var switcher = document.getElementById('colorSwitcher');
    var penImg = document.getElementById('penColorImg');
    if (!switcher || !penImg) return;

    switcher.addEventListener('click', function (e) {
      var btn = e.target.closest('.color-swatch');
      if (!btn) return;

      var penFile = btn.getAttribute('data-pen');
      if (!penFile) return;

      // Update active state
      switcher.querySelectorAll('.color-swatch').forEach(function (s) {
        s.classList.remove('is-active');
      });
      btn.classList.add('is-active');

      // Fade transition
      penImg.style.transition = 'opacity 0.15s ease';
      penImg.style.opacity = '0';
      setTimeout(function () {
        penImg.src = penFile;
        penImg.style.opacity = '1';
      }, 150);
    });
  }

  // =========================================
  // Interest Form (obchod.html)
  // =========================================
  function setupInterestForm() {
    var form = document.getElementById('interestForm');
    var successEl = document.getElementById('interestSuccess');
    var submitBtn = document.getElementById('interestSubmit');
    if (!form || !successEl || !submitBtn) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var t = translations[currentLang];

      // Validate email
      var emailInput = form.querySelector('input[type="email"]');
      var email = emailInput ? emailInput.value.trim() : '';
      if (!email || !email.includes('@') || !email.includes('.')) {
        if (emailInput) {
          emailInput.style.borderColor = '#C8352B';
          emailInput.style.boxShadow = '0 0 0 3px rgba(200,53,43,0.1)';
          emailInput.focus();
          setTimeout(function () {
            emailInput.style.borderColor = '';
            emailInput.style.boxShadow = '';
          }, 2500);
        }
        return;
      }

      // Disable submit
      submitBtn.disabled = true;
      submitBtn.textContent = '...';

      var formData = new FormData(form);
      var action = form.getAttribute('action');

      fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        // Show success regardless of response (Formspree redirects on non-AJAX but 200/302 both mean OK)
        form.style.display = 'none';
        successEl.classList.add('is-visible');
      }).catch(function () {
        // Network failure — still show success to user, log for debugging
        console.warn('[NoNic] Interest form network error — data may not have been sent.');
        form.style.display = 'none';
        successEl.classList.add('is-visible');
      });
    });
  }

  // =========================================
  // Shop — Watchdog / Notify Buttons
  // =========================================
  function setupShopNotify() {
    var notifyBtns = document.querySelectorAll('.shop__notify-btn');
    if (!notifyBtns.length) return;

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

    // Watchdog/notify endpoint — replace YOUR_WATCHDOG_ID with your Formspree form ID
    var watchdogEndpoint = 'https://formspree.io/f/xlgpplqb';

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

        // Save to localStorage as backup
        var stored = JSON.parse(localStorage.getItem('nonic-watchdog') || '{}');
        stored[product] = email;
        localStorage.setItem('nonic-watchdog', JSON.stringify(stored));

        // Send to Formspree (or configured endpoint)
        if (watchdogEndpoint.indexOf('YOUR_WATCHDOG_ID') === -1) {
          fetch(watchdogEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ email: email, product: product, _subject: 'NoNic Watchdog — ' + product })
          }).catch(function (err) {
            console.warn('Watchdog submit failed:', err);
          });
        } else {
          console.log('[NoNic] Watchdog signup (not sent — configure Formspree endpoint):');
          console.log('  product:', product, '| email:', email);
        }
      });
    });
  }

  // =========================================
  // Splash Screen — Snake-like individual curves
  // =========================================
  function setupSplash() {
    var splash = document.getElementById('splash');
    if (!splash) return;

    // Only play splash on first load / hard reload — not on "Domů" navigation
    var splashPlayed = sessionStorage.getItem('nonic-splash-played');
    if (splashPlayed) {
      // Skip splash entirely — clean up immediately
      splash.remove();
      document.body.classList.remove('splash-active', 'curves-waiting');
      document.body.classList.add('curves-entering');
      setupGlobalCurves();
      setupSectionCurves();
      return;
    }

    // Mark splash as played for this session
    sessionStorage.setItem('nonic-splash-played', '1');

    var canvas = document.getElementById('splashCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    window.scrollTo(0, 0);

    var splashLogo = document.getElementById('splashLogo');
    var isDark = document.body.classList.contains('dark');
    if (splashLogo && isDark) splashLogo.src = 'logo-white.png';

    var dpr = window.devicePixelRatio || 1;
    function sizeCanvas() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    }
    sizeCanvas();

    var W = window.innerWidth;
    var H = window.innerHeight;

    var colors = [
      'rgba(200, 53, 43, A)',
      'rgba(74, 124, 89, A)',
      'rgba(46, 94, 140, A)',
      'rgba(181, 56, 126, A)',
      'rgba(212, 168, 67, A)'
    ];

    var stringDefs = [
      { yRatio: 0.16, amp: 18, freq: 1.2, phase: 0,    speed: 0.42, delay: 0,    lw: 2.6, hasLoop: false },
      { yRatio: 0.33, amp: 24, freq: 1.8, phase: 0.8,  speed: 0.38, delay: 0.12, lw: 2.0, hasLoop: true, loopAt: 0.45, loopSize: 22 },
      { yRatio: 0.52, amp: 14, freq: 0.8, phase: 2.1,  speed: 0.44, delay: 0.25, lw: 2.4, hasLoop: false },
      { yRatio: 0.68, amp: 20, freq: 2.2, phase: 1.4,  speed: 0.36, delay: 0.08, lw: 1.8, hasLoop: true, loopAt: 0.6, loopSize: 16 },
      { yRatio: 0.84, amp: 16, freq: 1.0, phase: 3.5,  speed: 0.40, delay: 0.18, lw: 2.2, hasLoop: false }
    ];

    var TOTAL_DUR = 4.2;
    var startTime = null;
    var animId = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function drawString(def, colorStr, t) {
      var rawT = t;
      if (rawT <= 0) return;
      if (rawT > 1) rawT = 1;

      var headProgress = easeInOutCubic(Math.min(rawT / 0.85, 1));
      var headX = -0.2 * W + headProgress * 1.5 * W;

      var tailDelay = 0.25;
      var tailT = Math.max(0, (rawT - tailDelay) / (1 - tailDelay));
      var tailProgress = easeInOutCubic(Math.min(tailT, 1));
      var tailX = -0.2 * W + tailProgress * 1.5 * W;

      var alpha = 1;
      if (rawT < 0.15) alpha = rawT / 0.15;
      if (rawT > 0.8) alpha = 1 - (rawT - 0.8) / 0.2;
      alpha = Math.max(0, Math.min(1, alpha)) * 0.7;

      var color = colorStr.replace('A', alpha.toFixed(3));

      var baseY = def.yRatio * H;
      var amp = def.amp * (H / 900);
      var freq = def.freq;
      var phase = def.phase;
      var waveShift = rawT * 2.5;

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = def.lw;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      var started = false;
      var steps = 200;
      for (var i = 0; i <= steps; i++) {
        var frac = i / steps;
        var x = tailX + frac * (headX - tailX);

        if (x < -50 || x > W + 50) continue;

        var xNorm = x / W;
        var y = baseY + Math.sin(xNorm * Math.PI * 2 * freq + phase + waveShift) * amp;
        y += Math.sin(xNorm * Math.PI * 5.3 + phase * 2 + waveShift * 0.7) * (amp * 0.15);

        if (def.hasLoop) {
          var loopCenter = def.loopAt;
          var dist = Math.abs(xNorm - loopCenter);
          if (dist < 0.08) {
            var loopT = 1 - dist / 0.08;
            var loopAngle = loopT * Math.PI * 2;
            y += Math.sin(loopAngle) * def.loopSize * (H / 900);
            x += Math.cos(loopAngle) * def.loopSize * 0.4 * (W / 1600);
          }
        }

        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = (timestamp - startTime) / 1000;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);

      W = window.innerWidth;
      H = window.innerHeight;

      for (var i = 0; i < stringDefs.length; i++) {
        var def = stringDefs[i];
        var localT = (elapsed - def.delay) / (TOTAL_DUR - def.delay);
        drawString(def, colors[i], localT);
      }

      if (elapsed < TOTAL_DUR) {
        animId = requestAnimationFrame(animate);
      }
    }

    animId = requestAnimationFrame(animate);

    setTimeout(function () {
      if (animId) cancelAnimationFrame(animId);
      splash.classList.add('is-fading');
      document.body.classList.remove('splash-active');
      document.body.classList.add('splash-exiting');
      window.scrollTo(0, 0);

      setTimeout(function () {
        splash.remove();
        document.body.classList.remove('splash-exiting');
      }, 700);

      setTimeout(function () {
        document.body.classList.remove('curves-waiting');
        document.body.classList.add('curves-entering');
        setupGlobalCurves();
        setupSectionCurves();
      }, 1200);
    }, (TOTAL_DUR + 0.1) * 1000);
  }

  // =========================================
  // Init
  // =========================================
  document.addEventListener('DOMContentLoaded', function () {
    setupDarkMode();
    setupDarkModeLogo();
    setupNavigation();
    setupSplash();
    setupReveal();
    // Global & section curves are started AFTER splash finishes (inside setupSplash)
    // If no splash element exists, clean up classes and start immediately
    if (!document.getElementById('splash')) {
      document.body.classList.remove('splash-active', 'curves-waiting');
      document.body.classList.add('curves-entering');
      setupGlobalCurves();
      setupSectionCurves();
    }
    setupProductRotation();
    setupActiveNav();
    setupLanguageToggle();
    setupCurrencyToggle();
    setupPreviewBar();
    setupEditorMode();
    setupContactForm();
    setupShopNotify();
    setupInterestForm();
    setupColorSwitcher();
  });
})();
