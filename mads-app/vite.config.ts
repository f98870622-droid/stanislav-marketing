import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        input: path.resolve(__dirname, 'src/main.tsx'),
        output: {
          format: 'iife',
          name: 'MadsApp',
          inlineDynamicImports: true,
          entryFileNames: 'mads.js',
          assetFileNames: 'mads[extname]',
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
