import { ApolloError } from 'apollo-server';

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
