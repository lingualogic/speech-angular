/**
 * Oberstes Gulpfile fuer das Speech-Angular SDK
 */


const gulp = require('gulp');
const path = require('path');
const childProcess = require('child_process');
const runSequence = require('run-sequence');

// Konstanten fuer Verzeichnisse

const rootDir = path.resolve( __dirname );
const docsDir = 'docs';
const srcDir = 'src';
const appDir = 'app';
const examplesDir = 'examples';
const assetsDir = 'src/assets';
const bundleDir = 'bundle';
const buildDir = 'build';
const speechDir = 'build/speech';
const distDir = 'dist';
const distAppDir = 'dist-app';
const e2eDir = 'e2e';
const testDir = 'test';
const cordovaDir = 'cordova';
const cordovaRootDir = path.join( rootDir, cordovaDir );
const cordovaAppDir = path.join( rootDir, cordovaDir, 'app');
const cordovaWwwDir = path.join( rootDir, cordovaDir, 'app/www');


/**
 * Ausfuehrungsfunktion
 *
 * @param {*} cmd
 * @param {*} done
 */

const exec = (cmd, done) => {
    const proc = childProcess.exec(cmd, {maxBuffer: 1024 * 500}, (error, stdout, stderr) => {
        if(error) {
            // eslint-disable-next-line
            console.log(`${cmd} exited with code ${error.code}`);
            done(error);
            return;
        }
        done();
    });

    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
};


const settings = {
    gulp,
    exec,
    rootDir,
    docsDir,
    srcDir,
    appDir,
    examplesDir,
    assetsDir,
    bundleDir,
    buildDir,
    speechDir,
    distDir,
    distAppDir,
    e2eDir,
    testDir,
    cordovaDir,
    cordovaRootDir,
    cordovaAppDir,
    cordovaWwwDir,
};


// Gulp-Skripte

require('./gulp/gulp-install')(settings);
require('./gulp/gulp-docs')(settings);
require('./gulp/gulp-dist')(settings);
require('./gulp/gulp-test')(settings);
require('./gulp/gulp-cordova')(settings);


// Gulp-Task


/**
 * Erzeugt die lauffaehige Speech-Angular Bibliothek speech-angular.js aus dem API-Quellcode
 */

gulp.task('build', function(callback) {
    runSequence(
        // 'test-unit',
        'dist-build',
        'docs-dist-typedoc',
        // 'test-e2e',
        'dist-pack',
        callback);
});

