'use strict';
/**
 *
 */
const path = require('path');
require('app-module-path').addPath(path.join(__dirname, 'app'));
const log = require('logger');
const server = require('server');
const config = require('config');

// Starts Koa server
server.listen(config.get('koa:port'), config.get('koa:hostname'), () => {
  var addr = server.address();
  log.info('✔ Koa server listening on %s:%s [%s]', addr.address,
    addr.port, config.get('environment'));
});

module.exports = server;
