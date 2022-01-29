import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseShopResolvers: Resolvers = {
  Query: {
    warehouses: notImplemented,
    warehouse: notImplemented,
    warehouseByField: notImplemented,
  },
};

export default baseShopResolvers;
