import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseWishlistResolvers: Resolvers = {
  Query: {
    wishlists: notImplemented,
    wishlist: notImplemented,
  },
  Mutation: {
    createWishlist: notImplemented,
    deleteWishlist: notImplemented,
    addToWishlist: notImplemented,
    removeFromWishlist: notImplemented,
  },
  Wishlist: {
    items: notImplemented,
  },
  WishlistItem: {
    article: notImplemented,
  },
};

export default baseWishlistResolvers;
