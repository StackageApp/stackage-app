import React from 'react';

import { Provider } from 'react-redux';

import store from '../Redux/Store';
import MessagesMain from '../Screens/message/index';

function Messages() {
  return (
    <Provider store={store}>
      <MessagesMain />
    </Provider>
  );
}

export default Messages;
