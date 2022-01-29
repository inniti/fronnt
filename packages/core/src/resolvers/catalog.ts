import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseCatalogResolvers: Resolvers = {
  Query: {
    products: notImplemented,
    product: notImplemented,
    productByField: notImplemented,
    article: notImplemented,
    articleByField: notImplemented,
    brands: notImplemented,
    brand: notImplemented,
    brandByField: notImplemented,
    categories: notImplemented,
    category: notImplemented,
    categoryByField: notImplemented,
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
