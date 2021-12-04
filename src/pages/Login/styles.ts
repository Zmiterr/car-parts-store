import styled from 'styled-components';

export const StyledLogin = styled.div`
  color: ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
  margin: 64px;
  width: auto;
  min-height: 500px;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
