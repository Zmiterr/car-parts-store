import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 3px 14px 0 rgb(0 0 0 / 12%);
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.grayLight};
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
