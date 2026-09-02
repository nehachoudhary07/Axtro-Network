import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.resolve(__dirname, 'dist');

// Enable Gzip/Brotli compression for all text-based responses
app.use(
  compression({
    level: 6,
    threshold: 1024, // only compress responses above 1KB
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

// Standard security & performance headers + HTTP Link preloads for early hints
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Push HTTP Link preload headers for root entry points
  if (req.path === '/' || req.path === '/index.html') {
    res.setHeader(
      'Link',
      '</hero-globe-dark.webp>; rel=preload; as=image; type="image/webp", </hero-globe-light.webp>; rel=preload; as=image; type="image/webp"'
    );
  }
  next();
});

// Cache hashed Vite assets for 1 year (immutable)
app.use(
  '/assets',
  express.static(path.join(DIST_DIR, 'assets'), {
    maxAge: '1y',
    immutable: true,
  })
);

// Cache other static assets (images, robots.txt, sitemap.xml) for 1 day
app.use(
  express.static(DIST_DIR, {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      // index.html should never be long-cached so new deployments propagate instantly
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    },
  })
);

// SPA routing fallback: send index.html for all non-file GET requests
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`⚡ Production server running at http://0.0.0.0:${PORT}`);
  console.log(`📦 Serving optimized production build from: ${DIST_DIR}`);
});
