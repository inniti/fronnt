import {
  Cart,
  CartItem,
  extractPaging,
  FronntError,
  Resolvers,
  Error as FunctionalError,
  Totals,
} from '@fronnt/core';
import { nanoid } from 'nanoid';
import { articles, defaultTaxClass } from '../../../data/catalog';
import type { Context } from '../../../types';
import { getInstance } from '../store';

function recalculateTotals(cart: Cart): Totals {
  const totals: Totals = {
    net: 0,
    gross: 0,
    expenses: [...cart.totals.expenses],
    discounts: [...cart.totals.discounts],
    taxes: [],
  };

  for (let i = 0; i < cart.items.length; i++) {
    const item = cart.items[i];
    totals.net += item.totals.net;
    totals.gross += item.totals.gross;

    if (
      totals.taxes.findIndex(
        (taxValue) => taxValue.taxClass.id === item.totals.taxes[0]!.taxClass.id
      ) < 0
    ) {
      totals.taxes.push(item.totals.taxes[0]!);
    }
  }

  return totals;
}

const cartsResolvers: Resolvers<Context> = {
  Query: {
    carts(_, args, ctx) {
      const sessionId = ctx.sessionId;

      if (!sessionId) {
        return {
          paging: {
            total: 0,
          },
          results: [],
        };
      }

      const carts = getInstance().carts.get(sessionId) || [];

      const { start, end } = extractPaging(args.paging);
      return {
        paging: {
          total: carts.length,
        },
        results: carts.slice(start, end),
      };
    },
    cart(_, args, ctx) {
      const sessionId = ctx.sessionId;

      if (!sessionId) {
        return null;
      }

      const carts = getInstance().carts.get(sessionId) || ([] as Cart[]);

      return carts.find((cart) => cart.id === args.id) || null;
    },
  },
  Mutation: {
    createCart(_, args, ctx) {
      if (!ctx.sessionId) {
        throw new FronntError('No session', 'NO_SESSION');
      }
      const dataStore = getInstance();
      let carts: Cart[] = [];
      if (dataStore.carts.has(ctx.sessionId)) {
        carts = dataStore.carts.get(ctx.sessionId) as Cart[];
      }
      const newCart: Cart = {
        id: nanoid(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        coupons: [],
        items: [],
        paymentMethods: [],
        shippingMethods: [],
        totals: {
          discounts: [],
          expenses: [],
          net: 0,
          gross: 0,
          taxes: [],
        },
      };
      carts.push(newCart);
      dataStore.carts.set(ctx.sessionId, carts);

      return newCart;
    },
    deleteCart(_, args, ctx) {
      if (!ctx.sessionId) {
        throw new FronntError('No session', 'NO_SESSION');
      }
      const dataStore = getInstance();
      const carts = dataStore.carts.get(ctx.sessionId) || [];
      const idx = carts.findIndex((cart) => cart.id === args.id);
      if (idx < 0) {
        throw new FronntError('Cart not found', 'CART_NOT_FOUND');
      }
      carts.splice(idx, 1);
      dataStore.carts.set(ctx.sessionId, carts);
      return true;
    },
    addToCart(_, args, ctx) {
      if (!ctx.sessionId) {
        throw new FronntError('No session', 'NO_SESSION');
      }
      const dataStore = getInstance();
      const carts = dataStore.carts.get(ctx.sessionId) || [];
      const idx = carts.findIndex((cart) => cart.id === args.cartId);
      if (!idx) {
        throw new FronntError('Cart not found');
      }

      const result = args.items.reduce(
        (result, item) => {
          const article = articles.find((article) => article.sku === item.sku);

          if (!article) {
            result.errors.push({
              code: 'ARTICLE_NOT_FOUND',
              message: `Article "${item.sku}" does not exist`,
              ref: item.sku,
            });
            return result;
          }

          const salesUnit = article!.salesUnits?.find(
            (salesUnit) => salesUnit.id === item.salesUnitId
          );
          if (!salesUnit) {
            result.errors.push({
              code: 'SALES_UNIT_NOT_FOUND',
              message: `Sales unit "${item.salesUnitId}" does not exist`,
              ref: item.salesUnitId,
            });
            return result;
          }

          const price = article.prices[0];

          const newItem: CartItem = {
            cartId: args.cartId,
            children: [],
            id: nanoid(),
            sku: item.sku,
            quantity: item.quantity,
            salesUnit,
            createdAt: new Date().toISOString(),
            totals: {
              discounts: [],
              expenses: [],
              net: price.netValue * item.quantity,
              gross: price.grossValue * item.quantity,
              taxes: [
                {
                  value:
                    (price.netValue * item.quantity * defaultTaxClass.value) /
                    100,
                  taxClass: defaultTaxClass,
                },
              ],
            },
            extensions: {},
          };
          result.items.push(newItem);
          return result;
        },
        { items: [] as CartItem[], errors: [] as FunctionalError[] }
      );

      const updatedCart: Cart = {
        ...carts[idx],
        items: [...carts[idx].items, ...result.items],
      };
      (updatedCart.totals = recalculateTotals(updatedCart)),
        (carts[idx] = updatedCart);

      dataStore.carts.set(ctx.sessionId, carts);
      return {
        errors: result.errors,
        cart: updatedCart,
      };
    },
  },
};

export default cartsResolvers;
