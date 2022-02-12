import React, { FC } from 'react';

const OrderItem: FC = () => {
  return (
    <li className="orderItem">
      <div className="infoWrap">
        <div className="cartSection info">
          <img
            src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
            alt=""
            className="itemImg"
          />
          <p className="dealerName">dealer Name</p>
          <h3>Item Name 1</h3>

          <p>
            <input type="text" className="qty" placeholder="3" /> x $5.00
          </p>

          <p className="stockStatus"> In Stock</p>
        </div>

        <div className="prodTotal cartSection">
          <p>$15.00</p>
        </div>

        <div className="cartSection removeWrap">
          <a href="#" className="remove">
            x
          </a>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
