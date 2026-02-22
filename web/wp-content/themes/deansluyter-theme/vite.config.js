import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  publicDir: false,

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    manifest: false,
    minify: 'esbuild',
    sourcemap: true,

    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.js'),
      output: {
        entryFileNames: 'js/app.min.js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/style.min.css';
          }
          return 'assets/[name][extname]';
        },
      },
      external: ['jquery'],

    },
  },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        includePaths: [
          'node_modules',
          'node_modules/breakpoint-sass/stylesheets',
          'node_modules/@fortawesome/fontawesome-free/scss',
        ],
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
