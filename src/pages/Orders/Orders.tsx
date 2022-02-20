import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Order from './Order/Order';
import { getOrders } from '../../store/orders/ordersActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getLots } from '../../store/lots/lotsActions';

const Orders: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // TODO make get only dealer orders
    dispatch(getOrders());
    dispatch(getLots());
  }, [dispatch]);

  const orders = useTypedSelector((state) => state.orders.orders);
  const lots = useTypedSelector((state) => state.lots.lots);

  return (
    <Container>
      <PageHeader>
        <h2>Orders</h2>
      </PageHeader>
      {orders && orders.map((order) => <Order key={order.id} order={order} lotsData={lots} />)}
    </Container>
  );
};

export default Orders;
