# Development

## Gettings started

...

## Building a connector

The simplest way of implementing a connector is by using
the [@inniti/create-middle-connector initializier package](https://www.npmjs.com/package/@inniti/create-middle-connector)
.

```shell
npm init @inniti/middle-connector
```

This will setup an example connector project using TypeScript and tools for bundling the connector to use it in your
middle projects.

## Authentication and Authorization

The API is totally unoptionated about authentication and authorization, because from our experience, these concerns are
implemented differently in different projects. Some may use Cookie-based session management, others a Single-Sign-On
solutions and again others something completely different.

That said, as you will most likely have access to the HTTP request, you can easily extract required information and pass it to resolvers
by extending the context.

E.g. when using `@inniti/middle-server`:
```js
const MyConnector = {
  getTypeDefs() {
    return [
      // ...
    ]
      
  },
  getResolvers() {
    return [
      // ...
    ];
  },
  extendContext(context) {
    return {
      token: context.req.headers['authorization']
    };
  },
};
```

## Error Handling

Errors can be thrown by instantiating and throwing a `MiddleError` and passing a message and an error code.

Additional conext information can be optionally passed as third argument.

```js
const { MiddleError } = require('@inniti/middle-core');

throw new MiddleError('Something went wrong', 'SOME_ERROR_CODE', { optional: 'extensions' });
```

Errors will be present in the GraphQL response as part of the `errors` field and will be enriched with a stack trace in
case `process.env.NODE_ENV=development`
