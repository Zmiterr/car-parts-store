import React, { FC } from 'react';
import { Container } from '../../../shared/styled/containers/Container';
import { CompareLotItem } from '../Styles';
import emptyCartImg from '../../../assets/images/ats_classic_1_large.png';
import { PageHeader } from '../../../shared/styled/headers/PageHeader';
import { H2 } from '../../../shared/styled/headers/H2';

const LotCompare: FC = () => {
  return (
    <Container>
      <PageHeader>
        <H2>Compare lots</H2>
      </PageHeader>
      <CompareLotItem>
        <img src={emptyCartImg} alt="dealer" />
      </CompareLotItem>
    </Container>
  );
};

export default LotCompare;
