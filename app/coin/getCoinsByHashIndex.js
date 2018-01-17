
'use strict';

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

/**
 * Get coins by Hash and Index
 */
(async () => {
  let hash, index;

  //vars
  hash='c13039f53247f9ca14206da079bcf738d91bc60e251ac9ebaba9ea9a862d9092';
  index=0;

  /**
      curl $url/coin/$hash/$index
   *  ---
      bcoin cli coin $hash $index
   */

  try {
    const coins = await client.getCoin(hash, index);

    console.log(coins);
  } catch (e) {
    console.error(e);
  }

})();
