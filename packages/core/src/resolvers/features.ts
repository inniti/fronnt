import { Resolvers } from '../../types';

const baseFeaturesResolvers: Resolvers = {
  Query: {
    features() {
      return {
        core: true,
        openingTimes: false,
        reservations: false,
        sellers: false,
        warehouses: false,
      };
    },
  },
  Features: {
    core() {
      return true;
    },
    openingTimes() {
      return false;
    },
    reservations() {
      return false;
    },
    sellers() {
      return false;
    },
    warehouses() {
      return false;
    },
  },
};

export default baseFeaturesResolvers;
