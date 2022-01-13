import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const LotContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  min-height: 75px;
  padding: 12px;
`;

export const LotName = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Icon = styled(ReactSVG)`
  margin: 5px 0;
  cursor: pointer;
`;

export const LotDescription = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
`;
