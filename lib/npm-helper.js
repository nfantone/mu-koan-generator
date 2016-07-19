'use strict';
/**
 * npm process spawner.
 *
 * @module lib/npm-helper
 */
const spawn = require('child-process-promise').spawn;

// Module API
module.exports = {
  install: installDependencies,
  init: runNpmInit
};

/**
 * Install all npm dependencies declared on package.json.
 * Redirects npm's stderr and stdout to this process' stderr/stdout.
 *
 * @method installDependencies
 * @return {Promise}  Fullfils when the process exits
 */
function installDependencies() {
  return spawn('npm', ['install'], {
    stdout: 'inherit',
    stderr: 'inherit'
  });
}

/**
 * Runs `npm init` by spawning a new process.
 *
 * @method runNpmInit
 * @return {Promise}   Fullfils when the process exits
 */
function runNpmInit() {
  return spawn('npm', ['init'], {
    stdio: 'inherit',
    stdout: 'inherit'
  });
}
