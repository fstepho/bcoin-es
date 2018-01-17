Bcoin REST-RPC Api Examples
===

## Definitions
  * Coin - Unspent outputs for a given address or Transaction.

## Examples
### Info
  1. [Get Info](node/getInfo.js)

### Chain/Mempool - UTXO/Coin information
  1. [Get Coins by transaction Hash and Index](coin/getCoinsByHashIndex.js)
  1. [Get Coins by Address](coin/getCoinsByAddress.js)
  1. [Get Coins by Addresses](coin/getCoinsByAddresses.js)

### Chain/Mempool - Transactions
  1. [Get Transaction by TxHash](tx/getTxHash.js)
  1. [Get Transactions by Address](tx/getTxsByAddress.js)
  1. [Get Transactions by Addresses](tx/getTxsByAddresses.js)

### Chain/Mempool - General
  1. [Get Block](node/getBlock.js)
  1. [Get Block by Height](node/getBlockByHeight.js)
  1. [Get Mempool Tx Hashes](node/getMempool.js)
  1. [Broadcast Tx](node/broadcastTx.js)
