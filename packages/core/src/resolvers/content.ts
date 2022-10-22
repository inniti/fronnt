import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseNavigationResolvers: Resolvers = {
  Query: {
    page: notImplemented,
    pageByField: notImplemented,
    contentBlock: notImplemented,
    looseContentBlocks: notImplemented,
  },
};

export default baseNavigationResolvers;
