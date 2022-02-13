import React, { FC } from 'react';
import { Icon } from '../../../../MyLots/Lot/Styles';
import DeleteIcon from '../../../../../assets/icons/delete.svg';
import { LotInterface } from '../../../../../store/lots/types';

interface OrderItemProps {
  lot: LotInterface;
  handleRemoveLotFromCart: (id: number) => void;
}

const OrderItem: FC<OrderItemProps> = ({ lot, handleRemoveLotFromCart }) => {
  return (
    <li key={lot.id} className="orderItem">
      <div className="infoWrap">
        <div className="cartSection">
          <img
            src="https://www.carparts4less.co.uk/catalogimages/categories/102x136/75_cp2_03.png?v=1"
            alt=""
            className="itemImg"
          />
          <p className="dealerName">Dealer Name</p>
          <h3>{lot.name}</h3>
          <p>
            <input type="text" className="qty" placeholder="1" /> x ${lot.price}
          </p>

          <p className="stockStatus"> In Stock</p>
        </div>

        <div className="prodTotal cartSection">
          <p>${lot.price}</p>
        </div>
        <div className="cartSection removeWrap">
          <Icon
            src={(DeleteIcon || '').replace(/^\.\//, '/')}
            beforeInjection={(svg: SVGSVGElement) => {
              svg.setAttribute('style', 'width: 20px');
              svg.setAttribute('style', 'height: 20px');
            }}
            onClick={() => handleRemoveLotFromCart(lot.id)}
          />
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
