import styled from 'styled-components';

export const PartImage = styled.img`
  width: 110px;
  height: 110px;
`;

export const PartSpecifications = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 1rem;
  span {
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const PartSpecificationsAdditional = styled.div`
  margin-top: auto;
`;

export const PartOrderInfo = styled.div`
  display: flex;
  max-width: 330px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 1rem;
`;

export const PartPrise = styled.div`
  text-align: right;
  span {
    font-size: 1.6em;
    line-height: 1.2em;
    color: ${(props) => props.theme.colors.success};
  }
`;

export const PartLocation = styled.div`
  text-align: right;
`;

export const PartDealer = styled.div`
  text-align: right;
  span {
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
