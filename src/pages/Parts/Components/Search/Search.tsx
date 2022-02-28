import React, { FC, KeyboardEvent, ChangeEvent, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {
  BootstrapInput,
  SearchBody,
  SearchButton,
  SearchContent,
  SearchForm,
  SearchInput,
  SearchNavigation,
  SearchNavigationItem,
} from './Styles';
import { LotInterface } from '../../../../store/lots/types';
import { PrimaryButton } from '../../../../shared/styled/Elements/PrimaryButton';
import { theme } from '../../../../theme/theme';

enum SearchTabs {
  ByName = 'By name',
  ByPartNumber = 'By part number',
}

interface SearchProps {
  setFilteredLots: (a: LotInterface[]) => void;
  handleNearMeClick: () => void;
  lots: LotInterface[];
}

const Search: FC<SearchProps> = ({ lots, setFilteredLots, handleNearMeClick }) => {
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

  const [model, setModel] = React.useState<string>('');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setModel(event.target.value);
  };
  // TODO KISS it
  const modelsList = Array.from(new Set(lots.map((lot) => lot.models).flat(3))).slice(0, -1);

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
        <PrimaryButton color={theme.colors.white} onClick={handleNearMeClick}>
          Near me
        </PrimaryButton>
        <FormControl sx={{}}>
          <InputLabel id="select">Model</InputLabel>
          <Select
            labelId="autowidth-label"
            id="select-autowidth"
            value={model}
            autoWidth
            label="Age"
            input={<BootstrapInput />}
            onChange={handleChange}
          >
            {modelsList.map((lot) => (
              <MenuItem key={lot} value={lot}>
                {lot}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SearchContent>
    </SearchBody>
  );
};

export default Search;
