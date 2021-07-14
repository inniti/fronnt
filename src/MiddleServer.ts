import { ApolloServer } from 'apollo-server';
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import { MiddleServerOptions } from '../types';
import baseResolvers from './resolvers';
import baseTypeDefs from './typeDefs';

export default class MiddleServer {
  private apolloServer: ApolloServer;

  constructor(options: MiddleServerOptions) {
    const { connectors = [] } = options;

    const typeDefs = [baseTypeDefs];
    const resolvers = [...baseResolvers];

    const contextFunctions: Function[] = [];

    const dataSources = {};

    connectors.forEach((c) => {
      if (typeof c.getTypeDefs !== 'function') {
        throw new Error('Connectors must implement a `getTypeDefs` function!');
      }
      if (typeof c.getResolvers !== 'function') {
        throw new Error('Connectors must implement a `getResolvers` function!');
      }

      c.getTypeDefs().forEach((typeDef) => typeDefs.push(typeDef));
      c.getResolvers().forEach((resolverTree) => resolvers.push(resolverTree));

      if (typeof c.extendContext === 'function') {
        contextFunctions.push(c.extendContext);
      }
      if (typeof c.getDataSources === 'function') {
        Object.assign(dataSources, c.getDataSources());
      }
    });

    const plugins = [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
      ...(options.plugins || []),
    ];

    this.apolloServer = new ApolloServer({
      // @ts-ignore
      typeDefs,
      // @ts-ignore
      resolvers,
      context: (ctx) => {
        const result = {};
        for (const fn of contextFunctions) {
          Object.assign(result, fn(ctx));
        }
        return result;
      },
      dataSources: () => dataSources,
      cache: options.cache,
      plugins,
      onHealthCheck: options.onHealthCheck,
    });
  }

  public listen(port = 4000) {
    return this.apolloServer.listen({ port }).then((serverInfo) => {
      return {
        address: serverInfo.address,
        url: serverInfo.url,
        port: serverInfo.port,
      };
    });
  }
}
