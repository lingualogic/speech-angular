/**
 * Automatisierung des Installprozesses fuer Speech-Angular
 * Hier werden folgende Dinge nach der Installation der NPM-Packete durchgefuehrt:
 * 
 *      - nuance.credentials.ts wird als leere Datei in credentials erzeugt
 */

'use strict';


// Module definieren

const fs = require('fs');
const file = require('gulp-file');
const inject = require('gulp-inject-string');
const runSequence = require('run-sequence');


module.exports = ({ gulp, credentialsDir }) => {

    // Hilfe-Funktionen

    gulp.task('install-help', () => {
        console.log('Install-Kommandos');
        console.log('   install-nuance-credentials  - Erzeugen einer leeren Nuance-Credentials-Datei');
        console.log('   install                     - Erzeugt alle Dateien');
        console.log();
    });


    // Erzeuge-Funktionen


    /**
     * Erzeugt nuance.credentials.ts in credentials/
     */

    gulp.task('install-nuance-credentials-ts', function() {
        try {
            // pruefen auf vorhandene Nuance-Credentials Datei
            fs.accessSync( `${credentialsDir}/nuance-credentials.ts` );
        } catch (e) {
            // Datei ist nicht vorhanden und kann erzeugt werden
            return gulp.src([ `${credentialsDir}/*.ts` ])
                .pipe( file( 'nuance-credentials.ts', ''))
                .pipe(inject.append( "/**\n" ))
                .pipe(inject.append( " * Nuance Credentials\n" ))
                .pipe(inject.append( " */\n" ))
                .pipe(inject.append( "\n" ))
                .pipe(inject.append( "\n" ))
                .pipe(inject.append( "export const APP_ID = '';\n" ))
                .pipe(inject.append( "export const APP_KEY = '';\n" ))
                .pipe(inject.append( "export const NLU_TAG = '';\n" ))
                .pipe( gulp.dest(  credentialsDir ));
        }
        return gulp.src( '' ); // empty stream
    });


    /**
     * Installiert alle benoetigten Dateien
     */

    gulp.task('install', (callback) => {
        runSequence(
            'install-nuance-credentials-ts',
            callback
        );
    });

};
