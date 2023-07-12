import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        external: ['./main.css'],
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            alias({
                entries: [{ find: 'src', replacement: __dirname + '/src' }],
            }),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            postcss({
                extract: false,
                modules: true,
                use: ['sass'],
            }),
            // url({
            //     include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
            //     limit: Infinity,
            //     fileName: '[dirname][name][extname]',
            // }),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['**/*.stories.tsx'],
            }),
            terser(),
        ],
        external: ['react', 'react-dom', 'styled-components'],
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/types.d.ts', format: 'es' }],
        plugins: [dts.default()],
    },
];
