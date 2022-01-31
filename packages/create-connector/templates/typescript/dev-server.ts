import { config } from 'dotenv';
import { createServer } from '@inniti/middle-server';
import { useLogger, useTiming } from '@envelop/core';
import MyConnector from './src';

config();

const port = process.env.PORT || 4000;

const envelopPlugins = [];
if (process.env.NODE_ENV === 'development') {
  envelopPlugins.push(useTiming());
  envelopPlugins.push(useLogger());
}

createServer(
  [new MyConnector(process.env.API_BASE_URL as string)],
  envelopPlugins
).listen(port, (err: Error | null) => {
  if (err) {
    console.error('An error occured while starting the middle server', err);
  } else {
    console.log(`🚀 middle server is running at http://localhost:${port}`);
  }
});
