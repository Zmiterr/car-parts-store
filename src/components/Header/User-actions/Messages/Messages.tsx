import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Messages: FC = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faMailBulk} />
    </div>
  );
};

export default Messages;
