
// dependencies
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    gulpFilter = require('gulp-filter'),
    livereload = require('gulp-livereload'),
    mainBowerFiles = require('main-bower-files'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngHtml2Js = require("gulp-ng-html2js"),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer');

// paths
var sources = {
  app: {
    js: ['./app/**/*.js'],
    sass: ['./css/app.scss']
  },
  images: ['./img/**/*.*'],
  fonts: ['./assets/fonts/**/*.*'],
  index: ['./index.html'],
  templates: ['./app/**/*.html', '!./app/index.html']
};
var destinations = {
  css: './dist/css/',
  fonts: './dist/fonts/',
  images: './dist/images/',
  js: './dist/js/',
  root: './dist/'
};

/* JAVASCRIPTS */

// concat and minify vendor js
gulp.task('appJs', function() {

  gulp.src(mainBowerFiles('**/*.js').concat(sources.app.js))
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(gulp.dest(destinations.js))
  .pipe(livereload());
});

// // concat and minify app js
// gulp.task('appJs', function() {
//   gulp.src(sources.app.js)
//   .pipe(concat('app.js'))
//   .pipe(ngAnnotate())
//   .pipe(uglify())
//   .pipe(gulp.dest(destinations.js))
//   .pipe(livereload());
// });

/* STYLES */
var sassOptions = {
      outputStyle: 'compressed'
    },
    autoprefixerOptions = {
      browsers: [
        '> 1%',
        'Safari >= 4',
        'Firefox >= 30',
        'Android >= 4.2'
      ],
      cascade: false
    };

// gulp.task('vendorStyles', function() {
//   gulp
//     .src(mainBowerFiles('**/*.css'), { base: './' })
//     .pipe(concat({path: 'vendor.css', cwd: ''}))
//     .pipe(cssnano())
//     .pipe(gulp.dest(destinations.css));
// });

// concat and compress application css
gulp.task('appStyles', function() {
  gulp
    .src(sources.app.sass)
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(destinations.css))
    .pipe(livereload());
});

/* FONTS */
gulp.task('fonts', function() {
  gulp
    .src(mainBowerFiles(['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2']))
    .pipe(flatten())
    .pipe(gulp.dest(destinations.fonts));
});

/* HTML */

/* COPY */

//copy images to dist
gulp.task('images', function() {
  gulp.src(sources.images)
  .pipe(gulp.dest(destinations.images))
  .pipe(livereload());
});

//copy index to dist
gulp.task('index', function() {
  gulp.src(sources.index)
  .pipe(gulp.dest(destinations.root))
  .pipe(livereload());
});

var html2JsOptions = {
  moduleName: 'nc-wedding.templates',
  standAlone: true
};

gulp.task('templates', function() {
  gulp
    .src(sources.templates)
    .pipe(ngHtml2Js(html2JsOptions))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(destinations.js));
});

/* GULP */

//build
gulp.task('build', [
  // 'vendorJs',
  'appJs',
  // 'vendorStyles',
  'appStyles',
  'images',
  'fonts',
  'templates',
  'index'
]);

//watch scripts, styles, and templates
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(sources.app.js, ['appJs']);
  gulp.watch(sources.app.sass.concat('./app/**/*.scss'), ['appStyles']);
  gulp.watch(sources.images, ['images']);
  gulp.watch(sources.index, ['index']);
  gulp.watch(sources.templates, ['templates']);
  gulp.watch('./bower.json', ['vendorJs', 'vendorStyles', 'fonts']);
});

//default
gulp.task('default', ['build', 'watch']);
