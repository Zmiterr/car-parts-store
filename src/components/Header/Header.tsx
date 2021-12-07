import React, { FC } from 'react';
import Navbar from './Navbar';
import { defaultRoutes } from '../../router';
import { ContainerPadding, StyledHeader, UserActions } from './styles';
import NavbarLogo from './Navbar-logo';
import Authorization from './User-actions/Authorization';
import Messages from './User-actions/Messages';
import Cart from './User-actions/Cart';
import UserIcon from './User-actions/Avatar';

const Header: FC = () => {
  const routes = [...defaultRoutes];
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
