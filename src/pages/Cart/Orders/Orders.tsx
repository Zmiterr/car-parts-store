import React, { FC } from 'react';
import { PrimaryButton } from '../../../shared/styled/Elements/PrimaryButton';
import { OrdersContainer, Subtotal } from './styles';
import OrderItem from './OrderItem/OrderItem';

const Orders: FC = () => {
  return (
    <>
      <OrdersContainer>
        <ul className="cartWrap">
          <OrderItem />
          <li className="orderItem">
            <div className="infoWrap">
              <div className="cartSection">
                <img
                  src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                  alt=""
                  className="itemImg"
                />
                <p className="dealerName">Dealer Name</p>
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
          <li className="orderItem">
            <div className="infoWrap">
              <div className="cartSection">
                <img
                  src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                  alt=""
                  className="itemImg"
                />
                <p className="dealerName">Dealer Name</p>
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

          <li className="orderItem">
            <div className="infoWrap">
              <div className="cartSection">
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

                <p className="stockStatus out"> Out of Stock</p>
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
        </ul>
      </OrdersContainer>
      <Subtotal>
        <ul>
          <li className="totalRow">
            <span className="label">Subtotal</span>
            <span className="value">$35.00</span>
          </li>

          <li className="totalRow">
            <span className="label">Shipping</span>
            <span className="value">$5.00</span>
          </li>

          <li className="totalRow">
            <span className="label">Tax</span>
            <span className="value">$4.00</span>
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
