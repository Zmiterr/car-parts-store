import React, { FC } from 'react';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import LotCompare from './LotCompare/LotCompare';

const LotsCompare: FC = () => {
  return (
    <Container>
      <PageHeader>
        <h2>Dealers</h2>
      </PageHeader>
      <LotCompare />
      <LotCompare />
      <LotCompare />
    </Container>
  );
};

export default LotsCompare;
