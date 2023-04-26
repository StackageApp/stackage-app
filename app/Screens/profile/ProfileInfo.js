import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfileInfo() {
  const { profile } = useSelector((store) => store.profileInfo);

  return (
    <View style={styles.container}>
      <Image style={styles.profilePicture} source={require('./example-profile.jpeg')} />
      <Text style={styles.fullName}>{profile.name}</Text>
      <Text>@Architect_guy</Text>
      <Text>{`${profile.occupation} ${profile.location}`}</Text>
      <View>
        <Text>___ likes</Text>
        <Text>Connections</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // flex: 1,
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
