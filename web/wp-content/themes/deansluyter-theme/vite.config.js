import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  base: '/wp-content/themes/deansluyter-theme/dist/',
  publicDir: false,

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    https: false,
    cors: true,
    origin: 'https://deansluyter.ddev.site:5173',
    hmr: {
      host: 'deansluyter.ddev.site',
      port: 5173,
      protocol: 'wss',
    },
    watch: {
      usePolling: true,
      interval: 300,
    },
  },

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    manifest: true,
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
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
});
