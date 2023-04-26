import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './MessageScreens/ChatScreen';
import Connections from './MessageScreens/Connections';
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
          options={({ navigation }) => ({
            title: 'Messages',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Connections');
                }}
                style={{ marginRight: 10 }}
              >
                <Text style={{ color: '#FFFFFF', fontSize: 16 }}>connections</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ route }) => ({ title: route.params.userName })}
        />
        <Stack.Screen
          name="Connections"
          component={Connections}
          options={({ route }) => ({ title: 'connections' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MessagesMain;
