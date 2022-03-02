import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/global/global';

import AppRouter from '../AppRouter';
import Header from '../Header';
import { theme } from '../../theme/theme';
import Footer from '../Footer';
import { StyledMain } from '../../shared/styled/containers/Main';
import { AuthActions } from '../../store/auth/authActions';
import useNotifier from '../../hooks/useNotifier';

function App(): JSX.Element {
  useNotifier();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthActions.checkAuth());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <StyledMain>
            <AppRouter />
          </StyledMain>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
