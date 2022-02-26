import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ChatListItem } from '../styles';

interface ChatRoomProps {
  id: number;
  chatName: string;
  chatImageUrl: string;
  setActiveTabId: (id: number) => void;
  addressId: number;
}

const ChatRoom: FC<ChatRoomProps> = ({ addressId, chatName, chatImageUrl, id, setActiveTabId }) => {
  const handleClick = () => {
    setActiveTabId(id);
  };
  return (
    <Link key={id} to={`chat/${id}`} onClick={handleClick}>
      <ChatListItem isActiveTab={addressId === id}>
        <img src={chatImageUrl} alt={chatName} />
        <div>
          <h2>{chatName}</h2>
        </div>
      </ChatListItem>
    </Link>
  );
};

export default ChatRoom;
