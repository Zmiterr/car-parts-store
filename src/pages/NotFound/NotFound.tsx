import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../../shared/styled/containers/Container';

const NotFound: FC = () => {
  const location = useLocation();
  return (
    <Container>
      Page <code>{location.pathname}</code> is not found{' '}
    </Container>
  );
};

export default NotFound;
