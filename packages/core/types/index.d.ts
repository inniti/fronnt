import type { DocumentNode, GraphQLError } from 'graphql';
import type { GetEnvelopedFn } from '@envelop/core';
import type { PagingInput, Resolvers } from './generated/graphql';

export * from './generated/graphql';

export declare class FronntError extends GraphQLError {
  constructor(
    message: string,
    code?: string,
    extensions?: Record<string, any>
  ) {}
}

export declare class NotImplementedError extends FronntError {
  code: 'NOT_IMPLEMENTED';

  constructor(extensions?: Record<string, any>) {}
}

export declare interface Context {
  dataSources: Record<string, unknown>;
  sessionId: string | null;
}

export declare interface Connector<TContext extends Context> {
  getTypeDefs(): Array<DocumentNode | string>;

  getResolvers(): Array<Resolvers<TContext>>;

  extendContext?(context: Readonly<TContext>): Record<string, unknown>;

  getDataSources?(): Record<string, unknown>;
}

export declare function createFronntEnvelop(
  connectors: Connector[]
): GetEnvelopedFn<any>;

export declare function extractPaging(paging?: PagingInput | null): {
  limit: number;
  page: number;
  start: number;
  end: number;
};
