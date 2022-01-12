import React, { FC } from 'react';
import Navbar from './Navbar';
import { ContainerPadding, StyledHeader, UserActions } from './Styles';
import NavbarLogo from './NavbarLogo';
import Authorization from './UserActions/Authorization';
import Messages from './UserActions/Messages';
import Cart from './UserActions/Cart';
import UserIcon from './UserActions/Avatar';
import { getAvailableRoutes } from '../../router/routes';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Header: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const userType = useTypedSelector((state) => state.auth.role);
  const routes = getAvailableRoutes(isAuth, userType);
  return (
    <StyledHeader>
      <ContainerPadding>
        <NavbarLogo />
        {
          // <HasPermisions role={'customer'}><Cart /></HasPermisions>
        }
        <Navbar routes={routes} />
        <UserActions>
          {isAuth && <Messages />}
          {userType === 'customer' && <Cart />}
          {isAuth && <UserIcon />}
          <Authorization />
        </UserActions>
      </ContainerPadding>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
