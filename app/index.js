import React from 'react';

import { useRouter } from 'expo-router';
import { Provider } from 'react-redux';

import store from './Redux/Store';
import LandingPage from './Screens/landing';

function App() {
  const navigation = useRouter();
  // return <Redirect href="./Navigation" />;

  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
