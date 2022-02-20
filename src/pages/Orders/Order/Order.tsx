import React, { FC } from 'react';
import moment from 'moment';
import { StyledCard } from '../../../shared/styled/containers/Card';
import { OrderInterface } from '../../../store/orders/types';
import { LotInterface } from '../../../store/lots/types';
import {
  PartDealer,
  PartImage,
  PartLocation,
  PartPrise,
  PartSpecifications,
  PartSpecificationsAdditional,
} from '../../Parts/Components/Part/Styles';
import { H5 } from '../../../shared/styled/headers/H5';
import { SmallDescribe } from '../../../shared/styled/headers/SmallDescribe';
import { PartOrderInfo } from './Styles';

interface OrderProps {
  order: OrderInterface;
  lotsData: LotInterface[];
}

const Order: FC<OrderProps> = ({ order, lotsData }) => {
  const orderLotDetail = lotsData.find((lot) => order.id === lot.id);
  return (
    <StyledCard>
      <PartImage src={orderLotDetail?.photoUrl || orderLotDetail?.defaultImageUrl} alt="text" />
      <PartSpecifications>
        <H5>{orderLotDetail?.name}</H5>
        <ul>
          {orderLotDetail?.models.map((model: string) => (
            <li key={model}>
              Alfa romeo: <span>{model}</span>
            </li>
          ))}
        </ul>
        <PartSpecificationsAdditional>
          <SmallDescribe>{orderLotDetail?.description}</SmallDescribe>
        </PartSpecificationsAdditional>
      </PartSpecifications>
      <PartOrderInfo>
        <PartPrise>
          <span>{orderLotDetail?.price}$</span>
        </PartPrise>
        <PartLocation>
          {/* // TODO move it to reducer */}
          <SmallDescribe>{moment(Date.parse(order.orderDate)).format('MMM Do YY')}</SmallDescribe>
        </PartLocation>
        <PartDealer>
          <span>
            {order.customerFirstName} {order.customerLastName}
          </span>
        </PartDealer>
      </PartOrderInfo>
    </StyledCard>
  );
};

export default Order;
