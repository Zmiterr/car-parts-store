import React, { FC, KeyboardEvent } from 'react';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { CartBlock } from './styles';
import CartTooltip from './CartTooltip/CartTooltip';
import { useComponentVisible } from '../../../../hooks/useComponentVisible';

const Cart: FC = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const count = useTypedSelector((state) => state.lots.lotsInCart.length);
  const handleClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };
  return (
    <CartBlock>
      <div role="button" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
        <FontAwesomeIcon icon={faCartArrowDown} />
        {count !== 0 && <span className="cart-counter">{count}</span>}
      </div>

      {isComponentVisible && (
        <CartTooltip setIsComponentVisible={setIsComponentVisible} myRef={ref} />
      )}
    </CartBlock>
  );
};

export default Cart;
