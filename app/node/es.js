'use strict';
var exports = module.exports = {};
var elasticsearch = require('elasticsearch');
var async = require("async");


var body = [];

exports.indexItem = async function (item, forceIndex) {
    //console.log("Adding " + item.hash + " for bulk indexing")
    // INDEXATION VOUT
    item.outputs.forEach(function (vout) {
        var toIndex = {
            type: "output",
            blockhash: item.blockhash,
            blockheight: item.blockheight,
            hash: item.hash,
            date: new Date(item.time * 1000),
            value: vout.value,
            //script: vout.script,
            address: vout.address
        }
        // action description
        body.push({ index:  { _index: 'bcoin-output', _type: 'output'} });
        body.push(toIndex);

    });
    
    // INDEXATION VIN
    item.inputs.forEach(function (vin) {
        var toIndex = {
            type: "input",
            blockhash: item.blockhash,
            blockheight: item.blockheight,
            hash: item.hash,
            date: new Date(item.time * 1000),
            prevout_hash: vin.prevout.hash,
            prevout_index: vin.prevout.index,
            //script: vin.script,
            witness: vin.witness,
            sequence: vin.sequence,
            address: vin.address
        }
        if (vin.coin) {
            toIndex["utxo_version"] = vin.coin.version;
            toIndex["utxo_height"] = vin.coin.height;
            toIndex["utxo_value"] = vin.coin.value;
            //toIndex["utxo_script"] = vin.coin.script;
            toIndex["utxo_address"] = vin.coin.address;
            toIndex["utxo_coinbase"] = vin.coin.coinbase;
        }

        // action description
        body.push({ index:  { _index: 'bcoin-input', _type: 'input'} });
        body.push(toIndex);
    });
    
    // INDEXATION TX
    var toIndex = {
        type: "tx",
        blockhash: item.blockhash,
        blockheight: item.blockheight,
        hash: item.hash,
        date: new Date(item.time * 1000),
        witnessHash: item.witnessHash,
        fee: item.fee,
        rate: item.rate,
        mtime: item.mtime,
        index: item.index,
        version: item.version,
        locktime: item.locktime,
        //hex: item.hex
    }

    // action description
    body.push({ index:  { _index: 'bcoin-tx', _type: 'tx'} });
    body.push(toIndex);

    if (body.length>100000 || forceIndex){
        var esClient = new elasticsearch.Client({
            host: 'elasticsearch:9200',
            log: 'info',
            requestTimeout: 1000 * 60 * 60,
            timeout: 1000 * 60 * 60,
            keepAlive: false,
            deadTimeout : 6000000, 
            maxRetries : 15
        });
        console.log("BULK INDEXING " + body.length + " txs" );
        const resp = await esClient.bulk({
            body
        });
        esClient.close();
        console.log("INDEXED " + body.length + " txs" );
        console.log("Took: " + resp.took);
        console.log("Errors: " + resp.errors);
        //console.log("Errors: " +  JSON.stringify(resp, null, 2));
        
        body = [];
    }
    //console.log("Calling queue callback");
    //callback();
}
