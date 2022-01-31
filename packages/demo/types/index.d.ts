import type { Context as ServerContext } from '@inniti/middle-server';

export declare interface Context extends ServerContext {
  token: string | null;
}
