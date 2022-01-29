import { MiddleConnector } from '@inniti/middle-core';
import { PluginOrDisabledPlugin } from '@envelop/core';

export function createServer(
  connectors: MiddleConnector[],
  envelopPlugins: PluginOrDisabledPlugin[] = []
): {
  listen: (port: number) => void;
};
