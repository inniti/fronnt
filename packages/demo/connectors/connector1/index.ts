import type { MiddleConnector } from '@inniti/middle-core';
import type { Context } from '@inniti/middle-server';
import shopResolvers from './resolvers/shop';
import cartsResolvers from './resolvers/carts';

export default class Connector1 implements MiddleConnector<Context> {
  getTypeDefs() {
    return [];
  }

  getResolvers() {
    return [shopResolvers, cartsResolvers];
  }

  getDataSources() {
    return {};
  }

  extendContext(context: Readonly<Context>): Record<string, unknown> {
    const token = context.req.headers['authorization']?.split(' ')?.[1] || null;
    return {
      token,
    };
  }
}
