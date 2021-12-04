import styled from 'styled-components';

export const StyledHeader = styled.header`
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
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ContainerPadding = styled(Container)`
  padding: 0 25px;
`;
