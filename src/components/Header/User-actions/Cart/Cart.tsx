import React, { FC } from 'react';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../router';

const Cart: FC = () => {
  return (
    <Link to={RouteNames.CART}>
      <div>
        <FontAwesomeIcon icon={faCartArrowDown} />
      </div>
    </Link>
  );
};

export default Cart;
