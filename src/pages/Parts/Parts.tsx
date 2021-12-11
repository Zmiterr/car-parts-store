import React, { FC } from 'react';
import { Container } from '../../shared/styled/containers/Container';
import Part from './Components/Part/Part';
import Search from './Components/Search/Search';

const Parts: FC = () => {
  return (
    <Container>
      <Search />
      <Part />
      <Part />
      <Part />
    </Container>
  );
};

export default Parts;
