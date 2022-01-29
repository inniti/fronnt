import { ContextArguments, MiddleConnector } from '@inniti/middle';
import resolvers from './resolvers';
import Api from './api';
import schemaExtensions from './schema/extensions';

export default class Connector implements MiddleConnector {
  getTypeDefs() {
    return [schemaExtensions];
  }

  getResolvers() {
    return resolvers;
  }

  getDataSources() {
    return {
      api: new Api(process.env.API_BASE_URL as string),
    };
  }

  extendContext(context: ContextArguments) {
    let token = null;
    const authorizationHeader = context.req.header('Authorization');
    if (authorizationHeader) {
      token = authorizationHeader.split(' ')[1] || null;
    }

    return {
      token,
    };
  }
}
