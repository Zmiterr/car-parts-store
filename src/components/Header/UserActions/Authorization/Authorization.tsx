import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { AuthActions } from '../../../../store/reducers/auth/authActions';
import { RouteNames } from '../../../../router';
import { LogoutButton } from './Styles';

const Authorization: FC = () => {
  const history = useHistory();
  const { isAuth } = useTypedSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(AuthActions.logout());
    history.push('/login');
  };
  return isAuth ? (
    <LogoutButton onClick={() => logout()}>Log out</LogoutButton>
  ) : (
    <Link to={RouteNames.LOGIN}>
      <div>Log in</div>
    </Link>
  );
};

export default Authorization;
