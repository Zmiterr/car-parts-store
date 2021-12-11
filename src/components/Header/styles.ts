import styled from 'styled-components';

export const Container = styled.div`
   {
    display: flex;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
  }
`;

export const ContainerPadding = styled(Container)`
  padding: 0 25px;
`;

export const StyledHeader = styled.header`
  //display: flex;
  box-sizing: border-box;
  //justify-content: flex-start;
  border: none;
  box-shadow: 0 3px 14px 0 rgb(0 0 0 / 12%);
  background-color: ${(props) => props.theme.colors.primary};
  flex-flow: row nowrap;
  position: relative;
  color: ${(props) => props.theme.colors.primaryLight};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

export const UserActions = styled.div`
  display: flex;
  //TODO delete after padding settings
  min-width: 200px;
  justify-content: space-between;
  align-items: center;
`;
