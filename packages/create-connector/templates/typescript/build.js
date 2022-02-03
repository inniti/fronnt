#!/usr/bin/env node

const esbuild = require('esbuild');
const { readFileSync } = require('fs');
const path = require('path');
const minimist = require('minimist');

let pkg;
try {
  pkg = JSON.parse(
    readFileSync(path.join(__dirname, 'package.json'), { encoding: 'utf8' })
  );
} catch (err) {
  console.error('Could not read package.json file', err);
  process.exit(1);
}

const args = minimist(process.argv.slice(2));

const externals = [
  ...Object.keys(pkg.dependencies),
  Object.keys(pkg.devDependencies),
];

const watcher = function (config) {
  return {
    onRebuild(error, result) {
      const date = new Date().toLocaleTimeString();
      if (error) {
        console.error(
          `[${date}] 🚨 rebuilding ${config} failed:`,
          error.message
        );
      } else {
        console.log(`[${date}] ✅ rebuilding ${config} succeeded.`, result);
      }
    },
  };
};

const baseConfig = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  external: externals,
  minify: false,
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
