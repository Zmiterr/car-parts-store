import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  margin: 0 10px;
  display: block;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`;
