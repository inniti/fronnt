import type { Context as ServerContext } from '@fronnt/server';

export declare interface Context extends ServerContext {
  token?: string | null;
}
