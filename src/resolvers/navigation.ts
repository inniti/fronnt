import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseNavigationResolvers: Resolvers = {
  Query: {
    resolveUrl: notImplemented,
  },
};

export default baseNavigationResolvers;
