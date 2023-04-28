import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ProfileFeed from './ProfileFeed';
// import { Link, useRouter, usePathname } from "expo-router";
import ProfileInfo from './ProfileInfo';

export default function Profile({ navigation }) {
  // const router = useRouter();
  // console.log(usePathname());
  return (
    <View style={styles.container}>
      {/* <Link href='/Settings' asChild> */}
      {/* {({ hovered, pressed }) => ( */}
      {/* <Ionicons style={styles.settingsIcon} name="settings-outline" size={36} /> */}
      {/* )} */}
      {/* </Link> */}
      <ProfileInfo navigation={navigation} />
      <ProfileFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    alignItems: 'end',
    borderColor: 'blue',
    borderWidth: 3,
  },
});
