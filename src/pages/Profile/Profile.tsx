import React, { FC, useState } from 'react';
import { StyledCard } from '../../shared/styled/containers/Card';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import {
  SearchBody,
  SearchContent,
  SearchNavigation,
  SearchNavigationItem,
} from '../Parts/Components/Search/Styles';
import { UserAvatar, UserInfo } from './Styles';
import SecurityForm from './Security/SecurityForm';
import UserInfoForm from './UserInfo/UserInfoForm';

const Profile: FC = () => {
  const tabs = ['User info', 'Security'];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container>
      <PageHeader>
        <h2>Profile</h2>
      </PageHeader>
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
          <StyledCard>
            {activeTab === 0 && <UserAvatar />}
            <UserInfo>{activeTab === 0 ? <UserInfoForm /> : <SecurityForm />}</UserInfo>
          </StyledCard>
        </SearchContent>
      </SearchBody>
    </Container>
  );
};

export default Profile;
