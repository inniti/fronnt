export interface DataStore {
  carts: Map<string, []>;
}

let instance: DataStore;
let resetInterval: NodeJS.Timeout;

export const RESET_INTERVAL = 1000 * 60 * 30;

export function initializeDataStore() {
  instance = {
    carts: new Map(),
  };
  clearInterval(resetInterval);
  resetInterval = setInterval(() => {
    instance.carts.clear();
  }, RESET_INTERVAL);
}

export function getInstance() {
  if (!instance) {
    initializeDataStore();
  }
  return instance;
}
