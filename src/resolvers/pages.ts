import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseNavigationResolvers: Resolvers = {
  Query: {
    pages: notImplemented,
    page: notImplemented,
    pageByField: notImplemented,
  },
};

export default baseNavigationResolvers;
