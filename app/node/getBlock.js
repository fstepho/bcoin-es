'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get Block
 */
(async () => {
  let blockHash;

  //vars
  blockHash='00000000cabd2d0245add40f335bab18d3e837eccf868b64aabbbbac74fb21e0';

  /**
     curl $url/block/$blockHash
   * ---
     bcoin cli block $blockHash
   */
  try {
    const block = await client.getBlock(blockHash);

    console.log(block);
  } catch (e) {
    console.error(e);
  }

})();
