/**
 * Automatisierung des Installprozesses fuer Speech-Angular
 * Hier werden folgende Dinge nach der Installation der NPM-Packete durchgefuehrt:
 * 
 *      - microsoft-credentials.ts wird als leere Datei in credentials erzeugt
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
    console.log('   install-microsoft-credentials  - Erzeugen einer leeren Microsoft-Credentials-Datei');
    console.log('   install                        - Erzeugt alle Dateien');
    console.log();
});


// Erzeuge-Funktionen


/**
 * Erzeugt microsoft-credentials.ts in credentials/
 */

gulp.task('install-microsoft-credentials', function() {
    try {
        // pruefen auf vorhandene Microsoft-Credentials Datei
        fs.accessSync( `${credentialsDir}/microsoft-credentials.ts` );
        return gulp.src( '*' ); // empty stream
    } catch (e) {
        // Datei ist nicht vorhanden und kann erzeugt werden
        return gulp.src([ `${credentialsDir}/microsoft-credentials.ts` ], { allowEmpty: true })
            .pipe( file( 'microsoft-credentials.ts', ''))
            .pipe(inject.append( "/**\n" ))
            .pipe(inject.append( " * Microsoft Credentials\n" ))
            .pipe(inject.append( " */\n" ))
            .pipe(inject.append( "\n" ))
            .pipe(inject.append( "\n" ))
            .pipe(inject.append( "export const MICROSOFT_REGION = '';\n" ))
            .pipe(inject.append( "export const MICROSOFT_SUBSCRIPTION_KEY = '';\n" ))
            .pipe( gulp.dest(  credentialsDir ));
    }
});


/**
 * Installiert alle benoetigten Dateien
 */

gulp.task('install', (callback) => {
    runSequence(
        'install-microsoft-credentials',
        callback
    );
});
