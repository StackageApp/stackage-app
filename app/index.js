import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Redirect, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import sharedStyles from '../sharedStyles';
import HomePage from './Screens/home';
import LandingPage from './Screens/landing';

function Index() {
  return <Redirect href="/Screens/home" />;
}

// function WelcomeScreen() {
//   const navigation = useRouter();
//   return (
//     <>
//       <Stack.Screen
//         options={{
//           title: 'Welcome',
//         }}
//       />
//       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         <View style={styles.container}>
//           <Text style={sharedStyles.Title}>Stackage App</Text>
//           <LandingPage />
//           <StatusBar style={styles.StatusBar} />
//         </View>
//       </TouchableWithoutFeedback>
//     </>
//   );
// }

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

export default Index;
