/**
 * Automatisierung des Buildprozesses fuer Speech-Angular NPM-Package
 * wird im dist/ Ordner erzeugt
 */

'use strict';


// Module definieren

const shell = require('gulp-shell');
const del = require('del');
const runSequence = require('run-sequence');


module.exports = ({ gulp, docsDir, bundleDir, buildDir, speechDir, distDir }) => {


    // Hilfe-Funktionen

    gulp.task('dist-help', () => {
        console.log('Build-Kommandos');
        console.log('   dist-build  - Distribution erzeugen');
        console.log();
    });


    // Kopier-Funktionen fuer src nach dist


    /**
     * Kopiert die Indexdatei aus build/ nach dist/
     */

    gulp.task('dist-copy-index', function() {
        return gulp.src([
            `${speechDir}/index.d.ts`,
            `${buildDir}/speech-angular.js`
        ])
            .pipe( gulp.dest( distDir ));
    });


    /**
     * Kopiert die Sourcedateien aus build/src/const nach dist/src/const
     */

    gulp.task('dist-copy-const', function() {
        return gulp.src([
            `${speechDir}/const/speech-service-version.d.ts`
        ])
            .pipe( gulp.dest(`${distDir}/const`));
    });


    /**
     * Kopiert die Sourcedateien aus build/src nach dist/src/ von NuanceModule
     */

    gulp.task('dist-copy-nuance-module', function() {
        return gulp.src([
            `${speechDir}/nuance/nuance-module.d.ts`,
            `${speechDir}/nuance/nuance-module-option.interface.d.ts`,
        ])
        .pipe( gulp.dest( `${distDir}/nuance` ));
    });


    /**
     * Kopiert die Sourcedateien aus build/src nach dist/src/ von BaseService
     */

    gulp.task('dist-copy-base-service', function() {
        return gulp.src([
            `${speechDir}/base/base-service-const.d.ts`,
            `${speechDir}/base/base-service-option.interface.d.ts`,
            `${speechDir}/base/base-service.d.ts`
        ])
        .pipe( gulp.dest( `${distDir}/base` ));
    });


    /**
     * Kopiert die Sourcedateien aus build/src nach dist/src/ von SpeakService
     */

    gulp.task('dist-copy-speak-service', function() {
        return gulp.src([
            `${speechDir}/speak/speak-service-const.d.ts`,
            `${speechDir}/speak/speak-service-option.interface.d.ts`,
            `${speechDir}/speak/speak-service.d.ts`
        ])
        .pipe( gulp.dest( `${distDir}/speak` ));
    });


    /**
     * Kopiert die Sourcedateien aus build/src nach dist/src/ von ListenService
     */

    gulp.task('dist-copy-listen-service', function() {
        return gulp.src([
            `${speechDir}/listen/listen-service-const.d.ts`,
            `${speechDir}/listen/listen-service-option.interface.d.ts`,
            `${speechDir}/listen/listen-service.d.ts`
        ])
        .pipe( gulp.dest( `${distDir}/listen` ));
    });


    /**
     * Kopiert die Sourcedateien aus build/src nach dist/src/ von IntentService
     */

    gulp.task('dist-copy-intent-service', function() {
        return gulp.src([
            `${speechDir}/intent/intent-service-const.d.ts`,
            `${speechDir}/intent/intent-service-data.interface.d.ts`,
            `${speechDir}/intent/intent-service-option.interface.d.ts`,
            `${speechDir}/intent/intent-service.d.ts`
        ])
        .pipe( gulp.dest( `${distDir}/intent` ));
    });


    /**
     * Kopiert die Sourcedateien aus build/src nach dist/src/ von ActionService
     */

    gulp.task('dist-copy-action-service', function() {
        return gulp.src([
            `${speechDir}/action/action-service-const.d.ts`,
            `${speechDir}/action/action-service-data.interface.d.ts`,
            `${speechDir}/action/action-service-option.interface.d.ts`,
            `${speechDir}/action/action-service.d.ts`
        ])
        .pipe( gulp.dest( `${distDir}/action` ));
    });


    /**
     * Kopiert die Sourcedateien aus build/src nach dist/src/ von BotService
     */

    gulp.task('dist-copy-bot-service', function() {
        return gulp.src([
            `${speechDir}/bot/bot-service-const.d.ts`,
            `${speechDir}/bot/bot-service-action.interface.d.ts`,
            `${speechDir}/bot/bot-service-option.interface.d.ts`,
            `${speechDir}/bot/bot-service.d.ts`
        ])
        .pipe( gulp.dest( `${distDir}/bot` ));
    });


    /**
     * Kopiert die Bundledateien aus bundle/ nach dist/
     */

    gulp.task('dist-copy-bundle', function() {
        return gulp.src([
            `${bundleDir}/index.js`,
            `${bundleDir}/package.json`,
        ])
            .pipe( gulp.dest( distDir ));
    });


    /**
     * Kopiert die Originaldateien aus / nach dist/
     */

    gulp.task('dist-copy-original', function() {
        return gulp.src([
            'LICENSE',
            'CHANGELOG.md',
            'README.md'
        ])
        .pipe( gulp.dest( distDir ));
    });


    /**
     * Kopiert alle benoetigten Dateien aus docs/ nach dist/
     */

    gulp.task('dist-copy-src', (callback) => {
        runSequence(
            'dist-copy-index',
            'dist-copy-const',
            'dist-copy-nuance-module',
            'dist-copy-base-service',
            'dist-copy-speak-service',
            'dist-copy-listen-service',
            'dist-copy-intent-service',
            'dist-copy-action-service',
            'dist-copy-bot-service',
            'dist-copy-bundle',
            'dist-copy-original',
            callback
        );
    });


    // kopiert docs nach dist


    /**
     * Kopiert die Docsdateien aus docs/ nach dist/docs
     */

    gulp.task('dist-copy-docs-readme', function() {
        return gulp.src([
            `${docsDir}/*.md`,
            `${docsDir}/*.gif`
        ])
        .pipe( gulp.dest( `${distDir}/${docsDir}` ));
    });


    /**
     * Kopiert die Docsdateien aus docs/ nach dist/docs
     */

    gulp.task('dist-copy-docs-blog', function() {
        return gulp.src([
            `${docsDir}/blog/*.md`,
            `${docsDir}/blog/*.gif`
        ])
            .pipe( gulp.dest( `${distDir}/${docsDir}/blog` ));
    });


    /**
     * Kopiert die Docsdateien aus docs/ nach dist/docs
     */

    gulp.task('dist-copy-docs-design', function() {
        return gulp.src([
            `${docsDir}/design/*.md`,
            `${docsDir}/design/*.gif`
        ])
            .pipe( gulp.dest( `${distDir}/${docsDir}/design` ));
    });


    /**
     * Kopiert die Docsdateien aus docs/ nach dist/docs
     */

    gulp.task('dist-copy-docs-platform', function() {
        return gulp.src([
            `${docsDir}/platform/*.md`,
            `${docsDir}/platform/*.gif`
        ])
            .pipe( gulp.dest( `${distDir}/${docsDir}/platform` ));
    });


    /**
     * Kopiert die Docsdateien aus docs/ nach dist/docs
     */

    gulp.task('dist-copy-docs-roadmap', function() {
        return gulp.src([
            `${docsDir}/roadmap/*.md`,
            `${docsDir}/roadmap/*.gif`
        ])
            .pipe( gulp.dest( `${distDir}/${docsDir}/roadmap` ));
    });


    /**
     * Kopiert die Docsdateien aus docs/ nach dist/docs
     */

    gulp.task('dist-copy-docs-tutorial', function() {
        return gulp.src([
            `${docsDir}/tutorial/*.md`,
            `${docsDir}/tutorial/*.gif`
        ])
            .pipe( gulp.dest( `${distDir}/${docsDir}/tutorial` ));
    });


    /**
     * Kopiert alle benoetigten Dateien aus docs/ nach dist/
     */

    gulp.task('dist-copy-docs', (callback) => {
        runSequence(
            'dist-copy-docs-readme',
            'dist-copy-docs-blog',
            'dist-copy-docs-design',
            'dist-copy-docs-platform',
            'dist-copy-docs-roadmap',
            'dist-copy-docs-tutorial',
            callback
        );
    });


    /**
     * Kopiert alle benoetigten Dateien aus bundle/ nach dist/
     */

    gulp.task('dist-copy', (callback) => {
        runSequence(
            'dist-copy-src',
            'dist-copy-docs',
            callback
        );
    });


    /**
     * Loeschen der temporaeren Build-Verzeichnisse
     */

    gulp.task('dist-clean', function () {
        return del([
            `${speechDir}/**/*`,
            `${distDir}/**/*`,
            distDir,
            speechDir
        ]);
    });


    /**
     * Erzeugen von src-Ordner im Dist-Verzeichnis
     */

    gulp.task('dist-dir', shell.task('mkdir dist'));


    /**
     * Typescript transpilieren in build-Ordner
     */

    gulp.task('dist-transpile', shell.task('tsc -p src/speech'));


    /**
     * Erzeugt die auszuliefernde Client-Bibliothek mit rollup
     */

    gulp.task('dist-rollup', shell.task('rollup -c ./rollup.config.js'));


    /**
     * Verpackt die auszuliefernde Client-Bibliothek
     */

    gulp.task('dist-pack', shell.task('cd dist && npm pack'));


    /**
     * Erzeugt die lauffaehige Speech-Bibliothek speech.js aus dem API-Quellcode
     */

    gulp.task('dist-build', function(callback) {
        runSequence(
            'dist-clean',
            'dist-dir',
            'dist-transpile',
            'dist-rollup',
            'dist-copy',
            callback
        );
    });

};
