const MAX_MESSAGE_LENGTH = 500;

/**
 * Valida l'input dell'utente
 * @returns {{ valid: boolean, error?: string }}
 */
function validateInput(message) {
  if (!message || typeof message !== 'string') {
    return { valid: false, error: 'Messaggio vuoto o non valido.' };
  }

  const trimmed = message.trim();

  if (trimmed.length === 0) {
    return { valid: false, error: 'Messaggio vuoto.' };
  }

  if (trimmed.length > MAX_MESSAGE_LENGTH) {
    return { valid: false, error: `Messaggio troppo lungo (max ${MAX_MESSAGE_LENGTH} caratteri).` };
  }

  return { valid: true };
}

/**
 * Sanitizza l'input rimuovendo caratteri potenzialmente pericolosi
 */
function sanitizeInput(message) {
  return message
    .trim()
    .replace(/<[^>]*>/g, '')      // Strip HTML tags
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, ''); // Strip control chars
}

/**
 * Rileva la lingua del messaggio (semplice euristica)
 * @returns {'it' | 'en'}
 */
function detectLanguage(message) {
  const italianMarkers = [
    'ciao', 'come', 'cosa', 'chi', 'sei', 'quali', 'puoi', 'dimmi',
    'parlami', 'racconta', 'lavori', 'fai', 'competenze', 'esperienza',
    'progetti', 'formazione', 'contatti', 'dove', 'quando', 'perche',
    'sono', 'hai', 'tuo', 'tua', 'tuoi', 'vorrei', 'sapere'
  ];
  const englishMarkers = [
    'hello', 'hi', 'what', 'who', 'which', 'can', 'tell', 'about',
    'your', 'you', 'work', 'skills', 'experience', 'projects',
    'education', 'contact', 'where', 'when', 'why', 'how', 'please'
  ];

  const lower = message.toLowerCase();
  const itScore = italianMarkers.filter(w => lower.includes(w)).length;
  const enScore = englishMarkers.filter(w => lower.includes(w)).length;

  return itScore >= enScore ? 'it' : 'en';
}

/**
 * Costruisce il system prompt con contesto RAG e istruzioni anti-hallucination
 */
function buildSystemPrompt(contextChunks, lang) {
  const contextText = contextChunks
    .map(c => `[${c.title}]\n${c.content}`)
    .join('\n\n---\n\n');

  const instructions = lang === 'it' ? {
    role: `Sei Valerio, o meglio il suo assistente virtuale. Parla in prima persona come se fossi lui, in modo naturale, amichevole e colloquiale - come se stessi chiacchierando con qualcuno a un aperitivo. Niente tabelle, niente elenchi puntati infiniti, niente frasi fatte da robot.`,
    rules: `COME DEVI RISPONDERE:
- Parla in modo naturale e scorrevole, come in una conversazione vera. Usa frasi brevi e dirette.
- Rispondi basandoti sulle informazioni nel CONTESTO qui sotto. Se non trovi la risposta, dillo in modo spontaneo tipo "Mmh, su questo non ho info nel portfolio! Pero posso raccontarti altro, che ne dici?"
- NON inventare MAI informazioni non presenti nel contesto.
- Se la domanda non c'entra col portfolio, rispondi con simpatia tipo "Bella domanda, ma io so parlare solo del portfolio di Valerio! Vuoi sapere dei suoi progetti o delle sue esperienze?"
- Risposte BREVI: 2-4 frasi per domande semplici, un po' di piu solo se serve davvero.
- NON usare tabelle markdown. NON concludere con frasi tipo "Queste sono le sole informazioni presenti nel portfolio".
- Usa un tono caldo e genuino. Puoi usare espressioni colloquiali.
- Rispondi in italiano.`,
  } : {
    role: `You are Valerio's virtual assistant. Speak naturally and warmly, as if chatting with someone at a coffee break. No tables, no endless bullet points, no robotic phrases.`,
    rules: `HOW TO RESPOND:
- Speak naturally and conversationally, like a real chat. Use short, direct sentences.
- Answer based on the CONTEXT below. If you can't find the answer, say something like "Hmm, I don't have that in the portfolio! But I can tell you about other stuff, what do you think?"
- NEVER make up information not in the context.
- If the question isn't about the portfolio, reply warmly like "Good question, but I can only talk about Valerio's portfolio! Want to hear about his projects or experience?"
- Keep answers SHORT: 2-4 sentences for simple questions, more only when truly needed.
- Do NOT use markdown tables. Do NOT end with phrases like "These are the only items in the portfolio".
- Use a warm and genuine tone.
- Respond in English.`,
  };

  return `${instructions.role}

${instructions.rules}

--- CONTESTO PORTFOLIO ---
${contextText}
--- FINE CONTESTO ---`;
}

module.exports = { validateInput, sanitizeInput, detectLanguage, buildSystemPrompt };
