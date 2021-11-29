import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Path {
  path: string;
}

interface PathProps {
  routes: Path[];
}

const Navbar: FC<PathProps> = ({ routes }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {routes.map((r) => (
            <Link key={r.path} to={r.path}>
              {r.path}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
