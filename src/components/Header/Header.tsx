import React, { FC } from 'react';
import Navbar from './Navbar';
import { privateRoutes } from '../../router';
import { ContainerPadding, StyledHeader } from './styles';
import NavbarLogo from './Navbar-logo';

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
