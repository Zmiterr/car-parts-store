import React, { FC } from 'react';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Order from './Order/Order';

const Orders: FC = () => {
  return (
    <Container>
      <PageHeader>
        <h2>Orders</h2>
      </PageHeader>
      <Order />
      <Order />
      <Order />
    </Container>
  );
};

export default Orders;
