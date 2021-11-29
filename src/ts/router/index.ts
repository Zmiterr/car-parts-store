import { FC } from 'react';
import Login from '../pages/Login';

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
}

export const publicRoutes: RoutesInterface[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];

export const privateRoutes: RoutesInterface[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];
