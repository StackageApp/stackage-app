import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileInfo() {
  return (
    <View>
      <Text>Posts</Text>
      <Text>Saved</Text>
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
