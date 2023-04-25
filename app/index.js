import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import sharedStyles from '../sharedStyles';
import LandingPage from './Screens/landing';
import ChatScreen from './Screens/message/ChatScreen';
import Connections from './Screens/message/Connections';
import MessagesScreen from './Screens/message/MessagesScreen';

function WelcomeScreen() {
  const navigation = useRouter();
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <Text style={sharedStyles.Title}>Stackage App</Text>
    //     <LandingPage />
    //     <StatusBar style={styles.StatusçBar} />
    //   </View>
    // </TouchableWithoutFeedback>
    <ChatScreen />
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

export default WelcomeScreen;
