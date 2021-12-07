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

export const Input = styled.input.attrs({
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
