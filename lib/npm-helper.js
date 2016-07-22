'use strict';
/**
 * npm process spawner.
 *
 * @module lib/npm-helper
 */
const fs = require('fs-extra');
const path = require('path');
const spawn = require('child-process-promise').spawn;
const jsonfile = require('jsonfile');
const TEMPLATES_DIR = require('../lib/templates-path');
const PACKAGE_JSON = './package.json';

// Module API
module.exports = {
  install: installDependencies,
  init: runNpmInit
};

// Configure package.json file spacing
jsonfile.spaces = 2;

/**
 * Install all npm dependencies declared on package.json.
 * Redirects npm's stderr and stdout to this process' stderr/stdout.
 *
 * @method installDependencies
 * @return {Promise}  Fullfils when the process exits
 */
function installDependencies() {
  return spawn('npm', ['install'], {
    stdio: 'inherit'
  });
}

/**
 * Runs `npm init` by spawning a new process. Adds
 * some default attributes to created "package.json".
 *
 * @method runNpmInit
 * @return {Promise}   Fullfils when the process exits
 */
function runNpmInit() {
  return spawn('npm', ['init'], {
    stdio: 'inherit'
  }).then((res) => {
    var original = jsonfile.readFileSync(PACKAGE_JSON);
    var template = jsonfile.readFileSync(path.join(TEMPLATES_DIR, '_package.json'));
    original = Object.assign(original, template);
    fs.unlinkSync(PACKAGE_JSON);
    jsonfile.writeFileSync(PACKAGE_JSON, original);
    return res;
  });
}
