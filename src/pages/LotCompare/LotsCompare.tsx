import React, { FC } from 'react';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { H2 } from '../../shared/styled/headers/H2';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CompareTable from './CompareTable/CompareTable';

const LotsCompare: FC = () => {
  const lotsToCompare = useTypedSelector((state) => state.lots.lotsToCompare);
  return (
    <Container>
      <PageHeader>
        <H2>Compare lots</H2>
      </PageHeader>
      <CompareTable lots={lotsToCompare} />
    </Container>
  );
};

export default LotsCompare;
