import { Resolvers } from '@inniti/middle-core';
import { Context } from '../../types';
import { extractPaging } from '../utils';

const resolvers: Resolvers<Context> = {
  Query: {
    products(_, args, ctx) {
      const { page, limit } = extractPaging(args.paging!);

      // TODO find products

      return {
        paging: {
          total: 0,
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
