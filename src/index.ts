import MiddleServer from './MiddleServer';
import {
  MiddleServer as MiddleServerInterface,
  MiddleServerOptions,
} from '../types';

export * from './errors';

export function createServer(
  options: MiddleServerOptions
): MiddleServerInterface {
  return new MiddleServer(options);
}

export { MiddleServer };
