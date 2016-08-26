const gulp = require('gulp');

gulp.task('html', () => {
  return gulp.src(__CONFIG.path.html.dist)
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.htmlhint(__CONFIG.path.html.hint))
    .pipe($.htmlhint.reporter())
    .pipe($.htmlhint.failReporter());
});
