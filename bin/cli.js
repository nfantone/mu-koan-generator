#!/usr/bin/env node

'use strict';
/**
 * A command line utility to generate
 * a Koa 2.0.0+ REST API scaffolding.
 */
const path = require('path');
const argv = require('yargs')
  .usage('Usage: mu-koan [name] [-f --force] [-v]')
  .help('h')
  .alias('h', 'help')
  .version(function() {
    return require('./package').version;
  })
  .default('name', () => {
    // If no name was provided, resolve to cwd
    return path.basename(path.resolve(process.cwd()));
  })
  .alias('f', 'force')
  .count('verbose')
  .alias('v', 'verbose')
  .describe('v', 'Sets the verbosity level for log messages')
  .alias('V', 'version')
  .epilog('https://github.com/nfantone/mu-koan-generator').argv;

const log = require('../lib/logger')(argv.verbose);
const dir = require('../lib/dir');
const npm = require('../lib/npm-helper');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

/**
 * Log a message and exit this process.
 *
 * @method exit
 * @param  {String} err   Error log message
 * @param  {String} level Logger level
 * @return {undefined}
 */
function exit(err, level) {
  level = level || 'error';
  if (err) {
    log[level]('Something went wrong:', err);
    return process.exit(1);
  }
  log.info('Try "mu-koan --help" for more information');
  log.debug('Done');
  return process.exit();
}

/**
 * Generates a new API scaffolding, runs `npm init` and
 * `npm install`.
 *
 * @method main
 * @return {[type]} [description]
 */
function main() {
  var destinationPath = process.cwd() || '.';
  destinationPath = path.resolve(destinationPath);

  // Check if CWD is not empty
  if (dir.isEmpty(destinationPath)) {
    log.info('Creating project "%s" into [%s]', argv.name, destinationPath);

    // Copy everything under ./templates to CWD
    dir.copy(TEMPLATES_DIR, destinationPath, {
      confirm: true
    }, (err, files) => {
      if (err) {
        return exit(err);
      }
      files.forEach((file) => log.info('Created %s', file));

      log.debug('Initializing npm project');
      return npm.init()
        .then(() => {
          log.info('Installing npm dependencies (this may take a while)...');
          return npm.install();
        })
        .then(() => log.info('Done ("npm start" to begin)'))
        .catch(exit);
    });
  } else if (argv.force) {
    log.warn(`Removing everything under [${destinationPath}]`);
    dir.clean(destinationPath);
    // Retry project generation
    return main();
  } else {
    return exit(`destination [${destinationPath}] is not empty`, 'warn');
  }
}

try {
  // Run CLI generator
  main();
} catch (err) {
  exit(err);
}
