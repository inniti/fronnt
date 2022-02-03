import { config } from 'dotenv';
import { createServer } from '@inniti/middle-server';
import { useTiming } from '@envelop/core';
import Connector from '../dist/index2.mjs';

config();

const port = process.env.PORT || 4000;

const envelopPlugins = [];
if ( process.env.NODE_ENV === 'development' ) {
	envelopPlugins.push(useTiming());
	// envelopPlugins.push(useLogger());
}

createServer(
		[new Connector(process.env.API_BASE_URL)],
		envelopPlugins
).listen(port, ( err ) => {
	if ( err ) {
		console.error('An error occured while starting the middle server', err);
	} else {
		console.log(`🚀 middle server is running at http://localhost:${port}`);
	}
});
