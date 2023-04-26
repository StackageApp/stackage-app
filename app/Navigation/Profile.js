import React from 'react';

import { Provider } from 'react-redux';

import store from '../Redux/Store';
import Profile from '../Screens/profile';

function YourProfile() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}

export default YourProfile;
