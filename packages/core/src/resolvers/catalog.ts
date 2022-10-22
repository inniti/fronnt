import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseCatalogResolvers: Resolvers = {
  Query: {
    search: notImplemented,
    product: notImplemented,
    productByField: notImplemented,
    article: notImplemented,
    articleByField: notImplemented,
    brands: notImplemented,
    brand: notImplemented,
    brandByField: notImplemented,
    collections: notImplemented,
    collection: notImplemented,
    collectionByField: notImplemented,
    suggestions: notImplemented,
  },
  Product: {
    articles: notImplemented,
    brand: notImplemented,
    collections: notImplemented,
  },
  Article: {
    product: notImplemented,
    brand: notImplemented,
  },
  Collection: {
    children: notImplemented,
    parent: notImplemented,
    products: notImplemented,
  },
};

export default baseCatalogResolvers;
