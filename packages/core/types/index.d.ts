import type { DocumentNode, GraphQLError } from 'graphql';
import type { GetEnvelopedFn } from '@envelop/core';

export * from './generated/graphql';

export class MiddleError extends GraphQLError {
  constructor(
    message: string,
    code?: string,
    extensions?: Record<string, any>
  ) {}
}

export interface NotImplementedError extends MiddleError {
  code: 'NOT_IMPLEMENTED';
}

export interface Context {
  dataSources: Record<string, unknown>;
}

export interface MiddleConnector {
  getTypeDefs(): Array<DocumentNode | string>;

  getResolvers(): Array<ResolverTree>;

  extendContext?(context: Context): Record<string, unknown>;

  getDataSources?(): Record<string, unknown>;
}

export function createMiddleEnvelop(
  connectors: MiddleConnector[]
): GetEnvelopedFn<any>;
