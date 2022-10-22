import type { Resolvers } from '@fronnt/core';
import type { Context } from '../../../types';
import { nanoid } from 'nanoid';

const shopResolvers: Resolvers<Context> = {
  Query: {
    session(_, args, ctx) {
      if (ctx.sessionId) {
        return {
          id: ctx.sessionId,
        };
      }

      return null;
    },
  },
  Mutation: {
    startSession() {
      return {
        id: nanoid(),
      };
    },
  },
};

export default shopResolvers;
