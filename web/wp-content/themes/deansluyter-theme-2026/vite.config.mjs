import { defineConfig } from 'vite';
import { resolve } from 'path';

const __dirname = import.meta.dirname;

export default defineConfig({
  base: '/wp-content/themes/deansluyter-theme-2026/dist/',
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        styles: resolve(__dirname, 'entries/styles.js'),
        script: resolve(__dirname, 'js/script.js'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name]-[hash].js',
      },
    },
  },
});
