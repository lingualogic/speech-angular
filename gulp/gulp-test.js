/**
 * Automatisierung der Tests fuer Speech-Angular
 */

'use strict';


// Module definieren

const shell = require('gulp-shell');
const runSequence = require('run-sequence');


module.exports = ({ gulp }) => {


    // Hilfe-Funktionen

    gulp.task('test-help', () => {
        console.log('Gulp-Hilfe');
        console.log();

        console.log('Test-Kommandos');
        console.log('   test-unit         - alle Unit-Tests ausfuehren');
        console.log('   test-e2e          - alle E2E-Tests ausfuehren');
        console.log('   test              - alle Unit-Tests und E2E-Tests ausfuehren');
        console.log();

    });


    // Test Funktionen


    /**
     * Start aller Jest Unit-Tests
     */

    gulp.task('test-unit', shell.task('ng test'));


    /**
     * Stable E2E-Tests mit Chrome auf dem Mac starten
     */

    gulp.task('test-e2e', shell.task('ng e2e'));


    /**
     * Alle Tests ablaufen lassen
     */

    gulp.task('test', function(callback) {
        runSequence('test-unit', 'test-e2e', callback);
    });

};
