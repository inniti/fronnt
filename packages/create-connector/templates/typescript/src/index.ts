import type { MiddleConnector } from '@fronnt/core';
import resolvers from './resolvers';
import Api from './api';
import schemaExtensions from './schema/extensions';
import type { Context } from '../types';

export default class Connector implements MiddleConnector<Context> {
  public readonly api: Api;

  constructor(apiBaseUrl: string) {
    this.api = new Api(apiBaseUrl);
  }

  getTypeDefs() {
    return [schemaExtensions];
  }

  getResolvers() {
    return resolvers;
  }

  getDataSources() {
    return {
      api: this.api,
    };
  }

  extendContext(context: Context) {
    let token = null;
    const authorizationHeader = context.req.headers['authorization'];
    if (authorizationHeader) {
      token = authorizationHeader.split(' ')[1] || null;
    }

    return {
      token,
    };
  }
}
