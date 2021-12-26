import {
  customerRoutes,
  dealerRoutes,
  defaultRoutes,
  notFoundRoutes,
  publicRoutes,
  RoutesInterface,
} from './index';

export const getAvailableRoutes = (isAuth: boolean, userType: string): RoutesInterface[] => {
  let routes = defaultRoutes;
  if (isAuth) {
    routes = [...routes, ...publicRoutes];
  }
  if (userType === 'dealer') {
    routes = [...routes, ...dealerRoutes];
  }
  if (userType === 'customer') {
    routes = [...routes, ...customerRoutes];
  }

  return [...routes, ...notFoundRoutes];
};
