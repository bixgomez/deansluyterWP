import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          path.resolve(__dirname, 'node_modules/breakpoint-sass/stylesheets'),
          path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/scss'),
        ],
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: false,
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'src/main.js'),
      },
      output: {
        entryFileNames: 'js/app.min.js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/style.min.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
