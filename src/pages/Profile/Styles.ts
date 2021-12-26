import styled from 'styled-components';
import emptyCartImg from '../../assets/images/user-avatar-big.jpg';

export const UserAvatar = styled.div`
  width: 360px;
  height: 320px;
  background-image: url(${emptyCartImg});
  background-size: cover;
  margin: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;