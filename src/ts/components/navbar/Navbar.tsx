import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RoutesInterface } from '../../router';

interface PathProps {
  routes: RoutesInterface[];
}

const Navbar: FC<PathProps> = ({ routes }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {routes.map((r) => (
            <Link key={r.path} to={r.path}>
              {r.readableName}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
