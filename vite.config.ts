import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// Hardcoding the base path for GitHub Pages to ensure reliability
const basePath = '/iriscent-tech/';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'public'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    port: Number(process.env.PORT) || 5173,
    host: '0.0.0.0',
    fs: {
      strict: false,
    },
  },
  preview: {
    port: Number(process.env.PORT) || 5173,
    host: '0.0.0.0',
  },
});