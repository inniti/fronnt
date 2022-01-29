import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseAccountResolvers: Resolvers = {
  Query: {
    customer: notImplemented,
  },
  Mutation: {
    register: notImplemented,
    updateCustomer: notImplemented,
  },
};

export default baseAccountResolvers;
