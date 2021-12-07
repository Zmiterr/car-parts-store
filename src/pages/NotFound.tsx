import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledContainer } from '../theme/container';

const NotFound: FC = () => {
  const location = useLocation();
  return (
    <StyledContainer>
      Page <code>{location.pathname}</code> is not found{' '}
    </StyledContainer>
  );
};

export default NotFound;
