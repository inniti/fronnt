import { Resolvers } from '../../types';
import notImplemented from './NotImplemented';

const baseSessionResolvers: Resolvers = {
  Query: {
    session: notImplemented,
  },
};

export default baseSessionResolvers;
