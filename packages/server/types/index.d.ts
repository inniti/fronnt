import type { Context as CoreContext, Connector } from '@fronnt/core';
import type { Plugin } from '@envelop/core';
import type { FastifyReply, FastifyRequest } from 'fastify';

export declare interface Context extends CoreContext {
  req: FastifyRequest;
  res: FastifyReply;

  setResponseHeader(key: string, value: string | string[]): void;
}

export declare interface CorsConfig {
  enable?: boolean;
  origin?: string;
  allowedMethods?: string[] | string;
  allowedHeaders?: string[] | string;
  allowCredentials?: boolean;
}

export declare function createServer(
  connectors: Connector<Context>[],
  envelopPlugins: Plugin[] = [],
  cors?: CorsConfig
): {
  listen: (port: number | string, cb: (error: Error | null) => void) => void;
};
