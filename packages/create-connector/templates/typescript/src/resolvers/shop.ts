import { Resolvers } from '@inniti/middle';
import { ResolverContext } from '../../types';

const resolvers: Resolvers<ResolverContext> = {
  Query: {
    shop: (_, args, ctx) => {
      // console.log(ctx);
      return {
        pricePrecision: 1000,
      };
    },
  },
};

export default resolvers;
