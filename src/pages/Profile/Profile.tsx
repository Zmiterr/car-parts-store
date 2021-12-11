import React, { FC } from 'react';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';

const Profile: FC = () => {
  return (
    <Container>
      <PageHeader>
        <h2>Profile</h2>
      </PageHeader>
    </Container>
  );
};

export default Profile;
