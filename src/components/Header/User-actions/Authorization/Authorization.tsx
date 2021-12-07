import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../router';

const Authorization: FC = () => {
  return (
    <Link to={RouteNames.LOGIN}>
      <div>Log in</div>
    </Link>
  );
};

export default Authorization;
