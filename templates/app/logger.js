'use strict';
/**
 * Small module that instantiates and configures
 * a logger to be used throughout the application.
 *
 * @module logger
 */
const winston = require('winston');
const moment = require('moment');
const config = require('config');

var loggerOptions = config.get('logger');
loggerOptions.timestamp = function() {
  return moment().format(config.get('logger:timestamp'));
};

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, loggerOptions);

module.exports = winston;
