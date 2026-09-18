import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static files with html extension fallback
app.use(express.static(__dirname, { extensions: ['html'] }));

// Fallback for barangay seal path alias
app.get('/png/barangay-seal.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'png', 'ugac.png'));
});

// Fallback to index.html for root or unknown clean URLs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
