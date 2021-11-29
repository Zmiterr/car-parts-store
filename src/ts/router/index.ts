import { FC } from 'react';
import Login from '../pages/Login';
import Parts from '../pages/Parts';
import Dealers from '../pages/Dealers';
import Chat from '../pages/Chat';
import MyLots from '../pages/MyLots';
import Orders from '../pages/Orders';
import Cart from '../pages/Cart';

interface RoutesInterface {
  path: string;
  exact?: boolean;
  component: FC;
}

export enum RouteNames {
  LOGIN = '/login',
  PARTS = '/parts',
  DEALERS = '/dealers',
  MY_LOTS = '/my-lots',
  ORDERS = '/orders',
  CART = '/cart',
  CHAT = '/chat',
  NOT_FOUND = '/404-error',
}

export const publicRoutes: RoutesInterface[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
  { path: RouteNames.PARTS, exact: true, component: Parts },
  { path: RouteNames.DEALERS, exact: true, component: Dealers },
];

export const privateRoutes: RoutesInterface[] = [
  { path: RouteNames.PARTS, exact: true, component: Parts },
  { path: RouteNames.DEALERS, exact: true, component: Dealers },
  { path: RouteNames.CHAT, exact: true, component: Chat },
];

export const dealersRoutes: RoutesInterface[] = [
  { path: RouteNames.MY_LOTS, exact: true, component: MyLots },
  { path: RouteNames.ORDERS, exact: true, component: Orders },
];

export const customerRoutes: RoutesInterface[] = [
  { path: RouteNames.CART, exact: true, component: Cart },
];
