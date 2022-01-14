import styled from 'styled-components';

export const PrimaryButton = styled.button`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: ${(globalProps) => globalProps.theme.colors.success};
  &:focus {
    text-decoration: none;
  }
  &:hover {
    outline: 0;
    text-decoration: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
    
  }
`;
