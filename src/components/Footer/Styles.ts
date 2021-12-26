import styled from 'styled-components';

export const StyledFooter = styled.header`
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  display: block;
  box-shadow: 0 3px 14px 0 rgb(0 0 0 / 12%);
  background-color: #ff3c2d !important;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
