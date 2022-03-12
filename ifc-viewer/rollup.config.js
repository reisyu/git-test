import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/app.js',
  output: {
    file: "bundle.js",
    format: 'cjs'
  },
  plugins: [ resolve() ]
};