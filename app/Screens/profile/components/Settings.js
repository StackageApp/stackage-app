import React from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';

export default function Settings({ navigation }) {
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Image style={styles.profilePicture} source={require('./example-profile.jpeg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
});