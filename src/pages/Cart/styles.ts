import styled from 'styled-components';
import emptyCartImg from '../../assets/bg/cart-cat.png';

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const EmptyCartBackground = styled.div`
  width: 360px;
  height: 320px;
  background-image: url(${emptyCartImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
`;
