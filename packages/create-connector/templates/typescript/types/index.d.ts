import type { Context as _Context } from '@inniti/middle-server';

export declare interface Api {
  doSomething(): Promise<any>;
}

export declare interface Context extends _Context {
  dataSources: {
    api: Api;
  };
  token: string | null;
}
