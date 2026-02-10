// ============================================
// Portfolio CV + Chatbot Widget
// Navigation + Chat Widget + SSE Streaming
// ============================================

const API_URL = 'https://interactive-portfolio-flame.vercel.app/api/chat';

const STORAGE_KEY = 'portfolio-chat-history';
const MAX_HISTORY = 20;

// State
let currentLang = 'it';
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
  const revealElements = document.querySelectorAll('.reveal');

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
}

// ============================================
// Chat Engine (SSE Streaming + localStorage)
// ============================================

// DOM Elements (resolved after DOMContentLoaded)
let chatMessages, chatForm, messageInput, sendBtn, langToggle, clearChat;

function initChat() {
  chatMessages = document.getElementById('chatMessages');
  chatForm = document.getElementById('chatForm');
  messageInput = document.getElementById('messageInput');
  sendBtn = document.getElementById('sendBtn');
  langToggle = document.getElementById('langToggle');
  clearChat = document.getElementById('clearChat');

  loadHistory();
  showWelcomeMessage();
  chatForm.addEventListener('submit', handleSubmit);
  langToggle.addEventListener('click', toggleLanguage);
  clearChat.addEventListener('click', clearConversation);
}

function showWelcomeMessage() {
  if (chatMessages.children.length > 0) return;

  const welcomeMsg = currentLang === 'it'
    ? 'Ciao! Sono l\'assistente virtuale di Valerio. Chiedimi qualcosa sulle sue competenze, esperienze, progetti o formazione.'
    : 'Hi! I\'m Valerio\'s virtual assistant. Ask me about his skills, experience, projects or education.';

  addMessage(welcomeMsg, 'bot');
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
    const errorMsg = currentLang === 'it'
      ? 'Errore di connessione. Verifica che il server sia attivo e riprova.'
      : 'Connection error. Check that the server is running and try again.';
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

function toggleLanguage() {
  currentLang = currentLang === 'it' ? 'en' : 'it';
  langToggle.textContent = currentLang === 'it' ? 'IT/EN' : 'EN/IT';
  messageInput.placeholder = currentLang === 'it'
    ? 'Chiedimi qualcosa...'
    : 'Ask me about my portfolio...';
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
