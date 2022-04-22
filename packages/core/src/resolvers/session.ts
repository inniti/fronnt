import type { Context, Resolvers } from '../../types';

const baseSessionResolvers: Resolvers<Context> = {
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
};

export default baseSessionResolvers;
