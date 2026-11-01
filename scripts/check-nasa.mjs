// AI-assisted - see AI-USAGE.md #5. Opt-in smoke test; output never includes keys or upstream URLs.
import { readConfig } from '../server/config.js';
import { createNasaService } from '../server/service.js';
try { process.loadEnvFile(); } catch { /* Deployment may use environment variables. */ }
const config = readConfig();
const service = await createNasaService(config);
try {
  for (const kind of ['asteroids', 'apod', 'images', 'weather']) {
    const response = await service.get(kind, kind === 'images' ? 'orion' : '');
    console.log(JSON.stringify({ service: kind, ...response.meta, records: Array.isArray(response.data) ? response.data.length : response.data ? 1 : 0 }));
    if (response.meta.source !== 'nasa') process.exitCode = 1;
  }
} finally { await service.close(); }
