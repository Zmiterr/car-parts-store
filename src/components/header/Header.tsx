import React, { FC } from 'react';
import Navbar from './navbar';
import { privateRoutes } from '../../router';
import { ContainerPadding, StyledHeader } from './styles';
import NavbarLogo from './navbarLogo';

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
