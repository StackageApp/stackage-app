import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Redirect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import sharedStyles from '../sharedStyles';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StatusBar: {
    StatusBarStyle: 'auto',
  },
});

export default App;
