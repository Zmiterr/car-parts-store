import styled from 'styled-components';
import avatar from '../../../../assets/images/user-avatar.jpg';

export const Avatar = styled.div`
  background-image: url(${avatar});
  background-color: #fff;
  background-position: center center;
  background-size: 40px 40px;
  border: 0;
  border-radius: 50%;
  display: block;
  margin: 0;
  position: relative;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;
