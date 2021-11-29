import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../../router';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return isAuth ? (
    <Switch>
      {privateRoutes.map((r) => (
        <Route key={r.path} path={r.path} exact={r.exact} component={r.component} />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((r) => (
        <Route key={r.path} path={r.path} exact={r.exact} component={r.component} />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
