import { config } from 'dotenv';
import { createServer } from '@inniti/middle-server';
import { useTiming } from '@envelop/core';
import Connector1 from './connectors/connector1';

config();

const port = process.env.PORT || 4000;

const envelopPlugins = [];
if (process.env.NODE_ENV === 'development') {
  envelopPlugins.push(useTiming());
}

createServer([new Connector1()], envelopPlugins).listen(
  port,
  (err: Error | null) => {
    if (err) {
      console.error('An error occured while starting the middle server', err);
    } else {
      console.log(`🚀 middle server is running at http://localhost:${port}`);
    }
  }
);
