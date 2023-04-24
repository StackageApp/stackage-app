import React from 'react';
import { Text, View } from 'react-native';

import { Stack } from 'expo-router';

function ApprovalsPage() {
  return (
    <View>
      <Text>Approvals</Text>
      <Stack.Screen
        option={{
          title: 'Approvals',
        }}
      />
    </View>
  );
}

export default ApprovalsPage;
