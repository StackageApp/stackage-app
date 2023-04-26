import React from 'react';

import { Provider } from 'react-redux';

import store from '../Redux/Store';
import Approvals from '../Screens/approvals';

function ApprovalsMain() {
  return (
    <Provider store={store}>
      <Approvals />
    </Provider>
  );
}

export default ApprovalsMain;
