// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-safari-launcher'),
        require('karma-firefox-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
    ],

    client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    coverageIstanbulReporter: {
        dir: require('path').join(__dirname, '../coverage'),
        // reports: ['html', 'lcovonly', 'text', 'text-summary'],
        reports: ['json', 'html', 'lcovonly', 'text', 'text-summary'],
        combineBrowserReports: true,
        fixWebpackSourcePaths: true,
        skipFilesWithNoCoverage: true
    },

    // reporters: ['coverage-istanbul'],
    // reporters: ['progress', 'kjhtml', 'coverage-istanbul' ],
    reporters: ['progress', 'kjhtml' ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    // for all platforms
    // browsers: ['Chrome', 'Firefox'],

    // only for mac
    // browsers: ['Chrome', 'Firefox', 'Safari'],

    browsers: ['Chrome'],
    // browsers: ['Firefox'],
    // browsers: ['Safari'],

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1,

    singleRun: true
  });
};
