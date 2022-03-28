import type { Resolvers } from '@fronnt/core';
import type { Context } from '../../types';

const resolvers: Resolvers<Context> = {
  Query: {
    shop(_, args, ctx) {
      return {
        pricePrecision: 1000,
        currencies: [
          {
            name: 'Euro',
            symbol: '€',
          },
        ],
        locales: [
          {
            isoCode: 'de-DE',
            label: 'Deutsch (Deutschland)',
          },
        ],
        defaultLocale: {
          isoCode: 'de-DE',
          label: 'Deutsch (Deutschland)',
        },
      };
    },
  },
};

export default resolvers;
