import type { Plugin } from '@envelop/core';
import { envelop, useSchema } from '@envelop/core';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { createMiddleEnvelop as createEnvelopFn } from '../types';
import baseTypeDefs from './typeDefs';
import baseResolvers from './resolvers';

export * from './errors';

const useDataSources = function (dataSources: Record<string, unknown>): Plugin {
  return {
    onContextBuilding({ extendContext }) {
      extendContext({
        dataSources,
      });
    },
  };
};

const useContextExtensions = function (functions: Function[]): Plugin {
  return {
    onContextBuilding({ extendContext }) {
      const extensions = {};
      for (let i = 0; i < functions.length; i++) {
        Object.assign(extensions, functions[i]());
      }
      extendContext(extensions);
    },
  };
};

export const createMiddleEnvelop: typeof createEnvelopFn = function (
  connectors
) {
  const typeDefs = [baseTypeDefs];
  const resolvers = [...baseResolvers];

  const contextExtensions = {
    bla: 'blub',
  };

  const dataSources = {};

  const contextFunctions: Function[] = [];

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

  const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  return envelop({
    plugins: [
      useSchema(executableSchema),
      useDataSources(contextExtensions),
      useContextExtensions(contextFunctions),
    ],
  });
};
