import styled from 'styled-components';

interface ComponentsPropsInterface {
  image: string;
}

export const LotImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props: ComponentsPropsInterface) => props.image});
  background-size: cover;
  margin: 1rem;
`;
