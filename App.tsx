import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { fetchSuggestionsPending } from './src/store/actions/index';

import App from './src';

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
