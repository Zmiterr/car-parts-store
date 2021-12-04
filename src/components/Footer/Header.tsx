import React, { FC } from 'react';

import { privateRoutes } from '../../router';
import { ContainerPadding, StyledHeader } from './styles';
import Navbar from '../Header/Navbar';
import NavbarLogo from '../Header/Navbar-logo';

const Header: FC = () => {
  const routes = [...privateRoutes];
  return (
    <StyledHeader>
      <ContainerPadding>
        <NavbarLogo />
        <Navbar routes={routes} />
      </ContainerPadding>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
