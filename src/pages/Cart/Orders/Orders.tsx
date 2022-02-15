import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../../../shared/styled/Elements/PrimaryButton';
import { OrdersContainer, Subtotal } from './styles';
import { getLots, removeLotFromCart } from '../../../store/lots/lotsActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import OrderItem from './OrderList/OrderItem/OrderItem';
import { LotInterface } from '../../../store/lots/types';

interface OrdersProps {
  lotsInCartId: number[];
}

const Orders: FC<OrdersProps> = ({ lotsInCartId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, [dispatch]);
  const dealers = { 0: 'Dealer 1', 1: 'Dealer 2' };
  const lots = useTypedSelector((state) =>
    state.lots.lots.map((lot) => ({ ...lot, dealerID: Math.trunc(Math.random() * 2) })),
  );

  const lotsInCart = lots.filter((lot) => lotsInCartId.includes(lot.id));

  const total = lotsInCart.reduce((totalSum, lot) => totalSum + lot.price, 0);

  const result = lotsInCart.reduce((map, obj) => {
    map[obj.dealerID] = map[obj.dealerID] || [];
    map[obj.dealerID].push(obj);
    return map;
  }, {});

  const handleRemoveLotFromCart = (lotId: number) => {
    dispatch(removeLotFromCart(lotId));
  };

  return (
    <>
      <OrdersContainer>
        <ul className="cartWrap">
          {Object.keys(result).map((dealerId) => {
            const groupByDealerLots = result[dealerId];
            return (
              <>
                <h2>{dealers[dealerId]}</h2>
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
            <PrimaryButton>Order</PrimaryButton>
          </li>
        </ul>
      </Subtotal>
    </>
  );
};

export default Orders;
