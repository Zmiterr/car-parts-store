import React, { FC } from 'react';
import Linkify from 'react-linkify';
import { StyledMessage } from '../styles';

interface MessageProps {
  author: string;
  time: number;
  messageText: string;
}

const Message: FC<MessageProps> = ({ messageText, author, time }) => {
  const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(time);
  const formatedTime = new Date(time).toLocaleTimeString();
  // const day = 'Today';
  return (
    <StyledMessage myMessage={author === 'Me'}>
      <div className="entete">
        <h2>{author}</h2>
        <h3>
          {formatedTime}, {day}
        </h3>
      </div>
      <div className="triangle" />
      <div className="message">
        <span>
          <Linkify>{messageText}</Linkify>
        </span>
      </div>
    </StyledMessage>
  );
};

export default Message;
