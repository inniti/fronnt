import { ApolloError } from 'apollo-server';
import { MiddleErrorDetails } from '../types';

export class NotImplementedError extends ApolloError {
  constructor() {
    super('NotImplemented', 'NOT_IMPLEMENTED');

    Object.defineProperty(this, 'name', {
      value: 'NotImplementedError',
    });
  }
}

export class PagingOutOfRangeError extends ApolloError {
  constructor() {
    super('PagingOutOfRange', 'PAGING_OUT_OF_RANGE');

    Object.defineProperty(this, 'name', {
      value: 'PagingOutOfRangeError',
    });
  }
}

export class MiddleError extends ApolloError {
  constructor(message: string, code: string, details?: MiddleErrorDetails[]) {
    super(message, code, { details: details || [] });

    Object.defineProperty(this, 'name', {
      value: 'MiddleError',
    });
  }
}

export { ApolloError };
