Bcoin on Docker with Elasticsearch and Kibana
=====

Start up a bcoin node quickly using Docker.
Starts full node with Elasticsearch and Kibana.


How To Use
----

Copy sample configuration to `secrets/bcoin.conf`:
>Important: Be sure to keep API secrets safe.
```
$ mkdir -p secrets
$ cp bcoin.example.conf secrets/bcoin.conf
```

Quick run, node only:
```
$ docker-compose up 
```

Connect to Bcoin container
```
$ docker-compose exec bcoin bash
```


Index transaction data to Elasticsearch
```
$ docker-compose exec bcoin bash
$ node indexTx.js

```
