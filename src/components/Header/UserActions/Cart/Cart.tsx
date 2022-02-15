import React, { FC } from 'react';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../router';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { CartBlock } from './styles';

const Cart: FC = () => {
  const count = useTypedSelector((state) => state.lots.lotsInCart.length);
  return (
    <Link to={RouteNames.CART}>
      <CartBlock>
        <FontAwesomeIcon icon={faCartArrowDown} />
        {count !== 0 && <span className="cart-counter">{count}</span>}
      </CartBlock>
    </Link>
  );
};

export default Cart;
