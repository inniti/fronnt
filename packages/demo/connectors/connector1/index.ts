import type { Connector } from '@fronnt/core';
import type { Context } from '../../types';
import shopResolvers from './resolvers/shop';
import cartsResolvers from './resolvers/carts';
import featuresResolvers from './resolvers/features';
import sessionResolvers from './resolvers/session';

export default class Connector1 implements Connector<Context> {
  getTypeDefs() {
    return [];
  }

  getResolvers() {
    return [sessionResolvers, featuresResolvers, shopResolvers, cartsResolvers];
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
