import { defineConfig } from 'vite';
import { resolve } from 'path';
import sassGlobImports from 'vite-plugin-sass-glob-import';

const __dirname = import.meta.dirname;

export default defineConfig({
  base: '/wp-content/themes/deansluyter-theme-2026/dist/',
  publicDir: false,
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
        loadPaths: [
          resolve(__dirname, 'node_modules'),
          resolve(__dirname, 'node_modules/breakpoint-sass/stylesheets'),
          resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/scss')
        ]
      }
    },
    devSourcemap: true
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        styles: resolve(__dirname, 'entries/styles.js'),
        script: resolve(__dirname, 'js/script.js'),
        admin: resolve(__dirname, 'entries/admin.js'),
        styles_editor: resolve(__dirname, 'entries/styles_editor.js'),
        styles_editor_extra: resolve(__dirname, 'entries/styles_editor_extra.js')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name]-[hash].js'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  plugins: [sassGlobImports()]
});
