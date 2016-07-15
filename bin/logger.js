'use strict';
/**
 * Simple CLI configured winston logger.
 *
 * @module logger
 */
const invert = require('lodash.invert');
const winston = require('winston');

module.exports = (verbosity) => {
  verbosity = Math.min(verbosity + winston.config.cli.levels.info, winston.config.cli.levels.silly);
  var log = new winston.Logger({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: invert(winston.config.cli.levels)[verbosity],
        label: 'mu-koan'
      })
    ]
  });
  return log.cli();
};
