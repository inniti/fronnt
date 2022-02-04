import type { CorsConfig } from '../types';

export function getConfig(config: CorsConfig = {}): CorsConfig {
  const defaultCorsConfig: CorsConfig = {
    enable: false,
    origin: '*',
    allowedMethods: ['OPTIONS', 'POST'],
    allowedHeaders: ['Accept', 'Content-Type', 'Cache-Control'],
    allowCredentials: false,
  };
  return Object.assign({}, defaultCorsConfig, config);
}

export function getCorsHeaders(config: CorsConfig): Record<string, string> {
  const headers: Record<string, string> = {};
  if (config.origin) {
    headers['Access-Control-Allow-Origin'] = config.origin;
  }
  let allowedHeaders = 'Content-Type';
  if (config.allowedHeaders) {
    allowedHeaders = Array.isArray(config.allowedHeaders)
      ? config.allowedHeaders.join(', ')
      : config.allowedHeaders;
    headers['Access-Control-Allow-Headers'] = allowedHeaders;
  }
  let allowedMethods = 'OPTION';
  if (config.allowedMethods) {
    allowedMethods = Array.isArray(config.allowedMethods)
      ? config.allowedMethods.join(', ')
      : config.allowedMethods;
    headers['Access-Control-Allow-Methods'] = allowedMethods;
  }
  if (config.allowCredentials) {
    headers['Access-Control-Allow-Credentials'] = 'true';
  }
  return headers;
}
