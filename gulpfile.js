var gulp = require('gulp')
var uglify = require('gulp-uglify')
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', ['js', 'html'], function () {
  return gulp.src('./src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist'))
})

gulp.task('js', function () {
  return gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
})

gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
})