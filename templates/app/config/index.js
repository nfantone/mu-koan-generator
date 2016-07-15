'use strict';
/**
 * @module config
 */
const path = require('path');
const pck = require(path.join('..', '..', 'package'));
const nconf = require('nconf');

const DEFAULT_ENVIRONMENT = 'development';

nconf
  .argv()
  .env('_')
  .file({
    file: path.join(__dirname, 'properties.json')
  })
  .defaults({
    logger: {
      label: pck.name
    },
    koa: {
      routes: {
        root: path.join(__dirname, '..', 'routes')
      }
    }
  })
  .overrides({
    environment: process.env.NODE_ENV || DEFAULT_ENVIRONMENT
  });

module.exports = nconf;
