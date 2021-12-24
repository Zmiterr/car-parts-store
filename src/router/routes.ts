import {
  customerRoutes,
  dealerRoutes,
  defaultRoutes,
  publicRoutes,
  RoutesInterface,
} from './index';

export const getAvailableRoutes = (isAuth: boolean, userType: string): RoutesInterface[] => {
  let routes = defaultRoutes;
  if (isAuth) {
    routes = [...routes, ...publicRoutes];
  }
  if (userType === 'dealer') {
    routes = [...routes, ...customerRoutes];
  }
  if (userType === 'dealer') {
    routes = [...routes, ...dealerRoutes];
  }

  return routes;
};
