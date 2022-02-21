import React, { FC, useState } from 'react';
import { Button } from '@mui/material';
import ReactFileReader from 'react-file-reader';
import { UserAvatarImage } from '../../Styles';

interface UserAvatarProps {
  avatarUrl: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ avatarUrl }) => {
  const avatar = avatarUrl;
  const defaultAvatarUrl =
    'https://winnote.ru/wp-content/uploads/2016/01/1454222417_del_recent_avatar1.png';
  const isImg = avatar || defaultAvatarUrl;
  const [image, setImage] = useState<string>(isImg);

  const handleFiles = (files: { base64: React.SetStateAction<string> }) => {
    setImage(files.base64);
  };
  return (
    <div>
      <UserAvatarImage image={image} />
      <ReactFileReader base64 handleFiles={handleFiles}>
        <Button>Change profile image</Button>
      </ReactFileReader>
    </div>
  );
};

export default UserAvatar;
