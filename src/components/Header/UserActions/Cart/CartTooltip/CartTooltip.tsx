import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CartTooltipHolder } from '../styles';
import { PrimaryButton } from '../../../../../shared/styled/Elements/PrimaryButton';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { RouteNames } from '../../../../../router';

interface CartTooltipProps {
  setIsComponentVisible: (b: boolean) => void;
  myRef: any;
}

const CartTooltip: FC<CartTooltipProps> = ({ setIsComponentVisible, myRef }) => {
  const lots = useTypedSelector((state) =>
    state.lots.lots.map((lot) => ({ ...lot, dealerID: Math.trunc(Math.random() * 2) })),
  );
  const lotsInCartId = useTypedSelector((state) => state.lots.lotsInCart);
  const lotsInCart = lots.filter((lot) => lotsInCartId.includes(lot.id));

  const handleClick = () => {
    setIsComponentVisible(false);
  };

  return (
    <CartTooltipHolder>
      <div className="wishlist" ref={myRef}>
        <ul className="marked-list">
          {lotsInCart.map((lot) => (
            <li key={lot.id} className="marked-list-item">
              <span className="marked-list-link" />
              {lot.name} {lot.price}$
            </li>
          ))}
        </ul>
        <Link to={RouteNames.CART}>
          <PrimaryButton onClick={handleClick}>Go to cart</PrimaryButton>
        </Link>
      </div>
    </CartTooltipHolder>
  );
};

export default CartTooltip;
