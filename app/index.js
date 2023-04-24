import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

function WelcomeScreen() {
  const navigation = useRouter();
  return (
    <View style={styles.container}>
      <Text>Stackage App</Text>
      <Text>Other Text</Text>
      <StatusBar style={styles.StatusBar} />
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

export default WelcomeScreen;
