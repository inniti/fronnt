export interface Api {
  doSomething(): Promise<any>;
}

export interface ResolverContext {
  dataSources: {
    api: Api;
  };
  token: string | null;
}
