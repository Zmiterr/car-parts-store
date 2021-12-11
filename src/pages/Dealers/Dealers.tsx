import React, { FC } from 'react';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Dealer from './Dealer/Dealer';

const Dealers: FC = () => {
  return (
    <Container>
      <PageHeader>
        <h2>Dealers</h2>
      </PageHeader>
      <Dealer />
      <Dealer />
      <Dealer />
    </Container>
  );
};

export default Dealers;
