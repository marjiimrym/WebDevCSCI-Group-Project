// AI-assisted - see AI-USAGE.md #5.
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const proxy = { '/api': { target: env.API_PROXY_TARGET || 'http://127.0.0.1:3001', changeOrigin: true } };
  return {
    plugins: [react()],
    // Nested routes must load assets from the same root as the homepage.
    base: '/',
    server: { proxy },
    preview: { proxy },
  };
});
