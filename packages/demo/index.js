require('dotenv').config();

const { createServer } = require('@inniti/middle-server');
const { useTiming } = require('@envelop/core');
const Connector1 = require('./connectors/Connector1');
const Connector2 = require('./connectors/Connector2');

const port = process.env.PORT || 4000;

const envelopPlugins = [];
const connectors = [Connector1, Connector2];

if (process.env.NODE_ENV === 'development') {
  envelopPlugins.push(useTiming());
}

createServer(connectors, envelopPlugins).listen(port, (err) => {
  if (err) {
    console.error('An error occured while staring the middle server', err);
  } else {
    console.log(`🚀 middle server is running at http://localhost:${port}`);
  }
});
