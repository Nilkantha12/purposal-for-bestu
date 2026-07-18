// Tiny local server so you can watch her answers land in responses.json
// while you're editing/testing in VS Code.
//
// Run with:  npm install   then   npm start
// Open:      http://localhost:3000
//
// This is for LOCAL TESTING only. Static hosts like GitHub Pages, Netlify,
// or Vercel can't run this server — on those, the site still works fine,
// it just won't have anywhere to log clicks to (the fetch() call in
// index.html fails silently and the site carries on as normal).

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const LOG_FILE = path.join(__dirname, 'responses.json');

app.use(express.json());
app.use(express.static(__dirname));

function readLog() {
  try {
    return JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
  } catch (err) {
    return [];
  }
}

function writeLog(entries) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(entries, null, 2));
}

app.post('/api/log', (req, res) => {
  const { sessionId, type, value, time } = req.body || {};
  if (!type) {
    return res.status(400).json({ ok: false, error: 'missing "type"' });
  }

  const entries = readLog();
  entries.push({
    sessionId: sessionId || 'unknown',
    type,
    value,
    time: time || new Date().toISOString()
  });
  writeLog(entries);

  console.log(`[response] ${type}:`, JSON.stringify(value));
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`\nSite running at http://localhost:${PORT}`);
  console.log(`Open responses.json in VS Code to watch her answers appear live.\n`);
});
