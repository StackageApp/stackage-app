import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';

export default function ProfileInfo() {
  const userInfo = useSelector(store => store.currentUser.userInfo);
  // const picture = userInfo.profileUrl

  return (
    <View style={styles.container}>
      <Image style={styles.profilePicture} src={userInfo.photoURL} />
      <Text style={styles.fullName}>{userInfo.name}</Text>
      <Text>{userInfo.email}</Text>
      <Text>{`${userInfo.occupation} - ${userInfo.location}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  fullName: {
    fontWeight: 700,
  },
});
