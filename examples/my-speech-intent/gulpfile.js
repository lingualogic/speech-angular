/**
 * Automatisierung des Installprozesses fuer Speech-Angular
 * Hier werden folgende Dinge nach der Installation der NPM-Packete durchgefuehrt:
 * 
 *      - google.credentials.ts wird als leere Datei in credentials erzeugt
 */

'use strict';


// Module definieren

const fs = require('fs');
const gulp = require('gulp');
const file = require('gulp-file');
const inject = require('gulp-inject-string');
const runSequence = require('gulp4-run-sequence');


// Konstanten

const srcDir = 'src';
const credentialsDir = 'credentials';


// Hilfe-Funktionen

gulp.task('install-help', () => {
    console.log('Install-Kommandos');
    console.log('   install-google-credentials  - Erzeugen einer leeren Google-Credentials-Datei');
    console.log('   install                     - Erzeugt alle Dateien');
    console.log();
});


// Erzeuge-Funktionen


/**
 * Erzeugt google-credentials.ts in credentials/
 */

gulp.task('install-google-credentials', function() {
    try {
        // pruefen auf vorhandene Google-Credentials Datei
        fs.accessSync( `${credentialsDir}/google-credentials.ts` );
        return gulp.src( '*' ); // empty stream
    } catch (e) {
        // Datei ist nicht vorhanden und kann erzeugt werden
        return gulp.src([ `${credentialsDir}/google-credentials.ts` ], { allowEmpty: true })
            .pipe( file( 'google-credentials.ts', ''))
            .pipe(inject.append( "/**\n" ))
            .pipe(inject.append( " * Google Credentials\n" ))
            .pipe(inject.append( " */\n" ))
            .pipe(inject.append( "\n" ))
            .pipe(inject.append( "\n" ))
            .pipe(inject.append( "export const GOOGLE_APP_KEY = '';\n" ))
            .pipe( gulp.dest(  credentialsDir ));
    }
});


/**
 * Installiert alle benoetigten Dateien
 */

gulp.task('install', (callback) => {
    runSequence(
        'install-google-credentials',
        callback
    );
});
