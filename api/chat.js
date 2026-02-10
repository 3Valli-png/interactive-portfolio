const Groq = require('groq-sdk');
const { getRelevantContext } = require('../lib/rag');
const { validateInput, sanitizeInput, detectLanguage, buildSystemPrompt } = require('../lib/guardrails');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const MODEL = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const { message, history = [], lang: requestedLang } = req.body;

    // Validazione input
    const validation = validateInput(message);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }

    const cleanMessage = sanitizeInput(message);
    const lang = requestedLang || detectLanguage(cleanMessage);

    // RAG: recupera contesto rilevante
    const { chunks: relevantChunks } = getRelevantContext(cleanMessage);

    // Costruisci system prompt con contesto
    const systemPrompt = buildSystemPrompt(relevantChunks, lang);

    // Prepara messaggi per il modello
    const messages = [
      { role: 'system', content: systemPrompt },
      // Includi history recente (max ultimi 6 messaggi per risparmiare token)
      ...history.slice(-6),
      { role: 'user', content: cleanMessage }
    ];

    // Chiama Groq con streaming
    const stream = await groq.chat.completions.create({
      model: MODEL,
      messages,
      stream: true,
      temperature: 0.6,  // Bilanciata: fedele al contesto ma naturale
      max_tokens: 512,   // Risposte brevi e conversazionali
    });

    // SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Stream dei token
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        res.write(`data: ${JSON.stringify({ chunk: content })}\n\n`);
      }
    }

    // Segnala fine stream
    res.write('data: [DONE]\n\n');
    res.end();

  } catch (error) {
    console.error('Chat API error:', error);

    // Se headers SSE già inviati, chiudi lo stream con errore
    if (res.headersSent) {
      res.write(`data: ${JSON.stringify({ error: 'Si è verificato un errore. Riprova.' })}\n\n`);
      res.write('data: [DONE]\n\n');
      return res.end();
    }

    return res.status(500).json({
      error: 'Errore interno del server. Riprova tra qualche secondo.'
    });
  }
};
