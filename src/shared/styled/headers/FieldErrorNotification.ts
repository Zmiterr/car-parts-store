import styled from 'styled-components';

export const FieldErrorNotification = styled.span`
  font-size: 80%;
  font-weight: 400;
  color: ${(props) => props.theme.colors.danger};
`;
