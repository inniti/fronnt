# Documentation

* [Development](development/README.md)
* [Deployment](deployment/README.md)

## core

The @inniti/middle-core package provides two things:

1. the middle GraphQL schema and generated TypeScript types
2. an [envelop](https://www.envelop.dev/) plugin, which can be used in any [envelop](https://www.envelop.dev/) based
   environment

```js
import { envelop, useEnvelop } from '@envelop/core';
import { createMiddleEnvelop } from '@inniti/middle-core';

const connectors = [ /*...*/ ];

const middleEnvelop = createMiddleEnvelop(connectors);

const myEnvelop = envelop({ 
  plugins: [
    useEnvelop(middleEnvelop)
  ],
});
```

## server

To make it easy to get started, the @inniti/middle-server package provides an optionated GraphQL HTTP server
implementation based on [fastify](https://www.fastify.io/) and [graphql-helix](https://graphql-helix.vercel.app/).

```js
import { createServer } from '@inniti/middle-server';

const otherEnvelopPlugins = [ /*...*/ ];
const connectors = [ /*...*/ ];

createServer(connectors,  otherEnvelopPlugins).listen(4000, err => {
  if (err) {
    console.error('An error occured while starting the middle server', err);
  } else {
    console.log(`🚀 middle server is running at http://localhost:4000`);
  }
});
```
