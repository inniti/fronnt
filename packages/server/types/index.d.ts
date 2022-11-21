import type { Context as CoreContext, Connector } from '@fronnt/core';
import type { Plugin } from '@envelop/core';
import type { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';

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

export declare type Server = {
  listen(cb: (error: Error | null) => void): void;
};

export declare function createServer<TContext extends Context>(
  connectors: Connector<TContext>[],
  envelopPlugins: Plugin[] = [],
  cors?: CorsConfig
): {
  listen: (
    options: { port: string | number; host?: string },
    cb: (error: Error | null) => void
  ) => void;
};
