const { createServer } = require('@inniti/middle-server');
const { useTiming } = require('@envelop/core');
const Connector1 = require('./connectors/Connector1');
const Connector2 = require('./connectors/Connector2');

createServer(
    [Connector1, Connector2],
    [useTiming()]
).listen(4000);
