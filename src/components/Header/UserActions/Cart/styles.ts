import styled from 'styled-components';

export const UserActions = styled.div`
  display: flex;
  justify-content: end;
`;

export const CartBlock = styled.div`
  position: relative;
  .cart-counter {
    margin-left: 4px;
    //white-space: nowrap;
    //text-overflow: ellipsis;
    //overflow: hidden;
    //min-width: 24px;
    //max-width: 34px;
    //height: 24px;
    //padding: 4px;
    //background-color: transparent;
    //background-clip: padding-box;
    //border: 3px solid #fff;
    //border-radius: 100px;
    //top: 8px;
    //right: -4px;
    //position: absolute;
    //font-size: 10px;
    //font-weight: 600;
    //line-height: 1;
    //color: #fff;
    //text-align: center;
    //box-sizing: border-box;
    //pointer-events: none;
  }
`;

export const CartTooltipHolder = styled.div`
  background: transparent;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  list-style: none;
  .wishlist {
    max-width: 460px;
    padding: 22px 24px;
    margin-left: 20px;
    margin-right: 20px;
    color: ${(props) => props.theme.colors.dark};
    background: #fff;
    border: 1px solid #d8d8d8;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    min-height: 50px;
    min-width: 0;
    position: absolute;
    right: -31px;
    top: 33px;
    z-index: 21;
    &::after {
      content: '';
      z-index: 2;
      left: 124px;
      top: -13px;
      position: absolute;
      border: 10px solid transparent;
      margin-left: -10px;
      border-bottom: 10px solid #fff;
      border-top: 0;
      margin-top: 3px;
    }
  }

  .marked-list {
    letter-spacing: -0.3em;
    text-align: center;
    width: 100%;
  }
  .marked-list-item {
    border-top: 1px solid #f0f0f0;
    color: #111;
    display: flex;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: normal;
    line-height: 1.3;
    list-style: none;
    position: relative;
    text-align: left;
    vertical-align: top;
    width: 100%;
  }
  .marked-list-link {
    align-items: center;
    color: #111;
    display: flex;
    height: 52px;
    text-align: left;
    &::before {
      background-image: url(https://cld.partsimg.com/image/upload/d_noimage.jpg,h_112,c_pad,f_auto,q_auto,dpr_auto,e_sharpen/images/oe_replica_wheels.jpg);
      background-size: 30px 30px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      content: '';
      display: block;
      height: 32px;
      margin-right: 10px;
      width: 40px;
    }
  }
`;
