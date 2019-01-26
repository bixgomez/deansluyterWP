var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var sourcemaps  = require('gulp-sourcemaps');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  //watch files
  var files = [
    './sass/**/*.scss',
    './templates/**/*.php',
    './*.php'
  ];

  //initialize browsersync
  browserSync.init(files, {
    //browsersync with a php server
    proxy: "http://wp.deansluyter.local/",
    browser: ["google chrome"],
    notify: true
  });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
/*
gulp.task('sass', function () {
  return gulp.src([
      'sass/*.scss'
    ])
    .pipe(sass({
      sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream:true}));
});
*/


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream:true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("./sass/**/*.scss", ['sass']);
});
