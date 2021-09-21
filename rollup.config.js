import {terser} from 'rollup-plugin-terser';

import packageJson from "./package.json";

export default {
  external: ['vue'],
  input: "demo/app.js",
  output: [
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true
    },
    {
      format: "esm",
      file: packageJson.module.replace(".js", ".min.js"),
      sourcemap: true,
      plugins: [terser()]
    }
  ],
  plugins: [
    {
      transform ( code, id ) {
        console.log( "vvvvvvvvvvvvvvv" );
        console.log( id );
        console.log( "---------------" );
        console.log( code );
        console.log( "^^^^^^^^^^^^^^^" );
        // not returning anything, so doesn't affect bundle
      }
    }]
};
