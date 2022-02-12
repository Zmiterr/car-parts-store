import React, { FC } from 'react';
import { StyledMessage } from '../styles';

interface MessageProps {
  author: string;
  time: string;
  messageText: string;
}

const Message: FC<MessageProps> = ({ messageText, author, time }) => {
  return (
    <StyledMessage myMessage={author === 'Me'}>
      <div className="entete">
        <h2>{author}</h2>
        <h3>{time}, Today</h3>
      </div>
      <div className="triangle" />
      <div className="message">
        <span>{messageText}</span>
      </div>
    </StyledMessage>
  );
};

export default Message;
