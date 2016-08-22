/**
 * HTML Lintタスク
 * HTMLが変更されたときにLintを通す
 */
var gulp = require('gulp');

module.exports = (function () {
  gulp.task('html', function () {
    return gulp.src(__CONFIG.path.html.dist)
      .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
      .pipe($.htmlhint(__CONFIG.path.html.hint))
      .pipe($.htmlhint.reporter())
      .pipe($.htmlhint.failReporter());
  });
})();
