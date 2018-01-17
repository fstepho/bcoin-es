'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get Transaction by Hash
 */
(async () => {
  let txhash;

  //vars
  txhash='86150a141ebe5903a5d31e701698a01d598b81f099ea7577dad73033eab02ef9';

  /**
     curl $url/tx/$txhash
   * ---
     bcoin cli tx $txhash
   */
  try {
    const tx = await client.getTX(txhash);

    console.log(tx);
  } catch (e) {
    console.error(e);
  }

})();
