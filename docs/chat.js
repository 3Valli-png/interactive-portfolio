// ============================================
// Portfolio CV + Chatbot Widget
// Navigation + Chat Widget + SSE Streaming
// ============================================

const API_URL = 'https://interactive-portfolio-flame.vercel.app/api/chat';

const STORAGE_KEY = 'portfolio-chat-history';
const MAX_HISTORY = 20;

// State (currentLang is provided globally by i18n.js)
let isStreaming = false;
let chatOpen = false;

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initChatWidget();
  initChat();
  initScrollReveal();
  initCounters();
  initTypingEffect();
  initTiltEffect();
  initSpiderChart();
});

// ============================================
// Portfolio Navigation
// ============================================

function initNavigation() {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      closeMobileSidebar();
    });
  });

  // Active section tracking via IntersectionObserver
  const sections = document.querySelectorAll('.section, .hero-section, .passions-section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(section => observer.observe(section));

  // Mobile hamburger
  const hamburger = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebarLeft');
  const overlay = document.getElementById('sidebarOverlay');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMobileSidebar);
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebarLeft');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

// ============================================
// Scroll Reveal Animations
// ============================================

function initScrollReveal() {
  // Exclude #about — it's revealed after the hero sequence
  const revealElements = document.querySelectorAll('.reveal:not(#about)');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ============================================
// Animated Counters (count-up after hero typing)
// ============================================

function initCounters() {
  var counterEls = document.querySelectorAll('[data-count-target]');
  if (!counterEls.length) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Pair each counter with its parent highlight-card
  var items = [];
  counterEls.forEach(function (el) {
    var card = el.closest('.highlight-card');
    if (card) items.push({ card: card, counter: el });
  });

  // Hide cards and set counters to 0
  items.forEach(function (item) {
    item.card.style.opacity = '0';
    item.card.style.transform = 'translateY(24px) scale(0.82)';
    item.card.style.filter = 'blur(10px)';
    item.counter.textContent = '0' + (item.counter.dataset.countSuffix || '');
  });

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function animateCounter(el) {
    var target = parseInt(el.dataset.countTarget, 10);
    var suffix = el.dataset.countSuffix || '';
    var duration = 2000;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var value = Math.round(easeOutExpo(progress) * target);
      el.textContent = value + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function revealCard(item) {
    item.card.classList.add('appearing');
    // Start counter 250ms into the entrance
    setTimeout(function () {
      animateCounter(item.counter);
    }, 250);
    // Cleanup after animation so hover/tilt effects work normally
    setTimeout(function () {
      item.card.classList.remove('appearing');
      item.card.style.opacity = '';
      item.card.style.transform = '';
      item.card.style.filter = '';
    }, 900);
  }

  function startCounters() {
    items.forEach(function (item, index) {
      setTimeout(function () {
        revealCard(item);
      }, index * 250);
    });

    // Reveal About section after the last card is halfway through
    var aboutDelay = (items.length - 1) * 250 + 450;
    setTimeout(function () {
      var about = document.getElementById('about');
      if (about) about.classList.add('visible');
    }, aboutDelay);
  }

  // Wait for hero typing to finish, then stagger card entrances + counters
  var fired = false;
  window.addEventListener('hero-ready', function () {
    if (fired) return;
    fired = true;
    startCounters();
  });

  // Safety fallback: if hero-ready doesn't fire within 5s, animate anyway
  setTimeout(function () {
    if (fired) return;
    fired = true;
    startCounters();
  }, 5000);
}

// ============================================
// Typing Effect on Hero
// ============================================

function initTypingEffect() {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Still fire hero-ready so counters work via fallback
    window.dispatchEvent(new CustomEvent('hero-ready'));
    return;
  }

  var greeting = document.querySelector('.hero-greeting');
  var heroName = document.querySelector('.hero-name');
  var tagline = document.querySelector('.hero-tagline');
  var description = document.querySelector('.hero-description');

  if (!greeting) return;

  var fullText = greeting.textContent;
  greeting.textContent = '';
  greeting.classList.add('typing-active');

  // Hide elements initially
  if (heroName) { heroName.style.opacity = '0'; heroName.style.transform = 'translateY(15px)'; }
  if (tagline) { tagline.style.opacity = '0'; tagline.style.transform = 'translateY(15px)'; }
  if (description) { description.style.opacity = '0'; description.style.transform = 'translateY(15px)'; }

  var charIndex = 0;
  var typingSpeed = 65;

  function typeChar() {
    if (charIndex < fullText.length) {
      greeting.textContent = fullText.slice(0, charIndex + 1);
      charIndex++;
      setTimeout(typeChar, typingSpeed);
    } else {
      // Typing done, reveal name then tagline then description
      greeting.classList.remove('typing-active');
      greeting.classList.add('typing-done');
      revealElement(heroName, 200);
      revealElement(tagline, 600);
      revealElement(description, 900);
      // Signal counters to start after text reveals settle
      setTimeout(function () {
        window.dispatchEvent(new CustomEvent('hero-ready'));
      }, 1200);
    }
  }

  function revealElement(el, delay) {
    if (!el) return;
    setTimeout(function () {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, delay);
  }

  // Start typing after a brief delay
  setTimeout(typeChar, 400);
}

// ============================================
// 3D Tilt Effect on Cards
// ============================================

function initTiltEffect() {
  // Disabled on touch devices
  if ('ontouchstart' in window) return;
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var cards = document.querySelectorAll('.project-card, .skill-card, .highlight-card');
  var maxRotation = 8;

  cards.forEach(function (card) {
    card.style.transformStyle = 'preserve-3d';
    card.style.willChange = 'transform';

    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;

      var rotateY = ((x - centerX) / centerX) * maxRotation;
      var rotateX = ((centerY - y) / centerY) * maxRotation;

      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transition = 'transform 0.4s ease';
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
      setTimeout(function () { card.style.transition = ''; }, 400);
    });
  });
}

// ============================================
// Spider Chart (Plotly.js Radar interattivo)
// ============================================

function initSpiderChart() {
  var chartDiv = document.getElementById('spiderChart');
  if (!chartDiv || typeof Plotly === 'undefined') return;

  var axes = [
    { key: 'spider.dataAnalytics', fallback: 'Data Analytics', value: 9 },
    { key: 'spider.businessIntelligence', fallback: 'Business Intelligence', value: 9 },
    { key: 'spider.businessOrientation', fallback: 'Business Orientation', value: 9 },
    { key: 'spider.projectManagement', fallback: 'Project Management', value: 8 },
    { key: 'spider.automationTools', fallback: 'Automation & Tools', value: 7 }
  ];
  var maxValue = 10;

  function getLabel(axis) {
    if (window.i18n && window.i18n.t) {
      var t = window.i18n.t(axis.key);
      return t !== axis.key ? t : axis.fallback;
    }
    return axis.fallback;
  }

  function getLabels() {
    return axes.map(function (a) { return getLabel(a); });
  }

  function getHoverTexts() {
    return axes.map(function (a) {
      return getLabel(a) + ': <b>' + a.value + '/' + maxValue + '</b>';
    });
  }

  var values = axes.map(function (a) { return a.value; });
  var closedValues = values.concat([values[0]]);
  var zeroValues = closedValues.map(function () { return 0; });

  function buildTrace(r) {
    var labels = getLabels();
    var closedLabels = labels.concat([labels[0]]);
    var hoverTexts = getHoverTexts();
    hoverTexts.push(hoverTexts[0]);

    return {
      type: 'scatterpolar',
      r: r,
      theta: closedLabels,
      fill: 'toself',
      fillcolor: 'rgba(0, 179, 65, 0.15)',
      line: { color: '#00B341', width: 2.5 },
      marker: { color: '#00B341', size: 7, line: { color: '#1a1f16', width: 1.5 } },
      text: hoverTexts,
      hoverinfo: 'text',
      hoverlabel: {
        bgcolor: '#2a3225',
        bordercolor: '#00B341',
        font: { color: '#F2E3BB', family: 'Inter, sans-serif', size: 13 }
      }
    };
  }

  var layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, maxValue],
        tickvals: [2, 4, 6, 8, 10],
        gridcolor: 'rgba(74, 80, 64, 0.6)',
        linecolor: 'rgba(74, 80, 64, 0.6)',
        tickfont: { color: '#c4c0a8', size: 9, family: 'Inter, sans-serif' },
        angle: 90
      },
      angularaxis: {
        gridcolor: 'rgba(74, 80, 64, 0.6)',
        linecolor: 'rgba(74, 80, 64, 0.6)',
        tickfont: { color: '#F2E3BB', size: 12, family: 'Inter, sans-serif' },
        direction: 'clockwise'
      },
      bgcolor: 'transparent'
    },
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    showlegend: false,
    margin: { t: 60, b: 60, l: 130, r: 130 },
    font: { family: 'Inter, sans-serif' },
    dragmode: false
  };

  var config = {
    responsive: true,
    displayModeBar: false
  };

  var animated = false;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Plotly.newPlot(chartDiv, [buildTrace(closedValues)], layout, config);
    animated = true;
  } else {
    Plotly.newPlot(chartDiv, [buildTrace(zeroValues)], layout, config);
  }

  function animateChart() {
    var duration = 1000;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var t = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      var animatedR = values.map(function (v) { return v * t; });
      animatedR.push(animatedR[0]);

      Plotly.restyle(chartDiv, { r: [animatedR] }, [0]);

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // Animate on scroll into view
  if (!animated) {
    var chartObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          animated = true;
          animateChart();
          chartObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    chartObserver.observe(chartDiv);
  }

  // Redraw on language change (labels + hover text update)
  window.addEventListener('langchange', function () {
    var trace = buildTrace(animated ? closedValues : zeroValues);
    Plotly.react(chartDiv, [trace], layout, config);
  });
}

// ============================================
// Chat Widget Controller
// ============================================

function initChatWidget() {
  const toggle = document.getElementById('chatToggle');
  const chatWindow = document.getElementById('chatWindow');
  const iconOpen = toggle.querySelector('.chat-icon-open');
  const iconClose = toggle.querySelector('.chat-icon-close');
  const badge = document.getElementById('chatBadge');

  toggle.addEventListener('click', () => {
    chatOpen = !chatOpen;
    chatWindow.classList.toggle('open', chatOpen);
    chatWindow.setAttribute('aria-hidden', !chatOpen);
    iconOpen.style.display = chatOpen ? 'none' : 'block';
    iconClose.style.display = chatOpen ? 'block' : 'none';
    if (badge) badge.style.display = 'none';

    if (chatOpen) {
      setTimeout(() => document.getElementById('messageInput').focus(), 300);
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatOpen) {
      toggle.click();
    }
  });

  // --- Chat Nudge Tooltip ---
  const nudge = document.getElementById('chatNudge');
  const nudgeClose = document.getElementById('chatNudgeClose');
  const NUDGE_KEY = 'portfolio-chat-nudge-seen';

  function dismissNudge() {
    nudge.classList.remove('visible');
    localStorage.setItem(NUDGE_KEY, '1');
  }

  if (nudge && !localStorage.getItem(NUDGE_KEY)) {
    setTimeout(() => {
      if (!chatOpen) {
        nudge.classList.add('visible');
        // Auto-dismiss after 8 seconds
        setTimeout(() => {
          if (nudge.classList.contains('visible')) dismissNudge();
        }, 8000);
      }
    }, 4000);

    nudgeClose.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissNudge();
    });

    // Dismiss nudge when chat is opened
    toggle.addEventListener('click', () => {
      if (nudge.classList.contains('visible')) dismissNudge();
    });
  }
}

// ============================================
// Chat Engine (SSE Streaming + localStorage)
// ============================================

// DOM Elements (resolved after DOMContentLoaded)
let chatMessages, chatForm, messageInput, sendBtn, clearChat;

function initChat() {
  chatMessages = document.getElementById('chatMessages');
  chatForm = document.getElementById('chatForm');
  messageInput = document.getElementById('messageInput');
  sendBtn = document.getElementById('sendBtn');
  clearChat = document.getElementById('clearChat');

  loadHistory();
  showWelcomeMessage();
  chatForm.addEventListener('submit', handleSubmit);
  clearChat.addEventListener('click', clearConversation);

  // Update welcome message when language changes
  window.addEventListener('langchange', function () {
    var welcomeEl = document.getElementById('chatWelcomeMsg');
    if (welcomeEl && window.i18n) {
      welcomeEl.textContent = window.i18n.t('chat.welcome');
    }
  });
}

function showWelcomeMessage() {
  if (chatMessages.children.length > 0) return;
  var welcomeMsg = window.i18n ? window.i18n.t('chat.welcome') : 'Ciao! Sono l\'assistente virtuale di Valerio. Chiedimi qualcosa sulle sue competenze, esperienze, progetti o formazione.';
  var el = addMessage(welcomeMsg, 'bot');
  el.id = 'chatWelcomeMsg';
}

// ============================================
// Message Handling
// ============================================

function addMessage(text, role) {
  const div = document.createElement('div');
  div.className = `message message-${role}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  scrollToBottom();
  return div;
}

function addStreamingMessage() {
  const div = document.createElement('div');
  div.className = 'message message-bot';
  div.textContent = '';
  chatMessages.appendChild(div);
  scrollToBottom();
  return div;
}

function showTypingIndicator() {
  const div = document.createElement('div');
  div.className = 'typing-indicator';
  div.id = 'typingIndicator';
  div.innerHTML = '<span></span><span></span><span></span>';
  chatMessages.appendChild(div);
  scrollToBottom();
}

function removeTypingIndicator() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function showError(text) {
  const div = document.createElement('div');
  div.className = 'message message-error';
  div.textContent = text;
  chatMessages.appendChild(div);
  scrollToBottom();
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ============================================
// API Call con SSE Streaming
// ============================================

async function sendMessage(message) {
  const history = getHistory();

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        history,
        lang: currentLang
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Errore ${response.status}`);
    }

    removeTypingIndicator();
    const botMessageEl = addStreamingMessage();
    let fullResponse = '';

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;

        const data = line.slice(6);

        if (data === '[DONE]') continue;

        try {
          const parsed = JSON.parse(data);
          if (parsed.chunk) {
            fullResponse += parsed.chunk;
            botMessageEl.textContent = fullResponse;
            scrollToBottom();
          }
          if (parsed.error) {
            showError(parsed.error);
          }
        } catch {
          // Ignora linee non-JSON
        }
      }
    }

    if (fullResponse) {
      saveToHistory({ role: 'user', content: message });
      saveToHistory({ role: 'assistant', content: fullResponse });
    }

  } catch (error) {
    removeTypingIndicator();
    var errorMsg = window.i18n ? window.i18n.t('chat.error') : 'Errore di connessione. Verifica che il server sia attivo e riprova.';
    showError(errorMsg);
    console.error('Chat error:', error);
  }
}

// ============================================
// Event Handlers
// ============================================

async function handleSubmit(e) {
  e.preventDefault();

  const message = messageInput.value.trim();
  if (!message || isStreaming) return;

  addMessage(message, 'user');
  messageInput.value = '';

  isStreaming = true;
  sendBtn.disabled = true;
  messageInput.disabled = true;

  showTypingIndicator();

  await sendMessage(message);

  isStreaming = false;
  sendBtn.disabled = false;
  messageInput.disabled = false;
  messageInput.focus();
}

function clearConversation() {
  chatMessages.innerHTML = '';
  localStorage.removeItem(STORAGE_KEY);
  showWelcomeMessage();
}

// ============================================
// localStorage Memory
// ============================================

function getHistory() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveToHistory(entry) {
  const history = getHistory();
  history.push(entry);
  const trimmed = history.slice(-MAX_HISTORY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
}

function loadHistory() {
  const history = getHistory();
  for (const msg of history) {
    addMessage(msg.content, msg.role === 'user' ? 'user' : 'bot');
  }
}
