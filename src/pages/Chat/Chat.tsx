import React, { FC } from 'react';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { ChatContainer, ChatList, Main, ChatSearch, Messages, InputArea } from './styles';
import ChatRoom from './ChatRoom/ChatRoom';
import Message from './Message/Message';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Chat: FC = () => {
  const messages = useTypedSelector((state) => state.messages.messages);
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
            {messages.map((message) => (
              <Message
                key={message.time + message.author}
                author={message.author}
                time={message.time}
                messageText={message.messageText}
              />
            ))}
          </Messages>
          <InputArea>
            <textarea placeholder="Type your message" maxLength={10000} />
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
