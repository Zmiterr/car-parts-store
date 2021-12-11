import styled from 'styled-components';

export const PartImage = styled.img`
  width: 200px;
  padding: 1rem;
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
  flex-direction: column;
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

export const PartToCartButton = styled.button`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: ${(props) => props.theme.colors.success};
  &:focus {
    text-decoration: none;
  }
  &:hover {
    outline: 0;
    text-decoration: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
    
  }
`;
