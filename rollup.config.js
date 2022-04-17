import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: false,
            name: 'react-number-scroll'
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: false
        }
    ],
    plugins: [
        external(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss(),
        terser()
    ]
}