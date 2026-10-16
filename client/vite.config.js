import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: { fs: { allow: ['..'] } },
  build: { chunkSizeWarningLimit: 1500 },
});
