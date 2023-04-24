import React from 'react';
import { Text, View } from 'react-native';

import { Stack } from 'expo-router';

function HomePage() {
  return (
    <View>
      <Text>Home Page</Text>
      <Stack.Screen
        option={{
          title: 'Home',
        }}
      />
    </View>
  );
}

export default HomePage;
