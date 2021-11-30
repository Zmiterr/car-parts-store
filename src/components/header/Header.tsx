import React, { FC } from 'react';
import Navbar from '../navbar';
import { privateRoutes } from '../../router';

const Header: FC = () => {
  const routes = [...privateRoutes];
  return (
    <header>
      <Navbar routes={routes} />
    </header>
  );
};

Header.propTypes = {};

export default Header;
