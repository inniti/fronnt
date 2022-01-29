import type { MiddleConnector } from '@inniti/middle-core';
import { createMiddleEnvelop } from '@inniti/middle-core';
import type { Plugin } from '@envelop/core';
import { envelop, useEnvelop } from '@envelop/core';
import fastify from 'fastify';
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL,
} from 'graphql-helix';

export const createServer = function (
  connectors: MiddleConnector[],
  envelopPlugins: Plugin[] = []
) {
  const getEnveloped = envelop({
    plugins: [useEnvelop(createMiddleEnvelop(connectors)), ...envelopPlugins],
  });

  const server = fastify();

  server.route({
    method: ['GET', 'POST'],
    url: '/',
    async handler(req, res) {
      const { parse, validate, contextFactory, execute, schema } = getEnveloped(
        { req }
      );
      const request = {
        body: req.body,
        headers: req.headers,
        method: req.method,
        query: req.query,
      };

      if (shouldRenderGraphiQL(request)) {
        res.type('text/html');
        res.send(
          renderGraphiQL({
            endpoint: '/',
          })
        );
      } else {
        const { operationName, query, variables } =
          getGraphQLParameters(request);
        const result = await processRequest({
          operationName,
          query,
          variables,
          request,
          schema,
          parse,
          validate,
          execute,
          contextFactory,
        });

        sendResult(result, res.raw);

        // Tell fastify a response was sent
        res.sent = true;
      }
    },
  });

  return server;
};
