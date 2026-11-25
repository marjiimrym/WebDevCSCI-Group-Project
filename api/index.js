// Vercel serverless entry. Same Express app as server/index.js, minus the
// long-running listener, background refresh timer and shutdown hooks: each
// /api route already fetches from NASA on demand when its cache is empty.
import { readConfig } from '../server/config.js';
import { createNasaService } from '../server/service.js';
import { createApp } from '../server/app.js';

// Only /tmp is writable on Vercel. The cache lives as long as a warm instance.
// ponytail: per-instance cache; move to Vercel KV/Blob if NASA rate limits bite.
process.env.CACHE_DIR ||= '/tmp/nasa-cache';

const config = readConfig();
const service = await createNasaService(config);

// Vercel serves the built frontend from its CDN, so Express only handles /api.
export default createApp(config, service, { serveFrontend: false });
