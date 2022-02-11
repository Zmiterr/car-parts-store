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
import { LotInterface } from '../../../../store/lots/types';

enum SearchTabs {
  ByName = 'By name',
  ByPartNumber = 'By part number',
}

interface SearchProps {
  setFilteredLots: (a: LotInterface[]) => void;
  lots: LotInterface[];
}

const Search: FC<SearchProps> = ({ lots, setFilteredLots }) => {
  const [searchValue, setSearchValue] = useState('');
  const tabs: SearchTabs[] = [SearchTabs.ByName, SearchTabs.ByPartNumber];
  const [activeTab, setActiveTab] = useState(0);
  const sendSearchRequest = (param: string) => {
    const filteredLots = lots.filter((lot) => {
      if (tabs[activeTab] === SearchTabs.ByName) {
        return lot.name.toLowerCase().includes(param.toLowerCase());
      }
      if (tabs[activeTab] === SearchTabs.ByPartNumber) {
        return String(lot.id).includes(param.toLowerCase());
      }
      return lots;
    });
    setFilteredLots(filteredLots);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    sendSearchRequest(event.target.value);
  };

  const checkEnterKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      sendSearchRequest(event.target.value);
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
