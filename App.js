import React from 'react';
import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import ExComponents from './ExComponents';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.landingPage}>
      <Text style={styles.Title}>Stackage App</Text>
      <ExComponents />
      <StatusBar style={styles.StatusBar} />
    </View>
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
