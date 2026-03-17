const { getLogs, getStats } = require('../lib/logger');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Basic auth — set LOGS_SECRET in Vercel env vars
  const secret = process.env.LOGS_SECRET;
  if (!secret) {
    return res.status(503).json({ error: 'Logging not configured' });
  }

  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token !== secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { view = 'logs', limit = '50', offset = '0' } = req.query;

    if (view === 'stats') {
      const stats = await getStats();
      return res.json({ stats });
    }

    const logs = await getLogs({
      limit: Math.min(parseInt(limit) || 50, 200),
      offset: parseInt(offset) || 0,
    });

    return res.json({ logs, count: logs.length });

  } catch (error) {
    console.error('Logs API error:', error);
    return res.status(500).json({ error: 'Failed to fetch logs' });
  }
};
