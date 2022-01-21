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
import { UserAvatar, UserInfo } from './Styles';
import SecurityForm from './Security/SecurityForm';
import UserInfoForm from './UserInfo/UserInfoForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getUser } from '../../store/user/userActions';

const Profile: FC = () => {
  const userId = useTypedSelector((state) => state.auth.user.userData[0].id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  const user = useTypedSelector((state) => (state.user.user ? state.user.user[0] : []));
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
            <UserInfo>
              {/* //TODO fix ts errror */}
              {activeTab === 0 ? user && <UserInfoForm user={user} /> : <SecurityForm />}
            </UserInfo>
          </StyledCard>
        </SearchContent>
      </SearchBody>
    </Container>
  );
};

export default Profile;
