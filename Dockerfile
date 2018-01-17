FROM node:8-slim
MAINTAINER Steven Bower <steven@purse.io>

ENV BCOIN_VERSION=v1.0.0-beta.15 \
    BCOIN_REPO=https://github.com/bcoin-org/bcoin.git \
    BCOIN_DIR=/code/bcoin

RUN apt-get update \
  && apt-get install -y build-essential git make python \
  && mkdir -p $BCOIN_DIR /data \
  && git clone $BCOIN_REPO $BCOIN_DIR \
  && cd $BCOIN_DIR \
  && git checkout $BCOIN_VERSION \
  && npm install --production \
  && npm uninstall node-gyp \
  && apt-get remove -y build-essential make python git \
  && apt-get autoremove -y

WORKDIR $BCOIN_DIR

CMD ["node", "/code/bcoin/bin/node"]
