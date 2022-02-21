import styled, { ThemedStyledProps } from 'styled-components';

interface PrimaryButtonProps extends ThemedStyledProps<any, any> {
  color?: string;
}

export const PrimaryButton = styled.button`
  min-width: 80px;
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
  background-color: ${(globalProps: PrimaryButtonProps) =>
    globalProps.color || globalProps.theme.colors.success};
  &:focus {
    text-decoration: none;
  }
  &:hover {
    outline: 0;
    text-decoration: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  &:disabled {
    box-shadow: none;
    cursor: inherit;
    background-color: ${(globalProps) => globalProps.theme.colors.grayLight};
  }
    
  }
`;
