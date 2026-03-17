const { neon } = require('@neondatabase/serverless');

let sql;

function getClient() {
  if (!sql) {
    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL not set — chat logging disabled');
      return null;
    }
    sql = neon(process.env.DATABASE_URL);
  }
  return sql;
}

// Auto-create table on first call
let tableReady = false;

async function ensureTable() {
  if (tableReady) return;
  const client = getClient();
  if (!client) return;

  await client(`
    CREATE TABLE IF NOT EXISTS chat_logs (
      id            SERIAL PRIMARY KEY,
      created_at    TIMESTAMPTZ DEFAULT NOW(),
      user_message  TEXT NOT NULL,
      bot_response  TEXT,
      lang          VARCHAR(5),
      model         VARCHAR(100),
      duration_ms   INTEGER,
      rag_chunks    TEXT[],
      user_agent    VARCHAR(500),
      ip            VARCHAR(45)
    )
  `);
  tableReady = true;
}

async function logChat({ userMessage, botResponse, lang, model, durationMs, ragChunks, req }) {
  try {
    await ensureTable();
    const client = getClient();
    if (!client) return;

    const ua = (req?.headers?.['user-agent'] || '').slice(0, 500);
    const ip = req?.headers?.['x-forwarded-for']?.split(',')[0]?.trim() ||
               req?.headers?.['x-real-ip'] ||
               '';

    await client(
      `INSERT INTO chat_logs (user_message, bot_response, lang, model, duration_ms, rag_chunks, user_agent, ip)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [userMessage, botResponse, lang, model, durationMs, ragChunks || [], ua, ip]
    );
  } catch (err) {
    // Never let logging break the chat
    console.error('Chat log error:', err.message);
  }
}

async function getLogs({ limit = 50, offset = 0 } = {}) {
  await ensureTable();
  const client = getClient();
  if (!client) return [];

  return client(
    `SELECT id, created_at, user_message, bot_response, lang, model, duration_ms, rag_chunks
     FROM chat_logs ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
    [limit, offset]
  );
}

async function getStats() {
  await ensureTable();
  const client = getClient();
  if (!client) return null;

  const rows = await client(`
    SELECT
      COUNT(*)::int                                       AS total_chats,
      COUNT(DISTINCT DATE(created_at))::int               AS active_days,
      ROUND(AVG(duration_ms))::int                        AS avg_duration_ms,
      COUNT(*) FILTER (WHERE lang = 'it')::int            AS chats_it,
      COUNT(*) FILTER (WHERE lang = 'en')::int            AS chats_en,
      COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '24 hours')::int AS last_24h,
      COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days')::int   AS last_7d
    FROM chat_logs
  `);
  return rows[0];
}

module.exports = { logChat, getLogs, getStats };
