import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', 
      include: /\.(html|css|js|jsx|json|svg)$/, 
      exclude: /node_modules/, 
    }),
  ],
});
