import React, { FC } from 'react';
import { StyledCard } from '../../../shared/styled/containers/Card';
import { OrderInterface } from '../../../store/orders/types';
import { LotInterface } from '../../../store/lots/types';

interface OrderProps {
  order: OrderInterface;
  lotsData: LotInterface[];
}

const Order: FC<OrderProps> = ({ order, lotsData }) => {
  const orderLotDetail = lotsData.find((lot) => order.id === lot.id);
  return (
    <StyledCard>
      <img src={orderLotDetail?.defaultImageUrl} alt={orderLotDetail?.description} />
      <p>
        Customer: {order.customerFirstName} {order.customerLastName}
        <br />
        Contacts: {order.phone}, {order.email}
      </p>
    </StyledCard>
  );
};

export default Order;
