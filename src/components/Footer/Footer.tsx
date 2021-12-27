import React, { FC } from 'react';
import { Container, StyledFooter } from './Styles';
import Navbar from '../Header/Navbar';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getAvailableRoutes } from '../../router/routes';

const Footer: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const userType = useTypedSelector((state) => state.auth.role);
  const routes = getAvailableRoutes(isAuth, userType);
  return (
    <StyledFooter>
      <Container>
        FOOTER
        <Navbar routes={routes} />
      </Container>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
