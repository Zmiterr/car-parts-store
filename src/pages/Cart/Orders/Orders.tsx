import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../../../shared/styled/Elements/PrimaryButton';
import { OrdersContainer, Subtotal } from './styles';
import { getLots, removeLotFromCart } from '../../../store/lots/lotsActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import OrderItem from './OrderList/OrderItem/OrderItem';

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

  const handleRemoveLotFromCart = (lotId: number) => {
    dispatch(removeLotFromCart(lotId));
  };
  return (
    <>
      <OrdersContainer>
        <ul className="cartWrap">
          {lotsInCart.map((lot) => (
            <OrderItem key={lot.id} lot={lot} handleRemoveLotFromCart={handleRemoveLotFromCart} />
          ))}
        </ul>
      </OrdersContainer>
      <Subtotal>
        <ul>
          <li className="totalRow">
            <span className="label">Subtotal</span>
            <span className="value">$35.00</span>
          </li>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">$44.00</span>
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
