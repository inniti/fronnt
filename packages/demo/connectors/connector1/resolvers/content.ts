import type { Menu, Resolvers } from '@fronnt/core';
import {
  pages,
  contentBlocks,
  looseContentBlocks,
  menus,
} from '../../../data/content';
import type { Context } from '../../../types';

const contentResolvers: Resolvers<Context> = {
  Query: {
    pageByField(_, args, ctx) {
      const field: 'url' | 'id' = args.field as 'url' | 'id';
      if (!['url', 'id'].includes(field)) {
        throw new Error('pageByField only supports url and id');
      }

      const page = pages.find((page) => page[field] === args.value);

      return page || null;
    },
    page(_, args, ctx) {
      const page = pages.find((page) => page.id === args.id);

      return page || null;
    },
    contentBlock(_, args, ctx) {
      const block = contentBlocks.find((block) => {
        if (args.id) {
          return block.id === args.id;
        }
        if (args.key) {
          return block.key === args.key;
        }

        return false;
      });
      return block || null;
    },
    looseContentBlocks() {
      return looseContentBlocks;
    },

    menu(_, args, ctx) {
      const { id } = args;

      return menus.find((m: Menu) => m.id === id) || null;
    },
    menusByPlace(_, args, ctx) {
      const { place } = args;
      return menus.filter((m: Menu) => m.place === place) || [];
    },
  },
};

export default contentResolvers;
