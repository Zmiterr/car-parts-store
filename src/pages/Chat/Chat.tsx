import React, { FC, useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { useDispatch } from 'react-redux';
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

const Chat: FC = () => {
  const [messageText, setMessageText] = useState<string>('');

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

  /* const urlify = (text: string) => {
    let string = sanitize(text);
    const urls = string.match(/((((ftp|https?):\/\/)|(w{3}\.))[-\w@:%_+.~#?,&/=]+)/g);
    if (urls) {
      urls.forEach((url) => {
        string = string.replace(url, `<a target="_blank" href="${url}">${url}</a>`);
      });
    }
    return string.replace('(', '<br/>(');
  }; */

  return (
    <Container>
      <PageHeader>
        <h2>Chat</h2>
      </PageHeader>
      <ChatContainer>
        <ChatList>
          {/* <ChatSearch /> */}
          <ChatRoom />
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
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
              alt=""
            />
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" />
            <button type="button" onClick={sendMessage}>
              Send
            </button>
          </InputArea>
        </Main>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
