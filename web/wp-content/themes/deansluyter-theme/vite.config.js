import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: false,
    minify: 'esbuild',
    cssCodeSplit: false,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/style.scss'),
      output: {
        assetFileNames: 'css/style.min.css',
      },
    },
  },
});
