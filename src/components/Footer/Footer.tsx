import React, { FC } from 'react';
import { privateRoutes } from '../../router';
import { Container, StyledFooter } from './styles';
import Navbar from '../Header/Navbar';

const Footer: FC = () => {
  const routes = [...privateRoutes];
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
