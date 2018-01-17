'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Broadcast Transaction
 */
(async () => {
  let txhash;

  //vars
  txhash='0100000001ff2a3afc3a8133a3bfeedd391bc3cff39d47fe4e3caee492a93f92edff76b9d4000000006a47304402204cc6a35cb3d3d976cb10e3c98df66aba29b5efc7b5ecdbc0f4ed949aa64235f20220512fce2d63739012094f12c3a9402919b32149c32d4d71a3448d4695ae8e3dc601210325c9abd8916d6e5ba0b3c501a70c0186f3bf6e4567922b9d83ae205d1d9e9affffffffff0244cff505000000001976a91423f5580d600bcfe5b99d9fe737530fd8b32492a088ac00111024010000001976a91473f3ecd665da93701358bd957393b8085c1aa2d988ac00000000';

  /**
     curl $url/broadcast -X POST --data "{ \"tx\": \"$txhash\" }"
   * ---
     bcoin cli broadcast $txhash
   */
  try {
    const result = await client.broadcast(txhash);

    console.log(result);
  } catch (e) {
    console.error(e);
  }

})();
