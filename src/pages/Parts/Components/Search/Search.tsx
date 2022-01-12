import React, { FC, KeyboardEvent, ChangeEvent, useState } from 'react';

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

enum SearchTabs {
  ByName = 'By name',
  ByPartNumber = 'By part number',
}

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const tabs: SearchTabs[] = [SearchTabs.ByName, SearchTabs.ByPartNumber];
  const [activeTab, setActiveTab] = useState(0);
  const sendSearchRequest = () => {
    console.log(`Search: ${searchValue}`, tabs[activeTab]);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    if (searchValue.length > 2) {
      sendSearchRequest();
    }
  };

  const checkEnterKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendSearchRequest();
    }
  };
  return (
    <SearchBody>
      <SearchNavigation>
        {tabs.map((tabName, index) => {
          return (
            <SearchNavigationItem
              key={tabName}
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
          <SearchInput value={searchValue} onChange={handleSearchChange} onKeyUp={checkEnterKey} />
          <SearchButton onClick={sendSearchRequest}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchForm>
      </SearchContent>
    </SearchBody>
  );
};

export default Search;
