/**
 * Automatisierung des Installprozesses fuer Speech-Angular
 * Hier werden folgende Dinge nach der Installation der NPM-Packete durchgefuehrt:
 * 
 *      - nuance.credentials.ts wird als leere Datei in src/speech/config erzeugt
 */

'use strict';


// Module definieren

const fs = require('fs');
const del = require('del');
// const shell = require('gulp-shell');
const rename = require('gulp-rename');
// const replace = require('gulp-replace');
const runSequence = require('run-sequence');


module.exports = ({ gulp, srcDir }) => {

    // Hilfe-Funktionen

    gulp.task('install-help', () => {
        console.log('Install-Kommandos');
        console.log('   install-nuance-credentials  - Erzeugen einer leeren Nuance-Credentials-Datei');
        console.log('   install                     - Erzeugt alle Dateien');
        console.log();
    });


    // Erzeuge-Funktionen


    /**
     * Kopiert die Indexdatei aus build/ nach dist/
     */

    gulp.task('install-nuance-credentials', function() {
        try {
            // pruefen auf vorhandene Nuance-Credentials Datei
            fs.accessSync( `${srcDir}/config/nuance-credentials.ts` );
        } catch (e) {
            // Datei ist nicht vorhanden und kann erzeugt werden
            return gulp.src([ `${srcDir}/config/nuance-credentials.default.ts` ])
                .pipe( rename('nuance-credentials.ts'))
                .pipe( gulp.dest( `${srcDir}/config` ));
        }
        return gulp.src([]); // empty stream
    });


    /**
     * Installiert alle benoetigten Dateien
     */

    gulp.task('install', (callback) => {
        runSequence(
            'install-nuance-credentials',
            callback
        );
    });

};
