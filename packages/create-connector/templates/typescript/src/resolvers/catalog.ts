import { PagingInput, Resolvers } from '@inniti/middle';
import { ResolverContext } from '../../types';
import { extractPaging } from '../utils';

const resolvers: Resolvers<ResolverContext> = {
  Query: {
    products(_, args, ctx) {
      const { page, limit } = extractPaging(args.paging as PagingInput);

      // TODO find products

      return {
        paging: {
          total: 0,
          page,
          limit,
        },
        results: [],
        filters: [],
        sortings: [],
      };
    },
    product(_, args, ctx) {
      // TODO find product by args.id
      return null;
    },
  },
  Article: {
    media: (article, args, ctx) => {
      // TODO find list of media for article
      return [];
    },
  },
};

export default resolvers;
