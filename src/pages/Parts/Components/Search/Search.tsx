import React, { FC } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SearchBody,
  SearchButton,
  SearchContent,
  SearchForm,
  SearchInput,
  SearchNavigation,
  SearchNavigationItem,
  SearchNavigationItemActive,
} from './Styles';

const Search: FC = () => {
  return (
    <SearchBody>
      <SearchNavigation>
        <SearchNavigationItemActive>By name</SearchNavigationItemActive>
        <SearchNavigationItem>By part number</SearchNavigationItem>
      </SearchNavigation>
      <SearchContent>
        <SearchForm>
          <SearchInput />
          <SearchButton>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchForm>
      </SearchContent>
    </SearchBody>
  );
};

export default Search;
