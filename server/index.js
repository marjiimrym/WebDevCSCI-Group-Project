// AI-assisted - see AI-USAGE.md #5.
import { readConfig } from './config.js';
import { createNasaService } from './service.js';
import { createApp } from './app.js';

try { process.loadEnvFile(); } catch (error) { if (error.code !== 'ENOENT') throw new Error('Unable to load .env', { cause: error }); }
const config = readConfig();
const service = await createNasaService(config);
const app = createApp(config, service);
const server = app.listen(config.port, config.host, () => {
  console.log(`Cosmic Explorer listening on port ${config.port}`);
  if (!config.apiKey && config.enabled) console.warn('NASA_API_KEY is missing. Asteroids use the saved sample until a key is configured.');
  service.start();
});
server.requestTimeout = 45000;
server.headersTimeout = 15000;
let shuttingDown = false;
async function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;
  const timeout = setTimeout(() => process.exit(1), 40000);
  timeout.unref();
  await new Promise((resolve) => server.close(resolve));
  await service.close();
  clearTimeout(timeout);
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
