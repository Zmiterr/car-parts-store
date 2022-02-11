import styled from 'styled-components';

export const UserAvatarImage = styled.div`
  width: 360px;
  height: 320px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  margin: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;
