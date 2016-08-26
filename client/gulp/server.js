/**
 * Loca Setting
 */
// const gulp = require('gulp');
// gulp.task('server', () => {
//   gulp.src(__CONFIG.dist)
//     .pipe($.webserver({
//       port: 9000,
//       livereload: true,
//       fallback: 'index.html',
//       open: true,
//       proxies: [{
//         source: '/api',
//         target: 'http://localhost:3000/api'
//       }]
//     }));
// });

/**
 * Vagrant Setting
 */
const gulp = require('gulp');
gulp.task('server', () => {
  gulp.src(__CONFIG.dist)
    .pipe($.webserver({
      host: '0.0.0.0',
      port: 9000,
      livereload: false,
      directoryListing: false,
      fallback: 'index.html',
      open: true,
      proxies: [{
        source: '/api',
        target: 'http://localhost:3000/api'
      }]
    }));
});
