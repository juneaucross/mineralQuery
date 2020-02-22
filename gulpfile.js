const gulp        = require('gulp'),
      watch       = require('gulp-watch'),
      browserSync = require("browser-sync"),
      terser      = require('gulp-terser'),
      prefixer    = require('gulp-autoprefixer'),
      cssmin      = require('gulp-clean-css'),
      sourcemaps  = require('gulp-sourcemaps'),
      rimraf      = require('rimraf'),
      replace     = require('gulp-replace'),
      plumber     = require('gulp-plumber'),
      svgo        = require('gulp-svgo'),
      reload      = browserSync.reload;

const path = {
  build: {
    html: 'docs/',
    js: 'docs/assets/js/',
    libs: 'docs/assets/libs/',
    css: 'docs/assets/css/',
    svg: 'docs/assets/svg/',
    fonts: 'docs/assets/fonts/',
  },
  src: {
    meta: 'src/meta/*',
    html: 'src/[^_]*.html',
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

const config = {
  server: {
    baseDir: "./docs",
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "adularia",
};

function copyMeta (done) {
  gulp.src(path.src.meta)
    .pipe(gulp.dest(path.build.html))
  done();
}

function html (done) {
  gulp.src(path.src.html)
    .pipe(plumber())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
  done();
}

function js (done) {
  gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
  done();
}

function style (done) {
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(prefixer())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
  done();
}

function svg (done) {
  gulp.src(path.src.svg)
    .pipe(plumber())
    .pipe(svgo())
    .pipe(gulp.dest(path.build.svg))
    .pipe(reload({stream: true}));
  done();
}

function fonts (done) {
  gulp.src(path.src.fonts)
    .pipe(plumber())
    .pipe(gulp.dest(path.build.fonts));
  done();
}

function libs (done) {
  gulp.src(path.src.libs)
    .pipe(plumber())
    .pipe(gulp.dest(path.build.libs));
  done();
}

function watchTask () {
    watch(path.watch.html, gulp.series('html'));
    watch([path.watch.style], gulp.series('style'));
    watch([path.watch.js], gulp.series('js'));
    watch([path.watch.svg], gulp.series('svg'));
    watch([path.watch.fonts], gulp.series('fonts'));
    watch([path.watch.libs], gulp.series('libs'));
}

gulp.task('meta', copyMeta);
gulp.task('html', html);
gulp.task('js', js);
gulp.task('style', style);
gulp.task('svg', svg);
gulp.task('fonts', fonts);
gulp.task('libs', libs);

gulp.task('build', gulp.series(
  copyMeta,
  html,
  js,
  style,
  fonts,
  svg,
  libs
));

gulp.task('watch', watchTask);

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', gulp.series('build', gulp.parallel('webserver', 'watch')));
