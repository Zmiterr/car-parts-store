import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// import GlobalStyle from 'theme/global';
import { store } from '../../store';
import AppRouter from '../appRouter';
import Header from '../header';
import { theme } from '../../theme/theme';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
