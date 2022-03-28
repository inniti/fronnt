#!/usr/bin/env node

const { build } = require('esbuild');
const graphqlLoaderPlugin =
  require('@luckycatfactory/esbuild-graphql-loader').default;

const pkg = require('./package.json');

const buildConfig = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: './dist/index.js',
  minify: false,
  external: Object.keys(pkg.dependencies),
  format: 'cjs',
  plugins: [graphqlLoaderPlugin()],
};

const buildConfigEsm = {
  ...buildConfig,
  outfile: './dist/index.mjs',
  format: 'esm',
};

Promise.all([build(buildConfig), build(buildConfigEsm)]).catch((e) => {
  console.error(e);
  process.exit(1);
});
