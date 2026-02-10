# Portfolio Chatbot - Roadmap

## Stack
- **Frontend**: Vanilla JS, SSE streaming, GitHub Pages
- **Backend**: Vercel Serverless Functions
- **LLM**: Groq API (modello configurabile)
- **RAG**: Keyword-based (no vector DB, no embedding)
- **Storage**: Vercel KV (Redis) per analytics + rate limiting

---

## v1.0 - MVP Core
- [x] Struttura progetto + configurazione
- [x] Knowledge base con chunk tematici (contenuti reali)
- [x] RAG engine keyword-based
- [x] Guardrails + anti-hallucination
- [x] API serverless Vercel con SSE streaming
- [x] Frontend chat vanilla JS
- [x] Memoria conversazionale (localStorage)
- [x] Supporto bilingue IT/EN
- [ ] Deploy GitHub + Vercel

## v1.1 - Protezioni & Monitoring
- [ ] Rate limiting con Vercel KV (X richieste/IP/ora)
- [ ] Analytics base: conteggio query, lingue, topic
- [ ] Logging errori API
- [ ] Fallback message se Groq e' down

## v1.2 - UX Enhancements
- [ ] Suggested questions / quick replies
- [ ] Typing indicator animato
- [ ] Dark/Light mode toggle
- [ ] Animazioni messaggi (fade-in, slide)
- [ ] Copy-to-clipboard per risposte
- [ ] Mobile-first responsive migliorato

## v1.3 - Analytics Dashboard
- [ ] Dashboard admin protetta (password o token)
- [ ] Grafici: query/giorno, topic distribution, lingue
- [ ] Export dati CSV
- [ ] Tracking sessioni utente
- [ ] Heatmap orari di utilizzo

## v1.4 - RAG Avanzato
- [ ] Fuzzy matching per keyword (tolleranza typo)
- [ ] Sinonimi automatici IT/EN
- [ ] Pesi per categoria (boost progetti recenti)
- [ ] Chunk dinamici basati su contesto conversazione
- [ ] Fallback: se nessun chunk matcha, usa chunk "about me" generico

## v1.5 - Integrazioni
- [ ] Webhook notifiche (Telegram/email quando qualcuno chatta)
- [ ] Embed widget per altri siti (iframe/script)
- [ ] API pubblica documentata
- [ ] A/B testing prompt diversi

## v2.0 - Evoluzione
- [ ] Migrazione a embedding leggeri (se knowledge base cresce >20 chunk)
- [ ] Voice input (Web Speech API - gratuito)
- [ ] Generazione PDF del portfolio on-demand
- [ ] Multi-persona (portfolio per team)
