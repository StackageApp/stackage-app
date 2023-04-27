import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Link, useRouter, usePathname } from "expo-router";
import ProfileInfo from './ProfileInfo';
import ProfileFeed from './ProfileFeed';

export default function Profile({ navigation }) {
  // const router = useRouter();
  // console.log(usePathname());
  return (
    <View>
        <Pressable
          onPress={() => navigation.navigate('Settings')}
          >
            <Text>Settings</Text>
        </Pressable>
          {/* <Link href='/Settings' asChild> */}
          {/* {({ hovered, pressed }) => ( */}
            {/* <Ionicons style={styles.settingsIcon} name="settings-outline" size={36} /> */}
          {/* )} */}
      {/* </Link> */}
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