module.exports = {
  proxy: 'https://deansluyter.ddev.site',
  https: true,
  open: false,
  notify: true,
  watch: true,
  files: [
    'dist/css/**/*.css',
    'dist/js/**/*.js',
    '**/*.php',
  ],
  watchEvents: ['add', 'change', 'unlink'],
  watchOptions: {
    ignoreInitial: true,
    usePolling: true,
    interval: 200,
    awaitWriteFinish: {
      stabilityThreshold: 300,
      pollInterval: 100,
    },
  },
};
