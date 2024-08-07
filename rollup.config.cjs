const svelte = require('rollup-plugin-svelte');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;
const json = require('@rollup/plugin-json');
const typescript = require('@rollup/plugin-typescript');
const css = require('rollup-plugin-css-only')
const { terser } = require('rollup-plugin-terser');
const sveltePreprocess = require('svelte-preprocess');
const path = require('path');
const md = require('rollup-plugin-md');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const glob = require('rollup-plugin-glob');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
    input: path.resolve('src/main.ts'),
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess({sourceMap: !production, postcss: true}),
            compilerOptions: {
                dev: !production
            }
        }),
        postcss({
            plugins: [
                autoprefixer(),
            ],
            extract: 'bundle.css',  // Ensure correct output path for CSS
            sourceMap: true,
            minimize: production
        }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        json(),
        md(),
        glob({
            name: '**/*.md',
            base: './src/',
        }),
        typescript({
            sourceMap: !production,
            inlineSources: !production,
            tsconfig: './tsconfig.json'
        }),
        !production && serve(),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}
