import React from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

function WelcomeScreen() {
  const navigation = useRouter();
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
