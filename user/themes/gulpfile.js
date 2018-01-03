var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var templatesrc = 'g2a'

gulp.task('sass', function() {
  return gulp.src(templatesrc + '/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    // .pipe(sourcemaps.write('./maps'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(templatesrc + '/css'));
});

gulp.task('default', ['sass'], function() {
  // browserSync.init({
  //   server: {
  //     baseDir: "./"
  //   }
  // });
  gulp.watch('**/scss/**/*.scss', ['sass']);
  // gulp.watch('*.html').on('change', browserSync.reload);
  // gulp.watch('sass/**/*.scss').on('change', browserSync.reload);
  // gulp.watch('js/*.js').on('change', browserSync.reload);
});
