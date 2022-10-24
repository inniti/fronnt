import type { Connector } from '@fronnt/core';
import type { Context } from '../../types';
import sessionResolvers from './resolvers/session';
import featuresResolvers from './resolvers/features';
import shopResolvers from './resolvers/shop';
import contentResolvers from './resolvers/content';
import catalogResolvers from './resolvers/catalog';
import cartsResolvers from './resolvers/carts';
import { initializeDataStore } from './store';

export default class Connector1 implements Connector<Context> {
  constructor() {
    initializeDataStore();
  }

  getTypeDefs() {
    return [];
  }

  getResolvers() {
    return [
      sessionResolvers,
      featuresResolvers,
      shopResolvers,
      contentResolvers,
      catalogResolvers,
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
