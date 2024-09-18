import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/oddboards-basic-ui-no-images/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
