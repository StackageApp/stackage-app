import React from 'react';
import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // title: 'My Profile',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Settings"
        options={{
          title: 'Settings',
        }}
      />
    </Stack>
  );
}

// export default function myStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Profile"
//         options={{
//           // title: 'My Profile',
//           headerShown: false
//         }}
//       />
//       <Stack.Screen
//         name="Settings"
//         options={{
//           title: 'Settings',
//           gestureEnabled: false,
//         }}
//       />
//     </Stack.Navigator>
//   )
// }
