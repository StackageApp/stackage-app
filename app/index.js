import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Redirect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import sharedStyles from '../sharedStyles';

// import Home from './Screens/home';
// import LandingPage from './Screens/landing';
// import ChatScreen from './Screens/message/ChatScreen';
// import Connections from './Screens/message/Connections';
// import MessagesScreen from './Screens/message/MessagesScreen';

function WelcomeScreen() {
  const navigation = useRouter();
  return <Redirect href="./Navigation" />;
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

export default WelcomeScreen;
