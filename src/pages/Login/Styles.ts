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

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding: 0.5rem 0.75rem;
  margin: 1rem 0;
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
export const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Submit',
})`
  background: ${(props) => props.theme.colors.success};
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: ${(props) => props.theme.colors.success};
  }
`;
