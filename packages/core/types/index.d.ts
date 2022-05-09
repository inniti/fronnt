import type { DocumentNode, GraphQLError } from 'graphql';
import type { GetEnvelopedFn } from '@envelop/core';
import type { Resolvers } from './generated/graphql';

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

export declare interface Connector<ContextType extends Context> {
  getTypeDefs(): Array<DocumentNode | string>;

  getResolvers(): Array<Resolvers<ContextType>>;

  extendContext?(context: Readonly<ContextType>): Record<string, unknown>;

  getDataSources?(): Record<string, unknown>;
}

export declare function createFronntEnvelop(
  connectors: Connector[]
): GetEnvelopedFn<any>;
