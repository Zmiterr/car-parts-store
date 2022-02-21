import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './styles';
import { RouteNames } from '../../../../router';
import { UserInterface } from '../../../../models/UserInterface';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

const UserIcon: FC = () => {
  const user: UserInterface = useTypedSelector((state) =>
    state.user.user ? state.user.user[0] : [],
  );
  return (
    <Link to={RouteNames.PROFILE}>
      <Avatar avatarUrl={user?.avatarUrl} />
    </Link>
  );
};

export default UserIcon;
