import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid ${(props) => props.theme.colors.main};
  border-radius: 3px;
`;

export const StyledLink = styled(Link)`
  margin: 0 10px;
  text-transform: uppercase;
`;
