import styled from 'styled-components';

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
  padding: 10px 35px 10px 35px;
  font-size: 16px;
  color: #000;
  background: #eaecee;
  transition: all 0.3s ease;
  margin-right: 2px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
`;

export const SearchNavigationItemActive = styled(SearchNavigationItem)`
  color: #fff;
  background: ${(props) => props.theme.colors.primary};
  padding: 15px 35px 10px 35px;
`;

export const SearchContent = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 0 5px 5px 5px;
  padding: 20px 25px;
`;

export const SearchForm = styled.div`
  display: inline-block;
  margin-right: 40px;
  text-align: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  font-size: 14px;
  height: auto;
  vertical-align: middle;
  font-weight: normal;
  padding: 13px 11px 14px 165px;
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
