import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './styles';
import { RouteNames } from '../../../../router';

const UserIcon: FC = () => {
  return (
    <Link to={RouteNames.PROFILE}>
      <Avatar />
    </Link>
  );
};

export default UserIcon;
