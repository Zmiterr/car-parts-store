import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  customerRoutes,
  dealerRoutes,
  defaultRoutes,
  publicRoutes,
  RouteNames,
} from '../../router';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const userType = 'dealer';
  let routes = defaultRoutes;
  if (isAuth) {
    routes = [...routes, ...publicRoutes];
  } else {
    if (userType === 'dealer') {
      routes = [...routes, ...customerRoutes];
    }
    if (userType === 'dealer') {
      routes = [...routes, ...dealerRoutes];
    }
  }
  return (
    <Switch>
      {routes.map((r) => (
        <Route key={r.path} path={r.path} exact={r.exact} component={r.component} />
      ))}
      <Redirect to={RouteNames.PARTS} />
    </Switch>
  );
};

export default AppRouter;
