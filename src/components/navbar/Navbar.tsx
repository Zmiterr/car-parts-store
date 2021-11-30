import React, { FC } from 'react';
import { RoutesInterface } from '../../router';
import { StyledLink, StyledNav } from './styles';

interface PathProps {
  routes: RoutesInterface[];
}

const Navbar: FC<PathProps> = ({ routes }) => {
  return (
    <StyledNav>
      {routes.map((r) => (
        <StyledLink key={r.path} to={r.path}>
          {r.readableName}
        </StyledLink>
      ))}
    </StyledNav>
  );
};

export default Navbar;
