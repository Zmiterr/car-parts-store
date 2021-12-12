import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 0 1rem;
  text-transform: uppercase;
`;
