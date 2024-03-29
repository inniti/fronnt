# Error Handling

Errors can be thrown by instantiating and throwing a `FronntError` and passing a message and an error code.

Additional conext information can be optionally passed as third argument.

```js
const { FronntError } = require('@fronnt/core');

throw new FronntError('Something went wrong', 'SOME_ERROR_CODE', {
  optional: 'extensions',
});
```

Errors will be present in the GraphQL response as part of the `errors` field and will be enriched with a stack trace in
case `process.env.NODE_ENV=development`
