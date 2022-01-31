import type { Resolvers } from '@inniti/middle-core';
import type { Context } from '../../../types';

const cartsResolvers: Resolvers<Context> = {
  Query: {
    carts() {
      return {
        paging: {
          total: 0,
        },
        results: [],
      };
    },
  },
};

export default cartsResolvers;
