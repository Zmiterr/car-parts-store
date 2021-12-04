import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// import GlobalStyle from 'theme/global';
import { store } from '../../store';
import AppRouter from '../App-router';
import Header from '../Header';
import { theme } from '../../theme/theme';
import Footer from '../Footer';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
