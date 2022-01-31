import type { DocumentNode, GraphQLError } from 'graphql';
import type { GetEnvelopedFn } from '@envelop/core';
export type { Resolvers } from './generated/graphql';

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

export declare interface MiddleConnector<ContextType extends Context> {
  getTypeDefs(): Array<DocumentNode | string>;

  getResolvers(): Array<Resolvers<ContextType>>;

  extendContext?(context: Readonly<ContextType>): Record<string, unknown>;

  getDataSources?(): Record<string, unknown>;
}

export declare function createMiddleEnvelop(
  connectors: MiddleConnector[]
): GetEnvelopedFn<any>;
