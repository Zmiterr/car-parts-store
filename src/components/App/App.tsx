import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/global/global';
import { store } from '../../store';
import AppRouter from '../App-router';
import Header from '../Header';
import { theme } from '../../theme/theme';
import Footer from '../Footer';
import { StyledMain } from '../../shared/styled/containers/Main';

function App(): JSX.Element {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
