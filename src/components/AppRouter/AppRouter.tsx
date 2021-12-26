import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { RouteNames } from '../../router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getAvailableRoutes } from '../../router/routes';

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const userType = useTypedSelector((state) => state.auth.role);
  const routes = getAvailableRoutes(isAuth, userType);
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
