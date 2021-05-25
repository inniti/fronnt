import MiddleServer from './MiddleServer';
import {
  MiddleServer as MiddleServerInterface,
  MiddleServerOptions,
} from '../types';
import { NotImplementedError, PagingOutOfRangeError } from './errors';

export function createServer(
  options: MiddleServerOptions
): MiddleServerInterface {
  return new MiddleServer(options);
}

export { MiddleServer, PagingOutOfRangeError, NotImplementedError };
