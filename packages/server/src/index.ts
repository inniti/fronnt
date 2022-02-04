import type { MiddleConnector } from '@inniti/middle-core';
import { createMiddleEnvelop } from '@inniti/middle-core';
import type { Plugin } from '@envelop/core';
import { envelop, useEnvelop } from '@envelop/core';
import fastify, { FastifyReply } from 'fastify';
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL,
} from 'graphql-helix';
import type { Context, CorsConfig } from '../types';
import { getConfig, getCorsHeaders } from './cors';

function applyHeaders(reply: FastifyReply, headers: Record<string, string>) {
  Object.keys(headers).forEach((h) => {
    reply.header(h, headers[h]);
    reply.raw.setHeader(h, headers[h]);
  });
}

export const createServer = function (
  connectors: MiddleConnector<Context>[],
  envelopPlugins: Plugin[] = [],
  cors?: CorsConfig
) {
  const getEnveloped = envelop({
    plugins: [useEnvelop(createMiddleEnvelop(connectors)), ...envelopPlugins],
  });

  const corsConfig = getConfig(cors);
  let additionalHeaders: Record<string, string> = {};

  const server = fastify();

  if (corsConfig.enable) {
    additionalHeaders = getCorsHeaders(corsConfig);
    server.options('*', {}, (req, reply) => {
      applyHeaders(reply, additionalHeaders);
      reply.code(204).header('Content-Length', '0').send();
    });
  }

  server.route({
    method: ['GET', 'POST'],
    url: '/',
    async handler(req, reply) {
      const { parse, validate, contextFactory, execute, schema } = getEnveloped(
        { req }
      );
      const request = {
        body: req.body,
        headers: req.headers,
        method: req.method,
        query: req.query,
      };

      applyHeaders(reply, additionalHeaders);

      if (shouldRenderGraphiQL(request)) {
        reply.type('text/html');
        reply.send(
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

        await sendResult(result, reply.raw);

        reply.sent = true;
      }
    },
  });

  return server;
};
