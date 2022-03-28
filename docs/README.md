# Documentation

* [Development](development/README.md)
  * [Building a connector](development/README.md#building-a-connector)
  * [Authentication and Authorization](development/auth/README.md)
  * [Error Handling](development/error-handling/README.md)
  * [Schema Extensions](development/schema-extensions/README.md)
* [Deployment](deployment/README.md)

## core

The @fronnt/core package provides two things:

1. the fronnt GraphQL schema and generated TypeScript types
2. an [envelop](https://www.envelop.dev/) plugin, which can be used in any [envelop](https://www.envelop.dev/) based
   environment

```js
import { envelop, useEnvelop } from '@envelop/core';
import { createMiddleEnvelop } from '@fronnt/core';

const connectors = [ /*...*/ ];

const middleEnvelop = createMiddleEnvelop(connectors);

const myEnvelop = envelop({ 
  plugins: [
    useEnvelop(middleEnvelop)
  ],
});
```

## server

To make it easy to get started, the @fronnt/server package provides an optionated GraphQL HTTP server
implementation based on [fastify](https://www.fastify.io/) and [graphql-helix](https://graphql-helix.vercel.app/).

```js
import { createServer } from '@fronnt/server';

const otherEnvelopPlugins = [ /*...*/ ];
const connectors = [ /*...*/ ];

createServer(connectors,  otherEnvelopPlugins).listen(4000, err => {
  if (err) {
    console.error('An error occured while starting the fronnt server', err);
  } else {
    console.log(`🚀 fronnt server is running at http://localhost:4000`);
  }
});
```
