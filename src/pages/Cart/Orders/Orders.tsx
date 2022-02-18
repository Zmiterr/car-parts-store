import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../../shared/styled/Elements/PrimaryButton';
import { OrdersContainer, Subtotal } from './styles';
import { getLots, removeLotFromCart } from '../../../store/lots/lotsActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import OrderItem from './OrderList/OrderItem/OrderItem';
import { LotInterface } from '../../../store/lots/types';
import { RouteNames } from '../../../router';

interface OrdersProps {
  lotsInCartId: number[];
}

const Orders: FC<OrdersProps> = ({ lotsInCartId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, [dispatch]);

  const lots = useTypedSelector((state) => state.lots.lots);

  const lotsInCart = lots.filter((lot) => lotsInCartId.includes(lot.id));

  const total = lotsInCart.reduce((totalSum, lot) => totalSum + lot.price, 0);

  const result = lotsInCart.reduce((map, obj) => {
    // TODO lodash reassign set
    map[`${obj.firstName} ${obj.lastName}`] = map[`${obj.firstName} ${obj.lastName}`] || [];
    map[`${obj.firstName} ${obj.lastName}`].push(obj);
    return map;
  }, {});

  const handleRemoveLotFromCart = (lotId: number) => {
    dispatch(removeLotFromCart(lotId));
  };

  return (
    <>
      <OrdersContainer>
        <ul className="cartWrap">
          {Object.keys(result).map((dealerName) => {
            const groupByDealerLots = result[dealerName];
            return (
              <>
                <h2>{dealerName}</h2>
                {groupByDealerLots.map((lot: LotInterface) => (
                  <OrderItem
                    key={lot.id}
                    lot={lot}
                    handleRemoveLotFromCart={handleRemoveLotFromCart}
                  />
                ))}
              </>
            );
          })}
        </ul>
      </OrdersContainer>
      <Subtotal>
        <ul>
          <li className="totalRow">
            <span className="label">Subtotal</span>
            <span className="value">${total}</span>
          </li>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">${total}</span>
          </li>
          <li className="totalRow">
            <Link to={RouteNames.ORDER_CONFIRM}>
              <PrimaryButton>Order</PrimaryButton>
            </Link>
          </li>
        </ul>
      </Subtotal>
    </>
  );
};

export default Orders;
