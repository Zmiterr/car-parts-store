import React, { FC } from 'react';
import { StyledImg, StyledLogo } from './styles';
import logo from '../../../assets/logo.png';

const NavbarLogo: FC = () => {
  return (
    <StyledLogo>
      <StyledImg src={logo} alt="Car parts store" />
    </StyledLogo>
  );
};

export default NavbarLogo;
