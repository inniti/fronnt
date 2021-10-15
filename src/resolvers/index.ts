import { GraphQLScalarType, Kind, ValueNode } from 'graphql';
import pages from './pages';
import catalog from './catalog';
import carts from './carts';
import orders from './orders';
import checkout from './checkout';
import wishlists from './wishlists';
import account from './account';
import shop from './shop';

const ScalarMapType = new GraphQLScalarType({
  name: 'ScalarMap',
  description: 'Map of scalars',
  serialize: (value: any) => {
    switch (typeof value) {
      case 'object':
        return value;
      case 'string':
        return JSON.parse(value);
      default:
        return null;
    }
  },
  parseValue: (value: any) => {
    switch (typeof value) {
      case 'object':
        return value;
      case 'string':
        return JSON.parse(value);
      default:
        return null;
    }
  },
  parseLiteral: (ast: ValueNode) => {
    switch (ast.kind) {
      case Kind.STRING:
        return JSON.parse(ast.value);
      case Kind.OBJECT:
        throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`);
      default:
        return null;
    }
  },
});

export default [
  {
    PagedResult: {
      __resolveType: () => null,
    },
    AddressFields: {
      __resolveType: () => null,
    },
    ScalarMap: ScalarMapType,
  },
  pages,
  shop,
  catalog,
  carts,
  orders,
  checkout,
  wishlists,
  account,
];
