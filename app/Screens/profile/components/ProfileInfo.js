import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileInfo() {
  return (
    <View>
      <Image style={styles.profilePicture} source={require('./example-profile.jpeg')} />
      <Text style={styles.fullName}>Full name</Text>
      <Text>@Architect_guy</Text>
      <Text>This is the about sections</Text>
      <Text>___ likes</Text>
      <Text>Connections</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  fullName: {
    fontWeight: 700,
  },
});
