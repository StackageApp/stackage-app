import React from 'react';
import { StyleSheet, Link, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfileInfo from './ProfileInfo';
import ProfileFeed from './ProfileFeed';

export default function Profile() {
  return (
    <View>
      {/* <Pressable onPress={() => navigation.navigate('Settings')}>
        <Ionicons style={styles.settingsIcon} name="settings-outline" size={36} />
      </Pressable> */}
      {/* <Link href='/Settings'>
        <Ionicons style={styles.settingsIcon} name="settings-outline" size={36} />
      </Link>
      <ProfileInfo />
      <ProfileFeed /> */}
      <Text>Profile Page</Text>
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
