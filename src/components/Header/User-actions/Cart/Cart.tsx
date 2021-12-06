import React, { FC } from 'react';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart: FC = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartArrowDown} />
    </div>
  );
};

export default Cart;
