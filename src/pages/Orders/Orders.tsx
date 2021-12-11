import React, { FC } from 'react';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Order from './Order/Order';

const Orders: FC = () => {
  return (
    <Container>
      <PageHeader>
        <h2>Orders</h2>
        <Order />
        <Order />
        <Order />
      </PageHeader>
    </Container>
  );
};

export default Orders;
