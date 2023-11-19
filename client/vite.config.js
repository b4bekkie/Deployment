import react from 'vite-plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: 'https://deployment-server-kappa.vercel.app',
  },
  plugins: [react()],
});