import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledCard, CardBody } from '../../theme/card';

const Input = styled.input.attrs({
  // type: 'submit',
  // value: 'Submit',
})`
  display: block;
  width: 100%;
  height: 34px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }
`;
const Login: FC = () => {
  return (
    <StyledCard>
      <CardBody>This is login page</CardBody>
      <Input type="text" placeholder="login" />
      <Input type="password" placeholder="password" />
      <Input type="submit" value="Submit" />
    </StyledCard>
  );
};

export default Login;
