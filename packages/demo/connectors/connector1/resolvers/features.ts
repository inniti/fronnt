import type { Resolvers, FeaturesResolvers } from '@fronnt/core';
import type { Context } from '../../../types';

const resolvers: Resolvers<Context> = {
  Query: {
    features() {
      return {
        core: true,
        openingTimes: false,
        reservations: false,
        sellers: false,
        warehouses: false,
      };
    },
  },
};

export default resolvers;
