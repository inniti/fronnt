import type {
  Context as CoreContext,
  MiddleConnector,
} from '@inniti/middle-core';
import type { Plugin } from '@envelop/core';
import type { FastifyRequest } from 'fastify';

export declare interface Context extends CoreContext {
  req: FastifyRequest;
}

export declare function createServer(
  connectors: MiddleConnector<Context>[],
  envelopPlugins: Plugin[] = []
): {
  listen: (port: number | string, cb: (error: Error | null) => void) => void;
};
