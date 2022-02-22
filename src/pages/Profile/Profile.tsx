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
import { UserProfileDataInterface } from '../../store/user/types';

const Profile: FC = () => {
  const userId = useTypedSelector((state) => state.auth.user?.userData?.[0].id);
  const role = useTypedSelector((state) => state.auth.user?.userData?.[0].role);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  const user: UserProfileDataInterface = useTypedSelector((state) =>
    state.user.user ? state.user.user : ({} as UserInterface),
  );

  const getCurrentUserTabs = () => {
    const commonTabs = ['User info', 'Security'];
    const deaderTabs = ['Store location'];
    const currentTabs = role === 'dealer' ? deaderTabs : [];
    return [...commonTabs, ...currentTabs];
  };

  const [activeTab, setActiveTab] = useState(0);
  return (
    <Container>
      <PageHeader>
        <h2>Profile</h2>
      </PageHeader>
      {Object.keys(user).length !== 0 && (
        <SearchBody>
          <SearchNavigation>
            {getCurrentUserTabs().map((tabName, index) => {
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
              {activeTab === 0 && <UserAvatar avatarUrl={user?.avatarUrl} />}
              <UserInfo>
                {activeTab === 0 && user && <UserInfoForm user={user} />}
                {activeTab === 1 && user && <SecurityForm />}
              </UserInfo>
              {activeTab === 2 && user.role === 'dealer' && <StoreLocation />}
            </StyledCard>
          </SearchContent>
        </SearchBody>
      )}
    </Container>
  );
};

export default Profile;
