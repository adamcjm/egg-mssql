'use strict';

const assert = require('assert');
const rds = require('ali-rds');

let count = 0;

module.exports = app => {
  app.addSingleton('mssql', createOneClient);
};

function createOneClient(config, app) {
  assert(config.host && config.port && config.user && config.database,
    `[egg-mssql] 'host: ${config.host}', 'port: ${config.port}', 'user: ${config.user}', 'database: ${config.database}' are required on config`);

  app.coreLogger.info('[egg-mssql] connecting %s@%s:%s/%s',
    config.user, config.host, config.port, config.database);
  const client = rds(config);

  app.beforeStart(function* () {
    const rows = yield client.query('select now() as currentTime;');
    const index = count++;
    app.coreLogger.info(`[egg-mssql] instance[${index}] status OK, rds currentTime: ${rows[0].currentTime}`);
  });
  return client;
}
