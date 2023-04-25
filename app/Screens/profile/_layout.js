import React from 'react';
import { Stack } from 'expo-router';

export default function myStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        options={{
          // title: 'My Profile',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Settings"
        options={{
          title: 'Settings',
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  )
}
