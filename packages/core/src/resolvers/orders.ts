import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseOrdersResolvers: Resolvers = {
  Query: {
    orders: notImplemented,
    order: notImplemented,
  },
  Order: {
    items: notImplemented,
  },
  OrderItem: {
    article: notImplemented,
  },
};

export default baseOrdersResolvers;
