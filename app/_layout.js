import React from 'react';

import { Redirect, Slot, Stack } from 'expo-router';

export default Layout = function () {
  return (
    <Slot
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1B6B6B',
        },
        headerTintColor: '#D9D9D9',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
};
