import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfileInfo from './ProfileInfo';
import ProfileFeed from './ProfileFeed';

export default function Profile({ navigation }) {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Ionicons style={styles.settingsIcon} name="settings-outline" size="30" />
      </Pressable>
      <ProfileInfo />
      <ProfileFeed />
    </View>
  )
}

const styles = StyleSheet.create({
  settingsIcon: {
    float: 'right',
  },
});
