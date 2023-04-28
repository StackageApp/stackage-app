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
    <View>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={30} color="black" />
      </Pressable>
      {/* <Link href='/Settings' asChild> */}
      {/* {({ hovered, pressed }) => ( */}
      {/* <Ionicons style={styles.settingsIcon} name="settings-outline" size={36} /> */}
      {/* )} */}
      {/* </Link> */}
      <ProfileInfo />
      <ProfileFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  settingsIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
});
