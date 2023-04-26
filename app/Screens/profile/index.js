import React from 'react';
// import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, View, Pressable, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Link, useRouter, usePathname } from "expo-router";
// import ProfileInfo from './ProfileInfo';
// import ProfileFeed from './ProfileFeed';
import Profile from './Profile';
import Settings from './Settings';

const Stack = createStackNavigator();

export default function myStack() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        initialRouteName="Profile"
      >
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'My Profile',
            headerShown: false
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

// export default function Profile() {
//   const router = useRouter();
//   console.log(usePathname());
//   return (
//     <View>
//       <Link href='/Settings' asChild>
//         <Pressable
//           onPress={() => {
//             console.log('press');
//             router.push('/Settings')
//           }}
//         >
//           {/* {({ hovered, pressed }) => ( */}
//             {/* <Ionicons style={styles.settingsIcon} name="settings-outline" size={36} /> */}
//             <Text>Press</Text>
//           {/* )} */}
//         </Pressable>
//       </Link>
//       <ProfileInfo />
//       <ProfileFeed />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   settingsIcon: {
//     position: 'absolute',
//     right: 0,
//     padding: 10,
//   },
// });
