import navigation from './navigation';
import catalog from './catalog';
import carts from './carts';
import orders from './orders';
import checkout from './checkout';
import wishlists from './wishlists';
import account from './account';
import shop from './shop';

export default [
  {
    PagedResult: {
      __resolveType: () => null,
    },
    AddressFields: {
      __resolveType: () => null,
    },
  },
  navigation,
  shop,
  catalog,
  carts,
  orders,
  checkout,
  wishlists,
  account,
];
