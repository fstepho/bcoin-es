'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get coins by Address
 */
(async () => {
  let address;

  address='n3BmXQPa1dKi3zEyCdCGNHTuE5GLdmw1Tr';

  /**
      curl $url/coin/address/$address
   *  ---
      bcoin cli coin $address
   */

  try {
    const coins = await client.getCoinsByAddress(address);

    console.log(coins);
  } catch (e) {
    console.error(e);
  }

})();
