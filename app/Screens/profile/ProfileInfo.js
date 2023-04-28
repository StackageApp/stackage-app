import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfileInfo({ navigation }) {
  const { profile } = useSelector((store) => store.profileInfo);

  return (
    <View style={styles.container}>
      <Pressable style={styles.settingsIcon} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={36} color="black" />
      </Pressable>
      <Image style={styles.profilePicture} source={require('./example-profile.jpeg')} />
      <View style={styles.information}>
        <Text style={styles.fullName}>{profile.name}</Text>
        <Text>@Architect_guy</Text>
        <Text>{`${profile.occupation} ${profile.location}`}</Text>
        <Text>___ likes</Text>
        <Text>Connections</Text>
      </View>
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
  information: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 3,
  },
  settingsIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    borderColor: 'blue',
    borderWidth: 3,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: 'blue',
    borderWidth: 3,
  },
  fullName: {
    fontWeight: 700,
  },
});
