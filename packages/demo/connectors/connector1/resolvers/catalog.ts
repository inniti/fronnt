import type { Resolvers } from '@fronnt/core';
import type { Context } from '../../../types';
import { products, collections, brands, articles } from '../../../data/catalog';
import { extractPaging } from '@fronnt/core';

const catalogResolvers: Resolvers<Context> = {
  Query: {
    product(_, args) {
      const p = products.find((product) => product.id === args.id);
      return p || null;
    },
    productByField(_, args) {
      const field: 'id' | 'slug' = args.field as 'id' | 'slug';
      if (!['id', 'slug'].includes(args.field)) {
        throw new Error('productByField only supports slug and id');
      }

      const p = products.find((product) => product[field] === args.value);
      return p || null;
    },
    article(_, args) {
      const a = articles.find((article) => article.id === args.id);
      return a || null;
    },
    articleByField(_, args) {
      const field: 'id' | 'sku' = args.field as 'id' | 'sku';
      if (!['id', 'sku'].includes(args.field)) {
        throw new Error('articleByField only supports sku and id');
      }

      const a = articles.find((article) => article[field] === args.value);
      return a || null;
    },
    brands() {
      return {
        results: brands,
        paging: {
          total: brands.length,
        },
      };
    },
    brand(_, args) {
      const b = brands.find((brand) => brand.id === args.id);
      return b || null;
    },
    brandByField(_, args) {
      const field: 'id' | 'slug' = args.field as 'id' | 'slug';
      if (!['id', 'slug'].includes(args.field)) {
        throw new Error('brandByField only supports slug and id');
      }

      const b = brands.find((brand) => brand[field] === args.value);
      return b || null;
    },
    collections() {
      return {
        results: collections,
        paging: {
          total: collections.length,
        },
      };
    },
    collection(_, args) {
      const c = collections.find((collection) => collection.id === args.id);
      return c || null;
    },
    collectionByField(_, args) {
      const field: 'id' | 'slug' = args.field as 'id' | 'slug';
      if (!['id', 'slug'].includes(args.field)) {
        throw new Error('collectionByField only supports slug and id');
      }

      const c = collections.find(
        (collection) => collection[field] === args.value
      );
      return c || null;
    },
    suggestions(_, args) {
      // TODO implement
      return [];
    },
    search(_, args) {
      // TODO implement
      return {
        results: [],
        filters: [],
        paging: {
          total: 0,
        },
      };
    },
  },
  Product: {
    articles(product) {
      return articles.filter((a) => a.productId === product.id);
    },
    brand(product) {
      return brands.find((b) => b.id === product.brandId) || null;
    },
    collections(product) {
      return collections.filter((c) => product.collectionIds.includes(c.id));
    },
  },
  Article: {
    product(article) {
      return products.find((p) => p.id === article.productId) || null;
    },
    brand(article) {
      return brands.find((p) => p.id === article.brandId) || null;
    },
  },
  Collection: {
    children(collection) {
      return collections.filter((c) => c.parentId === collection.id);
    },
    parent(collection) {
      if (collection.parentId) {
        return collections.find((c) => c.id === collection.parentId) || null;
      }
      return null;
    },
    products(collection, args) {
      const all = products.filter((p) =>
        p.collectionIds.includes(collection.id)
      );
      const { start, end } = extractPaging(args.paging);
      return {
        results: all.slice(start, end),
        paging: {
          total: all.length,
        },
      };
    },
  },
};

export default catalogResolvers;
