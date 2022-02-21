import styled from 'styled-components';

interface ComponentsPropsInterface {
  image: string;
}

export const UserAvatarImage = styled.div`
  width: 260px;
  height: 300px;
  background-image: url(${(props: ComponentsPropsInterface) => props.image});
  background-size: cover;
  margin: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;
