import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './MessageScreens/ChatScreen';
import MessagesScreen from './MessageScreens/MessagesScreen';

const Stack = createStackNavigator();

function MessagesMain() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        initialRouteName="MessagesScreen"
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
          name="MessagesScreen"
          component={MessagesScreen}
          options={{ title: 'Messages' }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ route }) => ({ title: route.params.userName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MessagesMain;
