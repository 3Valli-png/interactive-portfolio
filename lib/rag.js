const { chunks, fallbackChunk } = require('./knowledge');

// Stopwords IT/EN da ignorare durante il keyword matching
const STOPWORDS = new Set([
  // Italiano
  'il', 'lo', 'la', 'i', 'gli', 'le', 'un', 'uno', 'una', 'di', 'del', 'dello',
  'della', 'dei', 'degli', 'delle', 'a', 'al', 'allo', 'alla', 'ai', 'agli', 'alle',
  'da', 'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle', 'in', 'nel', 'nello',
  'nella', 'nei', 'negli', 'nelle', 'con', 'su', 'sul', 'sullo', 'sulla', 'sui',
  'sugli', 'sulle', 'per', 'tra', 'fra', 'e', 'o', 'ma', 'che', 'non', 'si',
  'come', 'anche', 'mi', 'ti', 'ci', 'vi', 'ne', 'lo', 'questo', 'quello',
  'sono', 'sei', 'ha', 'ho', 'hai', 'hanno', 'cosa', 'quale', 'quali',
  'molto', 'tutto', 'tutti', 'tutte', 'piu', 'suo', 'sua', 'suoi', 'sue',
  'mio', 'mia', 'miei', 'mie', 'tuo', 'tua', 'tuoi', 'tue',
  // English
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'can', 'shall', 'to', 'of', 'in', 'for',
  'on', 'with', 'at', 'by', 'from', 'as', 'into', 'through', 'during',
  'before', 'after', 'above', 'below', 'between', 'and', 'but', 'or',
  'not', 'no', 'nor', 'so', 'if', 'then', 'than', 'too', 'very',
  'just', 'about', 'up', 'out', 'it', 'its', 'this', 'that', 'these',
  'those', 'i', 'me', 'my', 'we', 'our', 'you', 'your', 'he', 'she',
  'they', 'them', 'their', 'what', 'which', 'who', 'whom', 'how',
  'all', 'each', 'every', 'both', 'few', 'more', 'most', 'some', 'any'
]);

// Parole che nonostante siano "comuni", sono importanti per il matching portfolio
const KEEP_WORDS = new Set([
  'chi', 'sei', 'who', 'contatti', 'contacts', 'email', 'lavoro', 'work',
  'progetti', 'projects', 'skills', 'competenze', 'formazione', 'education'
]);

/**
 * Estrae keyword significative dalla query dell'utente
 */
function extractKeywords(query) {
  return query
    .toLowerCase()
    .replace(/[^a-zA-Z0-9àèéìòùÀÈÉÌÒÙ\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 1)
    .filter(word => KEEP_WORDS.has(word) || !STOPWORDS.has(word));
}

/**
 * Calcola il punteggio di rilevanza di un chunk rispetto alle keywords
 */
function scoreChunk(keywords, chunk) {
  let score = 0;
  const chunkKeywords = chunk.keywords.map(k => k.toLowerCase());

  for (const keyword of keywords) {
    // Match esatto
    if (chunkKeywords.includes(keyword)) {
      score += 3;
      continue;
    }
    // Match parziale (keyword contenuta in una keyword del chunk o viceversa)
    for (const ck of chunkKeywords) {
      if (ck.includes(keyword) || keyword.includes(ck)) {
        score += 1;
        break;
      }
    }
    // Match nel contenuto del chunk
    if (chunk.content.toLowerCase().includes(keyword)) {
      score += 0.5;
    }
    // Match nel titolo
    if (chunk.title.toLowerCase().includes(keyword)) {
      score += 1;
    }
  }

  return score;
}

/**
 * Ritorna i chunk più rilevanti per la query dell'utente
 * @param {string} query - La domanda dell'utente
 * @param {number} topN - Numero massimo di chunk da restituire
 * @returns {{ chunks: Array, keywords: string[] }}
 */
function getRelevantContext(query, topN = 3) {
  const keywords = extractKeywords(query);

  if (keywords.length === 0) {
    return { chunks: [fallbackChunk], keywords: [] };
  }

  const scored = chunks
    .map(chunk => ({ chunk, score: scoreChunk(keywords, chunk) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);

  // Se nessun chunk ha matchato, usa il fallback
  if (scored.length === 0) {
    return { chunks: [fallbackChunk], keywords };
  }

  return {
    chunks: scored.map(({ chunk }) => chunk),
    keywords
  };
}

module.exports = { extractKeywords, getRelevantContext };
