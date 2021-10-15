#!/usr/bin/env node

const { build } = require('esbuild');
const graphqlLoaderPlugin = require('@luckycatfactory/esbuild-graphql-loader')
  .default;

const buildConfig = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: './dist/index.js',
  minify: false,
  external: ['express', 'apollo-server', 'apollo-server-core'],
  format: 'cjs',
  plugins: [graphqlLoaderPlugin()],
};

const buildConfigMin = {
  ...buildConfig,
  outfile: './dist/index.min.js',
  minify: true,
};

const buildConfigEsm = {
  ...buildConfig,
  outfile: './dist/index.mjs',
  format: 'esm',
};

Promise.all([
  build(buildConfig),
  build(buildConfigMin),
  build(buildConfigEsm),
]).catch((e) => {
  console.error(e);
  process.exit(1);
});
