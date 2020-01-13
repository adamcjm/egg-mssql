'use strict';

/**
 * egg-mssql default config
 * @member Config#mssql
 * @property {String} SOME_KEY - some description
 */

exports.mysql = {
  default: {
    database: null,
    connectionLimit: 5,
  },
  app: true,
  agent: false,

  // Single Database
  // client: {
  //   host: 'host',
  //   port: 'port',
  //   user: 'user',
  //   database: 'database',
  //   password: 'password',
  // },

  // Multi Databases
  // clients: {
  //   db1: {
  //     host: 'host',
  //     port: 'port',
  //     user: 'user',
  //     database: 'database',
  //     password: 'password',
  //   },
  //   db2: {
  //     host: 'host',
  //     port: 'port',
  //     user: 'user',
  //     database: 'database',
  //     password: 'password',
  //   },
  // },
};
