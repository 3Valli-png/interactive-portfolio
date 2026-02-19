// ============================================
// Portfolio i18n - Translation Engine
// Lightweight runtime for IT/EN switching
// ============================================

(function () {
  'use strict';

  var LANG_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'it';

  // Determine initial language: localStorage > browser > default
  function getInitialLang() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored && TRANSLATIONS[stored]) return stored;
    var browser = (navigator.language || '').slice(0, 2).toLowerCase();
    if (browser === 'en') return 'en';
    return DEFAULT_LANG;
  }

  window.currentLang = getInitialLang();

  function applyTranslations(lang) {
    if (!TRANSLATIONS[lang]) return;
    var t = TRANSLATIONS[lang];

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // innerHTML (for content with markup like <strong>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Attributes: placeholder, title, aria-label
    ['placeholder', 'title', 'aria-label'].forEach(function (attr) {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(function (el) {
        var key = el.getAttribute('data-i18n-' + attr);
        if (t[key] !== undefined) el.setAttribute(attr, t[key]);
      });
    });

    // Update html lang and page title
    document.documentElement.lang = lang;

    // Update toggle button display
    var toggleBtn = document.getElementById('langToggleSidebar');
    if (toggleBtn) {
      var flagIt = toggleBtn.querySelector('.lang-flag-it');
      var flagEn = toggleBtn.querySelector('.lang-flag-en');
      var text = toggleBtn.querySelector('.lang-text');
      if (flagIt) flagIt.style.display = lang === 'it' ? '' : 'none';
      if (flagEn) flagEn.style.display = lang === 'en' ? '' : 'none';
      if (text) text.textContent = lang === 'it' ? 'IT' : 'EN';
    }
  }

  function setLanguage(lang) {
    window.currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations(lang);
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function toggleLanguage() {
    setLanguage(window.currentLang === 'it' ? 'en' : 'it');
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations(window.currentLang);

    var btn = document.getElementById('langToggleSidebar');
    if (btn) btn.addEventListener('click', toggleLanguage);
  });

  // Global API
  window.i18n = {
    setLanguage: setLanguage,
    toggleLanguage: toggleLanguage,
    getLanguage: function () { return window.currentLang; },
    t: function (key) {
      var lang = window.currentLang;
      return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key;
    }
  };
})();
