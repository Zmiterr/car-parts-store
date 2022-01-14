import styled from 'styled-components';

export const ModalBox = styled.div`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  padding: 1em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
