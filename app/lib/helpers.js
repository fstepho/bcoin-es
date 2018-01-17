'use strict';

const bcoin = require('bcoin');
const Config = bcoin.config;
const Client = bcoin.http.Client;
const Wallet = bcoin.http.Wallet;

/**
 * Returns configuration object
 * @param {Object} options
 * @param {Boolean} options.hash - Parse uri hash variables.
 * @param {Boolean} options.query - Parse uri querystring variables.
 * @param {Boolean} options.env - Parse env variables.
 * @param {Boolean} options.argv - Parse arguments.
 * @returns {node.Config}
 */
exports.getConfig = (options) => {
  let config = new Config('bcoin');

  config.load(options);
  config.open('/data/bcoin.conf');
  return config;
};

/**
 * Returns Wallet Client instance
 * @param {Object} options
 * @param {String} options.network
 * @param {String} options.uri
 * @param {String} options.apiKey
 * @param {String} options.auth
 * @param {String} options.id
 * @param {String} options.token
 * @returns {http.Wallet}
 */
exports.getWallet = (options) => {
  return new Wallet(options);
};

/**
 * Returns HTTP Client
 * @param {Object} options
 * @param {String} options.network
 * @param {String} options.uri
 * @param {String} options.apiKey
 * @param {String} options.auth
 * @returns {http.Client}
 */
exports.getClient = (options) => {
  options.timeout = 50000;
  options.titi="titi";
  return new Client(options);
};

exports.getDefaultClients = () => {
  const config = exports.getConfig({
    env: true,
    argv: true
  });

  const client = exports.getClient({
    apiKey: config.str('api-key'),
    uri: config.str(['uri', 'url']),
    network: config.str('network'),
    timeout:50000,
    toto:"toto"
  });

  const wallet = exports.getWallet({
    id: 'primary',
    apiKey: config.str('api-key'),
    uri: config.str(['uri', 'url']),
    network: config.str('network')
  });

  return {
    client: client,
    wallet: wallet
  };
};
