var gulp = require('gulp');
var sass = require('gulp-sass')
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


gulp.task('sass', function() {
	gulp.src('sass/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(connect.reload())
		.pipe(livereload());
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});


gulp.task('watch', function() {
	livereload.listen({ port: 1234, basePath: 'app' });
	gulp.watch('*.html', ['html'])
	gulp.watch('sass/style.scss', ['sass']);
});

gulp.task('start', ['connect', 'html', 'sass', 'watch']);