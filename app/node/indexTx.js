'use strict';

var async = require("async");

const defaults = require('../lib/helpers').getDefaultClients();
const client = defaults.client;

const esIndexer = require('./es.js');

indexTxs();

async function indexTxs() {

/**
 * Get Block by Height
 */ 
  var indexingQueue = async.queue(esIndexer.indexItem, 5); // Run two simultaneous uploads
  indexingQueue.drain = function() {
      console.log("All done Indexing item");
  };
/*
  var blockQueue = async.queue(indexBlock, 5); // Run two simultaneous uploads
  blockQueue.drain = function() {
      console.log("All done Indexing item");
  };
*/
  let blockHeight;
  //vars
  blockHeight=560000;

  /**
     curl $url/block/$blockHeight
   * ---
     bcoin cli block $blockHeight
   */
  try {
    for (var height = 0 ; height<blockHeight; height++){
        var block = await client.getBlock(height);
       
        console.log("Processing Block : " + height + " (" + block.txs.length +" txs)");
        for (var i = 0; i< block.txs.length; i++){
          var tx = block.txs[i];
          // Queue the block heigth for processing
         
          tx.blockheight = block.height;
          tx.blockhash = block.hash;
          tx.time = block.time;
          
          //indexingQueue.push(tx);
          var forceIndex =  (height == blockHeight -1)  && (i == block.txs.length -1);
          const response = await esIndexer.indexItem(tx, forceIndex);
          
          //console.log(response);  
          

        }
      
    }
  } catch (e) {
    console.error(e);
  }
  

}