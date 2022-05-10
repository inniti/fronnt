import { config } from 'dotenv';
import { createServer } from '@fronnt/server';
import { useTiming, type Plugin } from '@envelop/core';
import {
  simpleEstimator,
  createComplexityRule,
} from 'graphql-query-complexity';

import Connector1 from './connectors/connector1';

config();

const port = process.env.PORT || 4000;

const useComplexity = function (): Plugin<{ req?: { body: any } }> {
  return {
    onValidate(api) {
      const complexityRule = createComplexityRule({
        estimators: [simpleEstimator({ defaultComplexity: 1 })],
        maximumComplexity: 100,
        variables: api.context.req?.body?.variables || {},
        onComplete: (complexity: number) => {
          console.log('Query Complexity:', complexity);
        },
      });

      api.addValidationRule(complexityRule);
    },
  };
};

const envelopPlugins: Plugin[] = [useComplexity()];
if (process.env.NODE_ENV === 'development') {
  envelopPlugins.push(useTiming());
}

createServer([new Connector1()], envelopPlugins).listen(
  port,
  (err: Error | null) => {
    if (err) {
      console.error('An error occured while starting the fronnt server', err);
    } else {
      console.log(`🚀 fronnt server is running at http://localhost:${port}`);
    }
  }
);
