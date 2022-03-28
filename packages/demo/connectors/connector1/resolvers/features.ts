import type { Resolvers } from '@fronnt/core';
import type { Context } from '../../../types';

const featuresResolvers: Resolvers<Context> = {
  Query: {
    features(_, args, ctx) {
      return {
        core: true,
      };
    },
  },
};

export default featuresResolvers;
