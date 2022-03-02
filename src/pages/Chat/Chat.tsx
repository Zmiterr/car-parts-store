import React, { FC, useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { ChatContainer, ChatList, Main, Messages, InputArea } from './styles';
import ChatRoom from './ChatRoom/ChatRoom';
import Message from './Message/Message';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { appendMessage } from '../../store/messages/messagesActions';

const PORT = 7000;
const SERVER = 'localhost';
const socket = socketIOClient(`http://${SERVER}:${PORT}`);

const mockChatList = [
  {
    chatId: 1,
    chatName: 'Nick Usaty',
    chatImageUl:
      'https://userstock.io/data/wp-content/uploads/2017/09/lesly-b-juarez-276953-300x300.jpg',
  },
  {
    chatId: 2,
    chatName: 'Sasha Garash',
    chatImageUl:
      'https://userstock.io/data/wp-content/uploads/2017/07/pexels-photo-26939-1-300x300.jpg',
  },
];

const Chat: FC = () => {
  const [messageText, setMessageText] = useState<string>('');
  const [activeTabId, setActiveTabId] = useState<number>(1);

  const scrollRef = useRef<HTMLElement>();

  useEffect(() => {
    socket.emit('online');
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView(false);
  }, [messageText]);
  const dispatch = useDispatch();

  socket.on('newMessage', (data) => {
    console.log('received');
    dispatch(appendMessage(data));
  });
  const messages = useTypedSelector((state) => state.messages.messages);

  const sendMessage = () => {
    if (messageText === '') return;
    const messageBody = { id: Date.now(), author: 'Me', time: Date.now(), messageText };
    dispatch(appendMessage(messageBody));
    socket.emit('newMessage', messageBody);
    setMessageText('');
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };
  const xxsProtect = (receivedString: string) => {
    return String(receivedString)
      .replace(/&(?!\w+;)/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };

  const { id } = useParams();
  const addressId = Number(id);
  return (
    <Container>
      <PageHeader>
        <h2>Chat</h2>
      </PageHeader>
      <ChatContainer>
        <ChatList>
          {/* <ChatSearch /> */}
          {mockChatList.map((chat) => (
            <ChatRoom
              key={chat.chatName}
              chatName={chat.chatName}
              chatImageUrl={chat.chatImageUl}
              id={chat.chatId}
              setActiveTabId={setActiveTabId}
              addressId={addressId}
            />
          ))}
        </ChatList>
        <Main>
          <Messages>
            {messages.map((message) => (
              <Message
                key={message.id}
                author={message.author}
                time={message.time}
                messageText={xxsProtect(message.messageText)}
              />
            ))}
            <div style={{ float: 'left', clear: 'both' }} ref={scrollRef} />
          </Messages>
          <InputArea>
            <textarea
              placeholder="Type your message"
              maxLength={10000}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={handleKey}
            />
            <div className="controls">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
                alt=""
              />
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
              <button type="button" onClick={sendMessage}>
                Send
              </button>
            </div>
          </InputArea>
        </Main>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
