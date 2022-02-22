import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import App from './components/App';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
