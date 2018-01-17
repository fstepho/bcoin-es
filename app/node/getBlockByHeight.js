'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get Block by Height
 */
(async () => {
  let blockHeight;

  //vars
  blockHeight=300;

  /**
     curl $url/block/$blockHeight
   * ---
     bcoin cli block $blockHeight
   */
  try {
    for (var height = 0; height<blockHeight; height++){
        const block = await client.getBlock(blockHeight);
        console.log(block);
    }
  } catch (e) {
    console.error(e);
  }

})();
