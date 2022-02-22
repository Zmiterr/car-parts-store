import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './styles';
import { RouteNames } from '../../../../router';
import { UserInterface } from '../../../../models/UserInterface';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { UserProfileDataInterface } from '../../../../store/user/types';

const UserIcon: FC = () => {
  const user: UserProfileDataInterface = useTypedSelector((state) =>
    state.user.user ? state.user.user : ({} as UserInterface),
  );
  return (
    <Link to={RouteNames.PROFILE}>
      <Avatar avatarUrl={user?.avatarUrl} />
    </Link>
  );
};

export default UserIcon;
