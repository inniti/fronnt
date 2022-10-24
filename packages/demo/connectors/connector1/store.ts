import { Cart } from '@fronnt/core';

export interface DataStore {
  carts: Map<string, Cart[]>;
}

export const RESET_INTERVAL = 1000 * 60 * 1; // 15 min

let store: DataStore;
let resetTimer: NodeJS.Timeout;

export function initializeDataStore() {
  store = {
    carts: new Map(),
  };

  clearInterval(resetTimer);
  resetTimer = setInterval(() => {
    console.log('reset data store');
    store.carts.clear();
  }, RESET_INTERVAL);
}

export function getInstance() {
  if (!store) {
    initializeDataStore();
  }
  return store;
}
