import { Resolvers } from '@inniti/middle';
import { ResolverContext } from '../../types';

const resolvers: Resolvers<ResolverContext> = {
  Query: {
    carts: (_, args, ctx) => {
      return {
        paging: {
          total: 0,
        },
        results: [],
      };
    },
  },
  Mutation: {
    createCart: (_, args, ctx) => {
      // TODO create a new cart
      return null;
    },
  },
  CartItem: {
    article: (item, args, ctx) => {
      // TODO find article for CartItem item
      return null;
    },
  },
};

export default resolvers;
