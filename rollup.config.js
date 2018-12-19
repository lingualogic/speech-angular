// rollup.config.js fuer Speech-Angualr

import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';


// Speech-Angular Version

import {
    SPEECHSERVICE_VERSION_NUMBER,
    SPEECHSERVICE_VERSION_BUILD,
    SPEECHSERVICE_VERSION_TYPE,
    SPEECHSERVICE_VERSION_DATE,
    SPEECHSERVICE_VERSION_STRING
} from './src/speech/const/speech-service-version.ts';

console.log('');
console.log('*****************************************************************');
console.log('**                                                             **');
console.log('**  Speech-Angular VERSION: ' + SPEECHSERVICE_VERSION_STRING + '  **');
console.log('**                                                             **');
console.log('*****************************************************************');
console.log('');

// Parameter fuer die Erzeugung der speech-angular.js Datei

let readableSourceCode = true; // true, wenn Code lesbar sein soll, false sonst (uglify/minify)
let preambleText =
`/**
 * Speech-Angular
 *
 * Version: ${SPEECHSERVICE_VERSION_NUMBER}
 * Build:   ${SPEECHSERVICE_VERSION_BUILD}
 * TYPE:    ${SPEECHSERVICE_VERSION_TYPE}
 * Datum:   ${SPEECHSERVICE_VERSION_DATE}
 * Autor:   LinguaLogic Team
 * Lizenz:  MIT
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
`;


let typescriptDefaults = { compilerOptions: { declaration: true } };
let typescriptOverride = { compilerOptions: { declaration: false } };

export default {
    input: './src/speech/index.ts',
    output: {
        file: './build/speech-angular.js',
        format: 'umd',
        name: 'speech-angular',
        sourcemap: false,
        globals: {
            // 'speech': 'speech',
            '@angular/core': '@angular/core'
        }

    },
    external: [
        // 'speech',
        '@angular/core'
    ],
    plugins: [
        typescript({
            tsconfigDefaults: typescriptDefaults,
            tsconfig: './src/speech/tsconfig.build.json',
            tsconfigOverride: typescriptOverride
        }),

        json(),

        uglify({ output: {
            beautify: readableSourceCode,
            preamble: preambleText,
            quote_style: 3
        }}, minify),

        nodeResolve({
            jsnext: true,
            main: false
        }),

        commonjs({
            // non-CommonJS modules will be ignored, but you can also
            // specifically include/exclude files
            include: [
                './src/speech/**',
                './node_modules/**'],
            // Default: undefined
            // exclude: ['node_modules/**'], // Default: undefined
            // these values can also be regular expressions
            // include: /node_modules/

            // search for files other than .js files (must already
            // be transpiled by a previous plugin!)
            extensions: ['.js', '.ts'], // Default: [ '.js' ]

            // if true then uses of `global` won't be dealt with by this plugin
            ignoreGlobal: false, // Default: false

            // if false then skip sourceMap generation for CommonJS modules
            sourceMap: false, // Default: true

            // explicitly specify unresolvable named exports
            // (see below for more details)
            /*
            namedExports: {
                'node_modules/rxjs/Observable.js': [ 'Observable' ],
                'node_modules/rxjs/Subject': [ 'Subject' ] }  // Default: undefined
            */
            // sometimes you have to leave require statements
            // unconverted. Pass an array containing the IDs
            // or a `id => boolean` function. Only use this
            // option if you know what you're doing!
            //ignore: [ 'conditional-runtime-dependency' ]
        })
    ],

};
