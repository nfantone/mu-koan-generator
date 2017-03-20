'use strict';
/**
 * Provides a unified interface for some
 * specific IO related tasks provided from
 * different modules.
 *
 * @module lib/dir
 */
const fs = require('fs-extra');
const emptyDir = require('empty-dir');
const cpr = require('cpr');

// Module API
module.exports = {
  isEmpty: emptyDir.sync,
  copy: cpr,
  clean: fs.emptyDirSync
};
