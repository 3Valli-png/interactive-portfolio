// ============================================
// Portfolio Chatbot - Client Side
// SSE Streaming + localStorage Memory
// ============================================

const API_URL = 'https://interactive-portfolio-flame.vercel.app/api/chat';

const STORAGE_KEY = 'portfolio-chat-history';
const MAX_HISTORY = 20; // Max messaggi salvati in localStorage

// State
let currentLang = 'it';
let isStreaming = false;

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const langToggle = document.getElementById('langToggle');
const clearChat = document.getElementById('clearChat');

// ============================================
// Inizializzazione
// ============================================

function init() {
  loadHistory();
  showWelcomeMessage();
  chatForm.addEventListener('submit', handleSubmit);
  langToggle.addEventListener('click', toggleLanguage);
  clearChat.addEventListener('click', clearConversation);
}

function showWelcomeMessage() {
  // Mostra benvenuto solo se non ci sono messaggi precedenti
  if (chatMessages.children.length > 0) return;

  const welcomeMsg = currentLang === 'it'
    ? 'Ciao! Sono l\'assistente virtuale di Valerio. Chiedimi qualcosa sulle sue competenze, esperienze, progetti o formazione.'
    : 'Hi! I\'m Valerio\'s virtual assistant. Ask me about his skills, experience, projects or education.';

  addMessage(welcomeMsg, 'bot');
}

// ============================================
// Gestione Messaggi
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

    // Rimuovi typing indicator e crea messaggio per lo streaming
    removeTypingIndicator();
    const botMessageEl = addStreamingMessage();
    let fullResponse = '';

    // Leggi lo stream SSE
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Processa le linee SSE nel buffer
      const lines = buffer.split('\n');
      buffer = lines.pop() || ''; // L'ultima linea potrebbe essere incompleta

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;

        const data = line.slice(6); // Rimuovi "data: "

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

    // Salva nella history
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

  // Mostra messaggio utente
  addMessage(message, 'user');
  messageInput.value = '';

  // Disabilita input durante lo streaming
  isStreaming = true;
  sendBtn.disabled = true;
  messageInput.disabled = true;

  showTypingIndicator();

  await sendMessage(message);

  // Riabilita input
  isStreaming = false;
  sendBtn.disabled = false;
  messageInput.disabled = false;
  messageInput.focus();
}

function toggleLanguage() {
  currentLang = currentLang === 'it' ? 'en' : 'it';
  langToggle.textContent = currentLang === 'it' ? 'IT/EN' : 'EN/IT';
  messageInput.placeholder = currentLang === 'it'
    ? 'Chiedimi qualcosa sul mio portfolio...'
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
  // Mantieni solo gli ultimi N messaggi
  const trimmed = history.slice(-MAX_HISTORY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
}

function loadHistory() {
  const history = getHistory();
  for (const msg of history) {
    addMessage(msg.content, msg.role === 'user' ? 'user' : 'bot');
  }
}

// ============================================
// Start
// ============================================

init();
