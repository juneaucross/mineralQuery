'use strict';

var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    browserSync = require("browser-sync"),
    uglify      = require('gulp-uglify'),
    prefixer    = require('gulp-autoprefixer'),
    cssmin      = require('gulp-clean-css'),
    sourcemaps  = require('gulp-sourcemaps'),
    rimraf      = require('rimraf'),
    replace     = require('gulp-replace'),
    plumber     = require('gulp-plumber'),
    babel       = require('gulp-babel'),
    svgo        = require('gulp-svgo'),
    reload      = browserSync.reload;

var path = {
  build: {
    html: 'docs/',
    js: 'docs/assets/js/',
    libs: 'docs/assets/libs/',
    css: 'docs/assets/css/',
    svg: 'docs/assets/svg/',
    fonts: 'docs/assets/fonts/',
  },
  src: {
    html: 'src/[^_]*.{html,ico,txt,json}',
    js: 'src/js/*.js',
    libs: 'src/libs/*.js',
    style: 'src/css/*.css',
    svg: 'src/svg/**/*.svg',
    fonts: 'src/fonts/**/*.*',
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/css/**/*.css',
    svg: 'src/svg/**/*.*',
    fonts: 'src/fonts/**/*.*',
    libs: 'src/libs/*.js',
  },
  clean: './docs',
};

var config = {
  server: {
    baseDir: "./docs",
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "adularia",
};

gulp.task('html:build', function () {
  gulp.src(path.src.html)
    .pipe(plumber())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true})); //перезагружаем сервер
});

gulp.task('js:build', function () {
  gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(sourcemaps.init()) //инициализация source-map
    .pipe(babel({
            presets: ['@babel/env']
        }))
    .pipe(uglify()) //минификация JS файла
    .pipe(sourcemaps.write()) //запись source-map
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(prefixer({
        browsers: ['last 6 versions']
    }))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});

gulp.task('svg:build', function () {
  gulp.src(path.src.svg)
      .pipe(plumber())
      .pipe(svgo())
      .pipe(gulp.dest(path.build.svg))
      .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
      .pipe(plumber())
      .pipe(gulp.dest(path.build.fonts))
});

gulp.task('libs:build', function() {
  gulp.src(path.src.libs)
      .pipe(plumber())
      .pipe(gulp.dest(path.build.libs))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'svg:build',
    'libs:build',
    // 'copycss'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.svg], function(event, cb) {
        gulp.start('svg:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
    watch([path.watch.libs], function(event, cb) {
        gulp.start('libs:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);
