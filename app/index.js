import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Redirect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import sharedStyles from '../sharedStyles';

function App() {
  const navigation = useRouter();
  return (
    <View style={styles.container}>
      <ExComponents />
    </View>
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
