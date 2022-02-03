#!/usr/bin/env node

const esbuild = require('esbuild');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const watcher = function (config) {
  return {
    onRebuild(error, result) {
      if (error) {
        console.error(`🚨 rebuilding ${config} failed:`, error.message);
      } else {
        console.log(`✅ rebuilding ${config} succeeded.`, result);
      }
    },
  };
};

const baseConfig = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  minify: false,
  plugins: [
    {
      name: 'make-all-node-modules-packages-external',
      setup(build) {
        const filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/; // Must not start with "/" or "./" or "../"
        build.onResolve({ filter }, (args) => ({
          path: args.path,
          external: true,
        }));
      },
    },
  ],
};

const cjsConfig = {
  ...baseConfig,
  outfile: './dist/index.cjs',
  format: 'cjs',
  watch: !!args.watch ? watcher('cjs bundle') : false,
};

const mjsConfig = {
  ...baseConfig,
  outfile: './dist/index.mjs',
  format: 'esm',
  watch: !!args.watch ? watcher('esm bundle') : false,
};

Promise.all([esbuild.build(mjsConfig), esbuild.build(cjsConfig)])
  .then(([mjsBuild, cjsBuild]) => {
    // console.log('✅ done');
  })
  .catch((err) => {
    console.error('🚨 error', err);
    process.exit(1);
  });
