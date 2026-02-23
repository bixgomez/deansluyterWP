#!/usr/bin/env node

import { spawn } from 'child_process';
import { watch } from 'chokidar';
import browserSync from 'browser-sync';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const bs = browserSync.create();
let distWatcher;

bs.init({
  proxy: 'https://deansluyter.ddev.site',
  open: false,
  notify: false,
  logLevel: 'info',
  https: true,
  snippetOptions: {
    rule: {
      match: /<\/body>/i,
      fn(snippet, match) {
        return snippet + match;
      },
    },
  },
});

console.log('\nBrowserSync ready at: https://localhost:3000');
console.log('Starting Vite in watch mode...\n');

const distPath = join(__dirname, 'dist');
mkdirSync(distPath, { recursive: true });

function startDistWatcher() {
  if (distWatcher) {
    return;
  }

  // Chokidar v4 no longer supports glob patterns; watch dist/ directly.
  distWatcher = watch(distPath, {
    ignored: /(^|[\/\\])\../,
    ignoreInitial: true,
    persistent: true,
    depth: 3,
    usePolling: true,
    interval: 200,
    awaitWriteFinish: {
      stabilityThreshold: 300,
      pollInterval: 100,
    },
  });

  distWatcher
    .on('ready', () => {
      console.log('Watching dist/ for CSS/JS changes...\n');
    })
    .on('all', (eventName, filePath) => {
      if (!/(add|change|unlink)/.test(eventName)) {
        return;
      }

      const isCssOrJs = filePath.endsWith('.css') || filePath.endsWith('.js');
      const isMap = filePath.endsWith('.map');
      if (!isCssOrJs || isMap) {
        return;
      }

      const relativePath = filePath.replace(distPath + '/', '');
      console.log(`[${new Date().toLocaleTimeString()}] ${eventName}: ${relativePath}`);
      bs.reload();
    })
    .on('error', (error) => {
      console.error('Watcher error:', error);
    });
}

startDistWatcher();

const viteProcess = spawn('npx', ['vite', 'build', '--watch', '--config', 'vite.config.mjs'], {
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true,
  env: {
    ...process.env,
    CHOKIDAR_USEPOLLING: 'true',
    CHOKIDAR_INTERVAL: '150',
  },
});

viteProcess.stdout.on('data', (data) => {
  process.stdout.write(data.toString());
});

viteProcess.stderr.on('data', (data) => {
  process.stderr.write(data);
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Vite process exited with code ${code}`);
  }
  cleanup();
});

function cleanup() {
  console.log('\nShutting down...');
  if (distWatcher) {
    distWatcher.close();
  }
  bs.exit();
  if (viteProcess) {
    viteProcess.kill();
  }
  process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
