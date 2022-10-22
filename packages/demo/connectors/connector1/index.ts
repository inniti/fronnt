import type { Connector } from '@fronnt/core';
import type { Context } from '../../types';
import sessionResolvers from './resolvers/session';
import featuresResolvers from './resolvers/features';
import shopResolvers from './resolvers/shop';
import contentResolvers from './resolvers/content';
import cartsResolvers from './resolvers/carts';

export default class Connector1 implements Connector<Context> {
  getTypeDefs() {
    return [];
  }

  getResolvers() {
    return [
      sessionResolvers,
      featuresResolvers,
      shopResolvers,
      contentResolvers,
      cartsResolvers,
    ];
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
