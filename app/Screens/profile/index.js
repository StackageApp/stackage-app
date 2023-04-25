import React from 'react';
// import { StyleSheet, Pressable, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './components/Profile';
import Settings from './components/Settings';


const Stack = createNativeStackNavigator();

export default function myStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'My Profile',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  )
}
