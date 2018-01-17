'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get Transactions by Address
 */
(async () => {
  let address;

  //vars
  address='n3BmXQPa1dKi3zEyCdCGNHTuE5GLdmw1Tr';

  /**
     curl $url/tx/address/$address
   * ---
     bcoin cli tx $address
   */
  try {
    const txs = await client.getTXByAddress(address);

    console.log(txs);
  } catch (e) {
    console.error(e);
  }

})();
