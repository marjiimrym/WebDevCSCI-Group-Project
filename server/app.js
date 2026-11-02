// AI-assisted - see AI-USAGE.md #5.
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist', import.meta.url));
export function createApp(config, service, { serveFrontend = config.production } = {}) {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', config.trustProxy);
  app.use(helmet({ contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"], scriptSrc: ["'self'"], styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'], imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", ...config.origins], objectSrc: ["'none'"], frameSrc: ["'none'"],
      upgradeInsecureRequests: config.production ? [] : null,
    },
  } }));
  app.use('/api', cors({
    origin(origin, done) { done(null, !origin || config.origins.includes(origin)); },
    methods: ['GET'], credentials: false,
  }));
  app.get('/api/health', (_req, res) => res.set('Cache-Control', 'no-store').json({
    status: service.cache.persistenceHealthy ? 'ok' : 'degraded',
    persistence: service.cache.persistenceHealthy ? 'ok' : 'unavailable',
    liveEnabled: config.enabled, keyedServicesConfigured: !!config.apiKey,
  }));
  app.use('/api', rateLimit({
    windowMs: 60000, limit: config.requestLimit, standardHeaders: 'draft-8', legacyHeaders: false,
    message: { error: { code: 'RATE_LIMITED', message: 'Too many requests. Please wait a minute.' } },
  }));
  app.use('/api', (_req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });
  for (const kind of ['asteroids', 'apod', 'images', 'weather']) {
    app.get(`/api/${kind}`, async (req, res) => {
      if (Object.keys(req.query).some((key) => kind !== 'images' || key !== 'q')) {
        return res.status(400).json({ error: { code: 'INVALID_QUERY', message: 'Unsupported query parameter.' } });
      }
      let query = '';
      if (kind === 'images') {
        if (typeof req.query.q !== 'string' || [...req.query.q].some((char) => char.charCodeAt(0) < 32)) {
          return res.status(400).json({ error: { code: 'INVALID_QUERY', message: 'Enter an image search term (1–120 characters).' } });
        }
        query = req.query.q.trim().replace(/\s+/g, ' ').toLowerCase();
        if (!query || query.length > 120) return res.status(400).json({ error: { code: 'INVALID_QUERY', message: 'Enter an image search term (1–120 characters).' } });
      }
      const result = await service.get(kind, query);
      // A valid historical fallback remains usable. No-data responses explicitly signal unavailability.
      res.status(['unavailable', 'disabled'].includes(result.meta.source) ? 503 : 200).json(result);
    });
  }
  app.use('/api', (_req, res) => res.status(404).json({ error: { code: 'NOT_FOUND', message: 'API route not found.' } }));
  if (serveFrontend) {
    app.use('/assets', express.static(path.join(dist, 'assets'), { immutable: true, maxAge: '1y' }));
    app.use(express.static(dist, { maxAge: 0 }));
    app.get('/{*path}', (req, res, next) => {
      // Preserve legacy .html bookmarks, but do not return HTML for missing assets.
      if (path.extname(req.path) && !req.path.endsWith('.html')) return next();
      res.set('Cache-Control', 'no-cache').sendFile(path.join(dist, 'index.html'));
    });
  }
  app.use((_req, res) => res.status(404).send('Not found'));
  app.use((_error, _req, res, _next) => res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'The service is temporarily unavailable.' } }));
  return app;
}
