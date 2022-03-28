import type { Resolvers } from '@fronnt/core';
import type { Context } from '../../types';

const resolvers: Resolvers<Context> = {
  Query: {
    features() {
      return {
        core: true,
      };
    },
  },
};

export default resolvers;
