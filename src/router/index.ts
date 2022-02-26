import { FC } from 'react';
import Login from '../pages/Login/Login';
import Parts from '../pages/Parts/Parts';
import Chat from '../pages/Chat/Chat';
import MyLots from '../pages/MyLots/MyLots';
import Orders from '../pages/Orders/Orders';
import Cart from '../pages/Cart/Cart';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import LotsCompare from '../pages/LotCompare/LotsCompare';
import OrderConfirm from '../pages/OrderConfirm/OrderConfirm';
import CustomerOrders from '../pages/CustomerOrders/CustomerOrders';

export interface RoutesInterface {
  path: string;
  exact?: boolean;
  component: FC;
  readableName?: string;
}

export enum RouteNames {
  MAIN = '/',
  LOGIN = '/login',
  PARTS = '/parts',
  DEALERS = '/dealers',
  MY_LOTS = '/my-lots',
  CUSTOMER_LOTS = '/customer-lots',
  ORDERS = '/orders',
  CART = '/cart',
  CHAT = '/chat/:id',
  PROFILE = '/profile',
  COMPARE = '/compare',
  ORDER_CONFIRM = '/confirm',
  NOT_FOUND = '/404-error',
}

export const defaultRoutes: RoutesInterface[] = [
  { path: RouteNames.MAIN, exact: true, component: Parts, readableName: '' },
  { path: RouteNames.LOGIN, exact: true, component: Login, readableName: '' },
  { path: RouteNames.PARTS, exact: true, component: Parts, readableName: 'Parts' },
  // { path: RouteNames.DEALERS, exact: true, component: Dealers, readableName: 'Dealers' },
  { path: RouteNames.COMPARE, exact: true, component: LotsCompare, readableName: '' },
  {
    path: RouteNames.ORDER_CONFIRM,
    exact: true,
    component: OrderConfirm,
    readableName: '',
  },
];
export const publicRoutes: RoutesInterface[] = [
  { path: RouteNames.CHAT, exact: false, component: Chat, readableName: '' },
  { path: RouteNames.PROFILE, exact: true, component: Profile, readableName: '' },
];

export const dealerRoutes: RoutesInterface[] = [
  { path: RouteNames.MY_LOTS, exact: true, component: MyLots, readableName: 'My lots' },
  { path: RouteNames.ORDERS, exact: true, component: Orders, readableName: 'Orders' },
];

export const customerRoutes: RoutesInterface[] = [
  { path: RouteNames.CART, exact: true, component: Cart, readableName: '' },
  { path: RouteNames.CUSTOMER_LOTS, exact: true, component: CustomerOrders, readableName: '' },
];

export const notFoundRoutes: RoutesInterface[] = [
  { path: '*', exact: true, component: NotFound, readableName: '' },
];
