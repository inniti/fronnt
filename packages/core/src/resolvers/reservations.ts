import notImplemented from './NotImplemented';
import { Resolvers } from '../../types';

const baseShopResolvers: Resolvers = {
  Query: {
    reservations: notImplemented,
    reservation: notImplemented,
    reservationByField: notImplemented,
  },
  Mutation: {
    createReservation: notImplemented,
    cancelReservation: notImplemented,
  },
};

export default baseShopResolvers;
