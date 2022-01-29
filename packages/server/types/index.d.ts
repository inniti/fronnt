import type { MiddleConnector } from '@inniti/middle-core';
import type { Plugin } from '@envelop/core';

export function createServer(
  connectors: MiddleConnector[],
  envelopPlugins: Plugin[] = []
): {
  listen: (port: number, cb: (error: Error | null) => void) => void;
};
