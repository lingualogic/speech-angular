/**
 * Automatisierung des Buildprozesses von Speech-Angular
 */

'use strict';

// Module definieren

const gulp = require('gulp');
const shell = require('gulp-shell');
const runSequence = require('run-sequence');
const typedoc = require('gulp-typedoc');
const del = require('del');


// Hilfe-Funktionen

gulp.task('?', ['help']);

gulp.task('help', () => {
    console.log('Gulp-Hilfe');
    console.log();

    console.log('Doc-Kommandos:');
    console.log('   doc          - alle Dokumentationsgeneratoren ausfuehren');
    console.log();

    console.log('Test-Kommandos');
    console.log('   unit         - alle Unittests von API und Server mit JEST ausfuehren');
    console.log('   e2e          - alle E2E-Tests des Servers mit BrowserSync ausfuehren');
    console.log('   test         - alle Unittests und Integrationstests ausfuehren');
    console.log();

    console.log('Build-Kommandos');
    console.log('   build       - Speech-Angular in dist/ erzeugen');
    console.log();
});

// Dokumentations-Funktionen


/*
 * Kommandos:
 *
 *      typedoc
 */


/**
 * Erzeugt eine TypeDoc Entwickler Ausgabe fuer SpeechFramework
 */

gulp.task('doc', function() {
    return gulp
        .src(['./src/**/*.ts'])
        .pipe(typedoc({
            // TypeScript options (see typescript docs)
            module: 'commonjs',
            target: 'es6',
            experimentalDecorators: true,
            includeDeclarations: false,
            // Output options (see typedoc docs)
            out: './docs/api',
            // json: './typedoc.json',
            // TypeDoc options (see typedoc docs)
            name: 'Speech-Angular',
            mode: 'modules',
            types: [],
            exclude: [
                '**/index*.ts',
                '**/*.spec.ts'
            ],
            externalPattern: './node_modules/**',
            excludeExternals: true,
            ignoreCompilerErrors: true,
            plugins: ['typedoc-plugin-external-module-name'],
            version: true,
            verbose: true,
            hideGenerator: true,
            logger: typedoc.Logger
        }));
});


/**
 * Erzeugt eine TypeDoc Nutzer Ausgabe fuer SpeechFramework in den rdner dist/doc/api
 */

gulp.task('dist-doc', function() {
    return gulp
        .src(['./src/speech/**/*.ts'])
        .pipe(typedoc({
            // TypeScript options (see typescript docs)
            module: 'commonjs',
            target: 'es6',
            experimentalDecorators: true,
            includeDeclarations: false,
            // Output options (see typedoc docs)
            out: './dist/docs/api',
            // json: './typedoc.json',
            // TypeDoc options (see typedoc docs)
            name: 'Speech-Angular',
            mode: 'modules',
            types: [],
            exclude: [
                '**/index*.ts',
                '**/*.spec.ts'
            ],
            externalPattern: './node_modules/**',
            excludeExternals: true,
            ignoreCompilerErrors: true,
            plugins: ['typedoc-plugin-external-module-name'],
            version: true,
            verbose: true,
            hideGenerator: true,
            logger: typedoc.Logger
        }));
});



// Test Funktionen


/*
 * Kommandos:
 *
 *      unit
 *      e2e
 *      test
 */


/**
 * Start aller Jest Unit-Tests
 */

gulp.task('unit', shell.task('ng test'));


/**
 * Stable E2E-Tests mit Chrome auf dem Mac starten
 */

gulp.task('e2e', shell.task('ng e2e'));


/**
 * Alle Tests ablaufen lassen
 */

gulp.task('test', function(callback) {
    runSequence('unit', 'e2e', callback);
});


// Kopierkommandos fuer den dist-Ordner (NPM-Package speech-angular)


/**
 * Kopiert die Indexdatei aus build/ nach dist/
 */

gulp.task('copy-index', function() {
    return gulp.src([
        'build/index.d.ts',
        'build/speech-angular.js',
    ])
    .pipe( gulp.dest('dist/'));
});


/**
 * Kopiert die Konstanten aus build/const nach dist/const
 */

gulp.task('copy-const', function() {
    return gulp.src([
        'build/const/speech-service-version.d.ts',
    ])
    .pipe( gulp.dest('dist/const'));
});


/**
 * Kopiert die Sourcedateien aus build/src nach dist/src/ von SpeakService
 */

gulp.task('copy-speak-service', function() {
    return gulp.src([
        'build/speak/speak-service-const.d.ts',
        'build/speak/speak-service-option.interface.d.ts',
        'build/speak/speak-service.d.ts',
    ])
    .pipe( gulp.dest('dist/speak'));
});


/**
 * Kopiert die Sourcedateien aus build/src nach dist/src/ von ActionService
 */

gulp.task('copy-action-service', function() {
    return gulp.src([
        'build/action/action-service-const.d.ts',
        'build/action/action-service-data.interface.d.ts',
        'build/action/action-service-option.interface.d.ts',
        'build/action/action-service.d.ts',
    ])
    .pipe( gulp.dest('dist/action'));
});


/**
 * Kopiert die Sourcedateien aus build/src nach dist/src/ von BotService
 */

gulp.task('copy-bot-service', function() {
    return gulp.src([
        'build/bot/bot-service-const.d.ts',
        'build/bot/bot-service-action.interface.d.ts',
        'build/bot/bot-service-option.interface.d.ts',
        'build/bot/bot-service.d.ts',
    ])
    .pipe( gulp.dest('dist/bot'));
});


/**
 * Kopiert die Bundledateien aus bundle/ nach dist/
 */

gulp.task('copy-bundle', function() {
    return gulp.src([
        'bundle/index.js',
        'bundle/package.json',
        'bundle/README.md'
    ])
    .pipe( gulp.dest('dist/'));
});


/**
 * Kopiert die Originaldateien aus / nach dist/
 */

gulp.task('copy-original', function() {
    return gulp.src([
        'LICENSE',
        'CHANGELOG.md'
    ])
    .pipe( gulp.dest('dist/'));
});


/**
 * Kopiert die Docsdateien aus docs/ nach dist/docs
 */

gulp.task('copy-docs-blog', function() {
    return gulp.src([
        'docs/blog/*'
    ])
    .pipe( gulp.dest('dist/docs/blog'));
});


/**
 * Kopiert die Docsdateien aus docs/ nach dist/docs
 */

gulp.task('copy-docs-design', function() {
    return gulp.src([
        'docs/design/*'
    ])
    .pipe( gulp.dest('dist/docs/design'));
});


/**
 * Kopiert die Docsdateien aus docs/ nach dist/docs
 */

gulp.task('copy-docs-roadmap', function() {
    return gulp.src([
        'docs/roadmap/*'
    ])
    .pipe( gulp.dest('dist/docs/roadmap'));
});


/**
 * Kopiert alle benoetigten Dateien aus docs/ nach dist/
 */

gulp.task('copy-docs', (callback) => {
    runSequence('copy-docs-blog', 'copy-docs-design', 'copy-docs-roadmap', callback);
});


/**
 * Kopiert alle benoetigten Dateien aus bundle/ nach dist/
 */

gulp.task('dist-copy', function(callback) {
    runSequence('copy-index', 'copy-bundle', 'copy-original', 'copy-docs', 'copy-const', 'copy-speak-service', 'copy-action-service', 'copy-bot-service', callback);
});


// Build-Funktionen


/*
 * Kommandos:
 *
 *      build
 */


/**
 * Loeschen der temporaeren Build-Verzeichnisse
 */

gulp.task('build-clean', function () {
    return del([
        'build/**/*',
        'dist/**/*',
        'dist',
        'build'
    ]);
});


/**
 * Typescript transpilieren in build-Ordner
 */

gulp.task('build-transpile', shell.task('tsc -p src/speech'));


/**
 * Erzeugt die auszuliefernde Client-Bibliothek
 */

gulp.task('build-pack', shell.task('rollup -c ./rollup.config.js'));


/**
 * Erzeugt die lauffaehige SpeechService-Bibliothek speech-service.bundle.js aus dem API-Quellcode
 */

gulp.task('build', function(callback) {
    runSequence('build-clean', 'build-transpile', 'build-pack', 'dist-copy', 'dist-doc', callback);
});

