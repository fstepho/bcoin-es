'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get Mempool snapshot
 */
(async () => {
  /**
     curl $url/mempool
   * ---
     bcoin cli mempool
   */
  try {
    const mempoolTxs = await client.getMempool();

    console.log(mempoolTxs);
  } catch (e) {
    console.error(e);
  }

})();
