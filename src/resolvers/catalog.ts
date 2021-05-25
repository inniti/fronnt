import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseCatalogResolvers: Resolvers = {
  Query: {
    products: notImplemented,
    product: notImplemented,
    productBySlug: notImplemented,
    article: notImplemented,
    brands: notImplemented,
    brand: notImplemented,
    brandBySlug: notImplemented,
    categories: notImplemented,
    category: notImplemented,
    categoryBySlug: notImplemented,
    suggestions: notImplemented,
  },
  Product: {
    articles: notImplemented,
    brand: notImplemented,
    categories: notImplemented,
  },
  Article: {
    product: notImplemented,
    brand: notImplemented,
  },
  Category: {
    children: notImplemented,
    parent: notImplemented,
    products: notImplemented,
  },
};

export default baseCatalogResolvers;
