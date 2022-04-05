import { Resolvers } from '../../types';

const baseFeaturesResolvers: Resolvers = {
  Query: {
    features() {
      return {
        core: true,
      };
    },
  },
  Features: {
    core() {
      return true;
    },
  },
};

export default baseFeaturesResolvers;
