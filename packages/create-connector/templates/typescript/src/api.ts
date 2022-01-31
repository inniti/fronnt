import { Api as _Api } from '../types';

export default class Api implements _Api {
  private readonly baseUrl;

  constructor(baseUrl: string) {
    console.log('initializing Api with API_BASE_URL ' + baseUrl);
    this.baseUrl = baseUrl;
  }

  doSomething() {
    return new Promise((resolve) => {
      resolve({ hello: 'world' });
    });
  }
}
