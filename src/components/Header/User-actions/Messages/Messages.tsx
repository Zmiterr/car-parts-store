import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../../../router';

const Messages: FC = () => {
  return (
    <Link to={RouteNames.CHAT}>
      <div>
        <FontAwesomeIcon icon={faMailBulk} />
      </div>
    </Link>
  );
};

export default Messages;
