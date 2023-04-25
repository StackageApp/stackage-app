import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileInfo() {
  return (
    <View style={styles.container}>
      <Image style={styles.profilePicture} source={require('./example-profile.jpeg')} />
      <Text style={styles.fullName}>Full Name</Text>
      <Text>@Architect_guy</Text>
      <Text>This is the about sections</Text>
      <Text>___ likes</Text>
      <Text>Connections</Text>
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
