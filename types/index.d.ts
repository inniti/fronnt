import { DocumentNode } from 'graphql';
import { ExecutionParams } from 'subscriptions-transport-ws';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import { KeyValueCache } from 'apollo-server-caching';
import { PluginDefinition } from 'apollo-server-core';

export interface MiddleServerOptions {
  connectors: Array<MiddleConnector>;
  cache?: KeyValueCache;
  plugins?: PluginDefinition[];
  onHealthCheck?: () => Promise<boolean>;
}

export interface MiddleServer {
  listen(port?: number): Promise<MiddleServerInfo>;
}

export function createServer(options: MiddleServerOptions): MiddleServer;

export * from './generated/graphql';

export * from '../src/errors';

export interface ContextArguments {
  req: ExpressRequest;
  res: ExpressResponse;
  connection?: ExecutionParams;
}

export interface MiddleConnector {
  getTypeDefs(): Array<DocumentNode | string>;

  getResolvers(): Array<ResolverTree>;

  extendContext?(context: ContextArguments): object;

  getDataSources?(): object;
}

export interface MiddleServerInfo {
  address?: string;
  url?: string;
  port: number | string;
}

export interface MiddleErrorDetails {
  message: string;
  code?: string;
  ref?: string;
}
