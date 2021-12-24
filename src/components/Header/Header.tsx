import React, { FC } from 'react';
import Navbar from './Navbar';
import { ContainerPadding, StyledHeader, UserActions } from './styles';
import NavbarLogo from './Navbar-logo';
import Authorization from './User-actions/Authorization';
import Messages from './User-actions/Messages';
import Cart from './User-actions/Cart';
import UserIcon from './User-actions/Avatar';
import { getAvailableRoutes } from '../../router/routes';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Header: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const userType = useTypedSelector((state) => state.auth.role);
  const routes = getAvailableRoutes(isAuth, userType);
  return (
    <StyledHeader>
      <ContainerPadding>
        <NavbarLogo />
        <Navbar routes={routes} />
        <UserActions>
          <Messages />
          <Cart />
          <UserIcon />
          <Authorization />
        </UserActions>
      </ContainerPadding>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
