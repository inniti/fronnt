# Schema Extensions

## Add property to existing type

```ts
// schema-extensions.js
import { gql } from 'graphql-tag';

export default gql`
  extend type ProductInfo {
    ean: String
  }
`;
```

```ts
// connector.js
import schemaExtensions from './schema-extensions';

const MyConnector = {
  getTypeDefs() {
    return [schemaExtensions];
  },
};
```

## Add custom query or mutation

```ts
// schema-extensions.js
import { gql } from 'graphql-tag';

export default gql`
  input SayHelloInput {
    name: String!
  }

  extend type Query {
    sayHello(to: SayHelloInput): String!
  }
`;
```

```ts
// connector.js
import schemaExtensions from './schema-extensions';

const MyConnector = {
  getTypeDefs() {
    return [schemaExtensions];
  },
};
```

> Note that when extending the resolver tree, the generated TypeScript definitions included in the core package
> won't automatically be extended.
> In this case it's easiest to generate the final TypeScript definitions by yourself using [@graphlql-codegen](https://www.graphql-code-generator.com/)
