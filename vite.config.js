// AI-assisted - see AI-USAGE.md #4
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Keep unconverted pages available in production during the incremental migration.
const legacyPages = readdirSync(new URL('./pages/', import.meta.url))
  .filter((file) => file.endsWith('.html'))
  .map((file) => fileURLToPath(new URL(`./pages/${file}`, import.meta.url)));

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rolldownOptions: {
      input: [fileURLToPath(new URL('./index.html', import.meta.url)), ...legacyPages],
    },
  },
});
