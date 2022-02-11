import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledCard } from '../../shared/styled/containers/Card';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import {
  SearchBody,
  SearchContent,
  SearchNavigation,
  SearchNavigationItem,
} from '../Parts/Components/Search/Styles';
import { UserInfo } from './Styles';
import SecurityForm from './Security/SecurityForm';
import UserInfoForm from './UserInfo/UserInfoForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUser } from '../../store/user/userActions';
import StoreLocation from './StoreLocation/StoreLocation';
import { UserInterface } from '../../models/UserInterface';
import UserAvatar from './UserInfo/UserAvatar/UserAvatar';

const Profile: FC = () => {
  const userId = useTypedSelector((state) => state.auth.user.userData[0].id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  const user: UserInterface = useTypedSelector((state) =>
    state.user.user ? state.user.user[0] : [],
  );
  const tabs = ['User info', 'Security', 'Store location'];
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
            <UserInfo>
              {/* //TODO fix ts errror */}
              {activeTab === 0 && user && <UserInfoForm user={user} />}
              {activeTab === 1 && user && <SecurityForm />}
              {activeTab === 2 && user.role === 'dealer' && <StoreLocation />}
            </UserInfo>
          </StyledCard>
        </SearchContent>
      </SearchBody>
    </Container>
  );
};

export default Profile;
