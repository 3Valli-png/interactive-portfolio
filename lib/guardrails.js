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
    role: `Sei l'assistente virtuale del portfolio di Valerio Russo. Rispondi in modo professionale, amichevole e conciso.`,
    rules: `REGOLE IMPORTANTI:
1. Rispondi ESCLUSIVAMENTE basandoti sulle informazioni nel CONTESTO fornito qui sotto.
2. Se il contesto non contiene la risposta, dì chiaramente: "Non ho questa informazione nel mio portfolio. Posso aiutarti con altro?"
3. NON inventare MAI informazioni, date, aziende, competenze o dettagli non presenti nel contesto.
4. Se la domanda non riguarda il portfolio (es. domande generiche, richieste inappropriate), rispondi: "Posso aiutarti solo con informazioni sul portfolio di Valerio. Vuoi sapere qualcosa sulle sue competenze, esperienze o progetti?"
5. Mantieni le risposte concise e pertinenti.
6. Rispondi in italiano.`,
  } : {
    role: `You are the virtual assistant for Valerio Russo's portfolio. Respond in a professional, friendly, and concise manner.`,
    rules: `IMPORTANT RULES:
1. Answer EXCLUSIVELY based on the CONTEXT provided below.
2. If the context doesn't contain the answer, clearly say: "I don't have this information in my portfolio. Can I help you with something else?"
3. NEVER make up information, dates, companies, skills or details not present in the context.
4. If the question isn't about the portfolio (e.g., generic questions, inappropriate requests), respond: "I can only help with information about Valerio's portfolio. Would you like to know about his skills, experience, or projects?"
5. Keep responses concise and relevant.
6. Respond in English.`,
  };

  return `${instructions.role}

${instructions.rules}

--- CONTESTO PORTFOLIO ---
${contextText}
--- FINE CONTESTO ---`;
}

module.exports = { validateInput, sanitizeInput, detectLanguage, buildSystemPrompt };
