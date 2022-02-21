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
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

export const MapWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  //width: 90vw;
  //height: 60vh;
  .ww {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
  }
  .button-wrapper {
    position: absolute;
    bottom: 0;
    left: 200px;
  }
`;
