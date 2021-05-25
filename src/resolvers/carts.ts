import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseCartResolvers: Resolvers = {
  Query: {
    carts: notImplemented,
    cart: notImplemented,
  },
  Mutation: {
    createCart: notImplemented,
    deleteCart: notImplemented,
    addToCart: notImplemented,
    updateCartItem: notImplemented,
    removeFromCart: notImplemented,
    applyCoupon: notImplemented,
  },
  CartItem: {
    article: notImplemented,
    parent: notImplemented,
    children: notImplemented,
  },
};

export default baseCartResolvers;
