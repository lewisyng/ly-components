import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
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
            postcss(),
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
