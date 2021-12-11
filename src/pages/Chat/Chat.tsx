import React, { FC } from 'react';
import { Card } from '@material-ui/core';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { ChatContainer, ChatList, ChatMessages } from './styles';

const Chat: FC = () => {
  return (
    <Container>
      <PageHeader>
        <h2>Chat</h2>
      </PageHeader>
      <ChatContainer>
        <ChatList />
        <ChatMessages>
          <Card>
            <p>No chat stated yet</p>
          </Card>
        </ChatMessages>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
