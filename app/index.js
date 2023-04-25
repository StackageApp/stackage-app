import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Redirect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import sharedStyles from '../sharedStyles';
<<<<<<< HEAD
import LandingPage from './Screens/landing';
import Profile from './Screens/profile';

function WelcomeScreen() {
  const navigation = useRouter();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* <Text style={sharedStyles.Title}>Stackage App</Text>
        <LandingPage /> */}
        <Profile />
        <StatusBar style={styles.StatusçBar} />
      </View>
    </TouchableWithoutFeedback>
  );
=======

// import Home from './Screens/home';
// import LandingPage from './Screens/landing';

function WelcomeScreen() {
  const navigation = useRouter();
  return <Redirect href="./Navigation" />;
>>>>>>> dev
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
