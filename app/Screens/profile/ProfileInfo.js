import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function ProfileInfo({ navigation }) {
  const userInfo = useSelector((store) => store.currentUser.userInfo);
  // const picture = userInfo.profileUrl

  return (
    <View style={styles.container}>
      <View style={styles.settingsIcon}>
        <Ionicons
          name="settings-outline"
          size={36}
          color="black"
          onPress={() => navigation.navigate('Settings')}
          style={{ padding: 10 }}
        />
      </View>
      <Image style={styles.profilePicture} src='https://i.imgur.com/O9IwNcx.png' />
      <View style={styles.information}>
        <Text style={styles.fullName}>{userInfo.name}</Text>
        <Text style={{ fontSize: 20, paddingBottom: 15 }}>{userInfo.email}</Text>
        <Text>{`${userInfo.occupation} - ${userInfo.location}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  information: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  },
  settingsIcon: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  fullName: {
    fontSize: 25,
    fontWeight: 700,
  },
});
