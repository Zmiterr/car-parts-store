import React, { FC, useState } from 'react';

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
} from './Styles';

const Search: FC = () => {
  const tabs = ['By name', 'By part number'];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <SearchBody>
      <SearchNavigation>
        {tabs.map((tabName, index) => {
          return (
            <SearchNavigationItem
              key={tabName}
              // TODO fix ts error
              isActiveTab={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tabName}
            </SearchNavigationItem>
          );
        })}
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
