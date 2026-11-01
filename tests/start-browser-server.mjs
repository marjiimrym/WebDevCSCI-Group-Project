// AI-assisted - see AI-USAGE.md #5. Deterministic production-serving harness; no NASA requests.
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { readConfig } from '../server/config.js';
import { createNasaService } from '../server/service.js';
import { createApp } from '../server/app.js';
const directory = await mkdtemp(path.join(os.tmpdir(), 'cosmic-browser-'));
const config = readConfig({ NASA_ENABLED: 'false', CACHE_DIR: directory, PORT: '4173', API_RATE_LIMIT: '10000' });
const service = await createNasaService(config);
const server = createApp(config, service, { serveFrontend: true }).listen(4173, '127.0.0.1');
async function close() {
  server.closeAllConnections();
  server.close();
  await service.close();
  await rm(directory, { recursive: true, force: true });
}
process.on('SIGINT', close);
process.on('SIGTERM', close);
