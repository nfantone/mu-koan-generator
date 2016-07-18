#!/usr/bin/env node

'use strict';
/**
 * A command line utility to generate
 * a Koa 2.0.0+ REST API scaffolding.
 */
const spawn = require('child-process-promise').spawn;
const path = require('path');
const argv = require('yargs')
  .usage('Usage: mu-koan [name]')
  .help('h')
  .alias('h', 'help')
  .version(function() {
    return require('./package').version;
  })
  .default('name', () => {
    // If no name was provided, resolve to cwd
    return path.basename(path.resolve(process.cwd()));
  })
  .count('verbose')
  .alias('v', 'verbose')
  .describe('v', 'Sets the verbosity level for log messages')
  .alias('V', 'version')
  .epilog('https://github.com/nfantone/mu-koan-generator').argv;

const log = require('./logger')(argv.verbose);
const emptyDir = require('empty-dir');
const cpr = require('cpr');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

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
 * Install all npm dependencies declared on package.json.
 * Redirects npm's stderr to this process' stderr.
 *
 * @method installDependencies
 * @return {Stream}
 */
function installDependencies() {
  log.info('Installing npm dependencies (this may take a while)');
  return spawn('npm', ['install'], {
    stdout: 'inherit',
    stderr: 'inherit'
  });
}

function runNpmInit() {
  log.debug('Initializing npm project');
  return spawn('npm', ['init'], {
    stdio: 'inherit',
    stdout: 'inherit'
  });
}

function main() {
  var destinationPath = process.cwd() || '.';

  // Check if CWD is not empty
  emptyDir(destinationPath, (err, result) => {
    if (err) {
      return exit(err);
    }
    if (result) {
      log.info('Creating project "%s" into [%s]', argv.name, destinationPath);

      // Copy everything under ./templates to CWD
      cpr(TEMPLATES_DIR, destinationPath, {
        confirm: true
      }, (err, files) => {
        if (err) {
          return exit(err);
        }
        files.forEach((file) => log.info('Created %s', file));
        runNpmInit()
          .then(() => installDependencies())
          .then(() => log.info('Done'))
          .catch(log.error);
      });
    } else {
      return exit(`destination [${destinationPath}] is not empty`, 'warn');
    }
  });
}

// Run CLI generator
main();
