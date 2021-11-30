import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RoutesInterface } from '../../router';

interface PathProps {
  routes: RoutesInterface[];
}
const StyledNav = styled.nav`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid ${(props) => props.theme.colors.main};
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
  text-transform: uppercase;
`;

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
