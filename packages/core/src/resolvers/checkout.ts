import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseCheckoutResolvers: Resolvers = {
  Mutation: {
    startCheckout: notImplemented,
    updateCheckout: notImplemented,
    finishCheckout: notImplemented,
  },
};

export default baseCheckoutResolvers;
