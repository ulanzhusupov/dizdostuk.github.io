const gulp = require('gulp'),
      scss = require('gulp-sass'),
      browserSync = require('browser-sync');

gulp.task('scss', () => {
  return gulp.src('app/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('scripts', () => {
  return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('index', () => {
  return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', () => {
  gulp.watch('app/scss/*.scss', gulp.parallel('scss'));
  gulp.watch('app/*.html', gulp.parallel('index'));
  gulp.watch('app/js/*.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watch'));