import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';

export default function ProfileInfo() {
  const userInfo = useSelector((store) => store.currentUser.userInfo);
  // const picture = userInfo.profileUrl

  return (
    <View style={styles.container}>
      <Image style={styles.profilePicture} src={userInfo.photoURL} />
      <Text style={styles.fullName}>{userInfo.name}</Text>
      <Text>{userInfo.email}</Text>
      <Text>{`${userInfo.occupation} - ${userInfo.location}`}</Text>
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
