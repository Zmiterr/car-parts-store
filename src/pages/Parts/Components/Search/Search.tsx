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

// TODO best way to use enum (type here better?)
enum SearchTabs {
  by_name = 'By name',
  By_part_number = 'By part number',
}

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const tabs: SearchTabs[] = [SearchTabs.by_name, SearchTabs.By_part_number];
  const [activeTab, setActiveTab] = useState(0);
  const sendSearchRequest = () => {
    console.log(`Search: ${searchValue}`, tabs[activeTab]);
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    // TODO fix error with set value definition
    setSearchValue(event.target.value);
    if (searchValue.length > 2) {
      sendSearchRequest();
    }
  };

  const checkEnterKey = (event) => {
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
