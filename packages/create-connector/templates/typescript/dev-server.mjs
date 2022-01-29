import { config } from 'dotenv';
import { createServer } from '@inniti/middle';
import Connector from './dist/index.mjs';

config();

const server = createServer({
    connectors: [new Connector()],
    cache: undefined,
    plugins: []
});

server
    .listen(process.env.PORT || 4000)
    .then((ctx) => {
        console.log(`🚀 middle is running at ${ctx.url}`);
    });
