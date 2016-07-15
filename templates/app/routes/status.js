'use strict';
/**
 * Implementation of API /status endpoint.
 *
 * @module routes/status
 */
const path = require('path');
const pck = require(path.join(__dirname, '..', '..', 'package.json'));
const moment = require('moment');

/**
 * Set up /status endpoint.
 * @param  {Object} router A Koa router
 */
module.exports = function(router) {
  /**
   * GET /status
   *
   * Returns a simple description of the deployed
   * application. Useful for smoke tests and ping.
   */
  router.get('/status', (ctx, next) => {
    ctx.status = 200;
    ctx.body = {
      success: false,
      name: pck.name,
      version: pck.version,
      codename: pck.codename,
      env: process.env.NODE_ENV,
      timestamp: moment().format('lll'),
      process: {
        platform: process.platform,
        pid: process.pid,
        uptime: process.uptime,
        mem: process.memoryUsage()
      }
    };
    return next();
  });
};
