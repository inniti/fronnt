import type { DocumentNode, GraphQLError } from 'graphql';
import type { GetEnvelopedFn } from '@envelop/core';

export * from './generated/graphql';

export declare class MiddleError extends GraphQLError {
  constructor(
    message: string,
    code?: string,
    extensions?: Record<string, any>
  ) {}
}

export declare interface NotImplementedError extends MiddleError {
  code: 'NOT_IMPLEMENTED';
}

export declare interface Context {
  dataSources: Record<string, unknown>;
}

export declare interface MiddleConnector {
  getTypeDefs(): Array<DocumentNode | string>;

  getResolvers(): Array<ResolverTree>;

  extendContext?(context: Context): Record<string, unknown>;

  getDataSources?(): Record<string, unknown>;
}

export declare function createMiddleEnvelop(
  connectors: MiddleConnector[]
): GetEnvelopedFn<any>;
