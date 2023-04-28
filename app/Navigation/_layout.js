import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Badge } from 'react-native-elements';

export default function () {
  const [messageCount, setMessageCount] = useState(1);

  const handleBadgePress = () => {
    setMessageCount(0);
  };
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1B6B6B',
        },
        headerTintColor: '#D9D9D9',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarInactiveTintColor: '#D9D9D9',
        tabBarActiveTintColor: '#9ED2C6',
        tabBarStyle: {
          backgroundColor: '#1B6B6B',
        },
      }}
    >
      <Tabs.Screen
        name="HomeFeed"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Approvals"
        options={{
          title: 'Approvals',
          tabBarIcon: ({ color }) => (
            <Ionicons name="checkmark-circle-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Post"
        options={{
          title: 'Compose',
          tabBarIcon: ({ color }) => <Ionicons name="add" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TouchableOpacity onPress={handleBadgePress}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="chatbox-ellipses-outline" size={24} color={color} />
                {messageCount > 0 && (
                  <Badge
                    value={messageCount}
                    status="error"
                    badgeStyle={{ backgroundColor: 'red', marginLeft: 0 }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person-sharp" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
