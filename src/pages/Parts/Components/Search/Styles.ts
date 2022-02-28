import styled, { css } from 'styled-components';
import { InputBase } from '@mui/material';

export const SearchBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const SearchNavigation = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const SearchNavigationItem = styled.div`
  padding: 10px 35px;
  font-size: 16px;
  color: #000;
  background: ${(props) => props.theme.colors.white};
  transition: all 0.3s ease;
  margin-right: 2px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  ${(props: { isActiveTab: boolean }) =>
    props.isActiveTab &&
    css`
      color: #fff;
      background: ${(global) => global.theme.colors.primary};
    `}
`;

export const SearchNavigationItemActive = styled(SearchNavigationItem)`
  color: #fff;
  background: ${(props) => props.theme.colors.primary};
`;

export const SearchContent = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 0 5px 5px 5px;
  padding: 20px 25px;
`;

export const SearchForm = styled.div`
  display: flex;
  margin-right: 40px;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  font-size: 14px;
  height: auto;
  vertical-align: middle;
  font-weight: normal;
  padding: 13px 11px 14px 16px;
  color: #333;
  width: 100%;
  border-radius: 4px 4px 4px 4px;
  border: 0;
`;

export const SearchButton = styled.button`
  border: 0;
  cursor: pointer;
  white-space: nowrap;
  background: #fff;
  margin-left: -50px;
  margin-right: 14px;
  padding-left: 10px;
  border-left: 1px solid #838690;
`;

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: 0,
  },
  '& .css-1uwzc1h-MuiSelect-select-MuiInputBase-input.MuiSelect-select': { height: 21 },
  '& .MuiInputBase-input': {
    marginLeft: 5,
    borderRadius: 4,
    minWidth: 80,
    position: 'relative',
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 26px 10px 12px',
    transition: 'all, 1s',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#969696',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
