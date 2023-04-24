import React from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import LandingPage from './LandingPage';
import styles from './styles';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.Title}>Stackage App</Text>
        <LandingPage />
        <StatusBar style={styles.StatusBar} />
      </View>
    </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   Title: {
//     fontSize: 20
//   },
//   StatusBar: {
//     StatusBarStyle: 'auto',
//   },
// });
