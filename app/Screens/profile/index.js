import React from 'react';
// import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import Settings from './Settings';

const Stack = createStackNavigator();

export default function myStack() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1B6B6B',
          },
          headerTintColor: '#D9D9D9',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
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
    </NavigationContainer>
  )
}
