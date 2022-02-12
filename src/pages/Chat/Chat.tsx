import React, { FC } from 'react';

import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import {
  ChatContainer,
  ChatList,
  Main,
  ChatSearch,
  Messages,
  StyledMessage,
  InputArea,
} from './styles';
import ChatRoom from './ChatRoom/ChatRoom';

const Chat: FC = () => {
  return (
    <Container>
      <PageHeader>
        <h2>Chat</h2>
      </PageHeader>
      <ChatContainer>
        <ChatList>
          <ChatSearch />
          <ChatRoom />
        </ChatList>
        <Main>
          <Messages>
            <StyledMessage myMessage>
              <div className="entete">
                <h2>My message</h2>
                <h3>10:12AM, Today</h3>
              </div>
              <div className="triangle" />
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor.
              </div>
            </StyledMessage>
            <StyledMessage>
              <div className="entete">
                <h3>10:12AM, Today</h3>
                <h2>Customer</h2>
              </div>
              <div className="triangle" />
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor.
              </div>
            </StyledMessage>
            <StyledMessage>
              <div className="entete">
                <h3>10:12AM, Today</h3>
                <h2>Customer</h2>
              </div>
              <div className="triangle" />
              <div className="message">OK</div>
            </StyledMessage>
          </Messages>
          <InputArea>
            <textarea placeholder="Type your message" />
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
              alt=""
            />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
            <button type="button">Send</button>
          </InputArea>
        </Main>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
