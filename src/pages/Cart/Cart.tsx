import React, { FC } from 'react';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { Container } from '../../shared/styled/containers/Container';
import { EmptyCart, EmptyCartBackground } from './Styles';
import { SmallDescribe } from '../../shared/styled/headers/SmallDescribe';
import Orders from './Orders/Orders';
// TODO add empty condition
const Cart: FC = () => {
  return (
    <Container>
      <PageHeader>
        <h2>Cart</h2>
      </PageHeader>
      <Orders />
      <EmptyCart>
        <EmptyCartBackground />
        <SmallDescribe>Your cart is empty yet</SmallDescribe>
      </EmptyCart>
    </Container>
  );
};

export default Cart;
