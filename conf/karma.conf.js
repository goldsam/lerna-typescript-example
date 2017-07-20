const path = require("path");
const karma = require('karma');
const config = require ('./config');
const webpackKarmaConfig = require("./webpack-karma.config");

const watchMode = false;

const coverageReportPath = path.join(config.path, 'report/coverage');

module.exports = (config) => {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: packagePath,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      "jasmine"
    ],

    client: {
      captureConsole: true
    },

    // list of files / patterns to load in the browser
    files: [
      path.join(packagePath, 'node_modules/core-js/client/shim.js'),
      path.join(packagePath, 'node_modules/reflect-metadata/Reflect.js'),
      path.join(packagePath, 'node_modules/tslib/tslib.js'),
      {
        pattern: 'test/**/*.spec.ts', watched: watchMode, included: true
      }
    ],

    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.ts': ['webpack', 'sourcemap', 'coverage'],
      'test/**/*.ts': ['webpack', 'sourcemap']
    },

    webpack: webpackKarmaConfig,

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },

    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "coverage-istanbul"],

    // Coverage reports config.
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary'],
      dir: path.join(coverageReportPath, 'html'),
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: karma.LOG_WARN,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: watchMode,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],
    // browsers: ['ChromeDebugging'],
    
    // customLaunchers: {
    //   ChromeDebugging: {
    //     base: 'Chrome',
    //     flags: ['--remote-debugging-port=9333']
    //   }
    // },

    browserNoActivityTimeout: 100000,
    
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
