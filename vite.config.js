import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Nested routes must load assets from the same root as the homepage.
  base: '/',
});