import { FC } from 'react';
import Login from '../pages/Login/Login';
import Parts from '../pages/Parts/Parts';
import Dealers from '../pages/Dealers/Dealers';
import Chat from '../pages/Chat/Chat';
import MyLots from '../pages/MyLots/MyLots';
import Orders from '../pages/Orders/Orders';
import Cart from '../pages/Cart/Cart';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';

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
  ORDERS = '/orders',
  CART = '/cart',
  CHAT = '/chat',
  PROFILE = '/profile',
  NOT_FOUND = '/404-error',
}

export const defaultRoutes: RoutesInterface[] = [
  { path: RouteNames.MAIN, exact: true, component: Parts, readableName: '' },
  { path: RouteNames.LOGIN, exact: true, component: Login, readableName: '' },
  { path: RouteNames.PARTS, exact: true, component: Parts, readableName: 'Parts' },
  { path: RouteNames.DEALERS, exact: true, component: Dealers, readableName: 'Dealers' },
  { path: RouteNames.ORDERS, exact: true, component: Orders, readableName: 'Orders' },
  { path: RouteNames.PROFILE, exact: true, component: Profile, readableName: '' },
  { path: RouteNames.CHAT, exact: true, component: Chat, readableName: '' },
  { path: RouteNames.CART, exact: true, component: Cart, readableName: '' },
  { path: '*', exact: true, component: NotFound, readableName: '' },
];
export const publicRoutes: RoutesInterface[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login, readableName: 'Login' },
  { path: RouteNames.PARTS, exact: true, component: Parts, readableName: 'Parts' },
  { path: RouteNames.DEALERS, exact: true, component: Dealers, readableName: 'Dealers' },
];

export const privateRoutes: RoutesInterface[] = [
  { path: RouteNames.PARTS, exact: true, component: Parts, readableName: 'Parts' },
  { path: RouteNames.DEALERS, exact: true, component: Dealers, readableName: 'Dealers' },
  { path: RouteNames.CHAT, exact: true, component: Chat, readableName: 'Chat' },
];

export const dealerRoutes: RoutesInterface[] = [
  { path: RouteNames.MY_LOTS, exact: true, component: MyLots, readableName: 'MyLots' },
  { path: RouteNames.ORDERS, exact: true, component: Orders, readableName: 'Orders' },
];

export const customerRoutes: RoutesInterface[] = [
  { path: RouteNames.CART, exact: true, component: Cart, readableName: 'Cart' },
];
