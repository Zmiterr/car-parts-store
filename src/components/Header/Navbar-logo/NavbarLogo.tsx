import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledImg, StyledLogo } from './styles';
import logo from '../../../assets/logo.png';
import { RouteNames } from '../../../router';

const NavbarLogo: FC = () => {
  return (
    <StyledLogo>
      <Link to={RouteNames.PARTS}>
        <StyledImg src={logo} alt="Car parts store" />
      </Link>
    </StyledLogo>
  );
};

export default NavbarLogo;
