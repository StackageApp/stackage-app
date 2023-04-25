import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './components/Profile';
import Settings from './components/Settings';

const Stack = createNativeStackNavigator();

export default function myStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Profile"
        component={Profile}
        options={{
          title: 'My Profile',
          headerShown: false
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
