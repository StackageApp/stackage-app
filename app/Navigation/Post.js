import React from 'react';

import { Provider } from 'react-redux';

import store from '../Redux/Store';
import PostMessage from '../Screens/makepost';

function PostNewMessage() {
  return (
    <Provider store={store}>
      <PostMessage />
    </Provider>
  );
}

export default PostNewMessage;
