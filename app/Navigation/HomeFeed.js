import React from 'react';

import { Provider } from 'react-redux';

import store from '../Redux/Store';
import Home from '../Screens/home';

function HomeFeed() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default HomeFeed;
