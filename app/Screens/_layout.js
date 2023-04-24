import React from 'react';
import { Text } from 'react-native';

import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: () => <Text>Home</Text>,
        }}
      />
      <Tabs.Screen
        name="approvals"
        options={{
          title: 'Approvals',
          tabBarIcon: () => <Text>Approvals</Text>,
        }}
      />
    </>
  );
}
