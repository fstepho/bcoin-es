'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get Transactions by Addresses
 */
(async () => {
  let address0, address1;

  //vars
  address0='n3BmXQPa1dKi3zEyCdCGNHTuE5GLdmw1Tr';
  address1='mwLHWwWPDwtCBZA7Ltg9QSzKK5icdCU5rb';

  /**
     curl $url/tx/address -X POST --data "{ \"addresses\":[ \"$address0\", \"$address1\" ]}"
   * ---
     No CLI Option
   */
  try {
    const txs = await client.getTXByAddresses([address0, address1]);

    console.log(txs);
  } catch (e) {
    console.error(e);
  }

})();
