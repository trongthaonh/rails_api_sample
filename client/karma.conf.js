// Karma configuration

module.exports = function(config) {
  var conf = require('./gulp/config');
  var webpackConfig = require('./webpack.config');
  global.__CONFIG = conf;
  global.__IS_PRODUCTION = false;
  config.set({
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],
    files: conf.path.test.src,
    exclude: [],
    preprocessors: {
      'assets/pc/spec/**/*Spec.js': ['webpack', 'coverage']
    },
    webpack: webpackConfig,
    // test results reporter to use possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'progress', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    client: {
        captureConsole: true,
        mocha: {
            reporter: 'html'
        }
    },
    port: 9001,
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE', 'Safari'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
