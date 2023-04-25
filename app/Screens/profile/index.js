import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import ProfileInfo from './ProfileInfo';
import ProfileFeed from './ProfileFeed';

export default function Profile() {
  return (
    <View>
      <Link href='/Settings' asChild>
        <Pressable>
          <Ionicons style={styles.settingsIcon} name="settings-outline" size={36} />
        </Pressable>
      </Link>
      <ProfileInfo />
      <ProfileFeed />
    </View>
  )
}

const styles = StyleSheet.create({
  settingsIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
});

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