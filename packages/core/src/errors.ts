import type {
  ASTNode,
  GraphQLErrorExtensions,
  GraphQLFormattedError,
  Source,
  SourceLocation,
} from 'graphql';
import { MiddleError as _MiddleError } from '../types';

export class MiddleError extends Error implements _MiddleError {
  readonly extensions: GraphQLErrorExtensions;
  readonly locations: ReadonlyArray<SourceLocation> | undefined;
  readonly nodes: ReadonlyArray<ASTNode> | undefined;
  readonly originalError: Error | undefined;
  readonly path: ReadonlyArray<string | number> | undefined;
  readonly positions: ReadonlyArray<number> | undefined;
  readonly source: Source | undefined;

  constructor(
    message: string,
    code?: string,
    extensions?: Record<string, any>
  ) {
    super(message);

    // if no name provided, use the default. defineProperty ensures that it stays non-enumerable
    if (!this.name) {
      Object.defineProperty(this, 'name', { value: 'MiddleError' });
    }

    const _extensions: GraphQLErrorExtensions = {
      ...extensions,
      code,
    };
    if (process.env.NODE_ENV === 'development') {
      _extensions.stack = this.stack;
    }

    this.extensions = _extensions;
  }

  toJSON(): GraphQLFormattedError {
    return {
      extensions: this.extensions,
      locations: undefined,
      message: this.message,
      path: this.path,
    };
  }

  get [Symbol.toStringTag](): string {
    return this.name;
  }
}

export class NotImplementedError extends MiddleError {
  constructor(extensions?: Record<string, any>) {
    super('The resolver is not implemented', 'NOT_IMPLEMENTED', extensions);
  }
}
