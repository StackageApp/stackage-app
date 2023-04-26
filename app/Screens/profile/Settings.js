import React from 'react';
import { StyleSheet, TextInput, Button, View, Image, Text } from 'react-native';
// import { useRouter } from "expo-router";

export default function Settings() {
  // const router = useRouter();
  const [name, onChangeName] = React.useState('Current Name');
  const [username, onChangeUsername] = React.useState('Username');
  const [about, onChangeAbout] = React.useState('About');
  const [occupation, onChangeOccupation] = React.useState('Occupation');

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.profilePicture} source={require('./example-profile.jpeg')} />
        <Text>Update profile picture</Text>
      </View>
      <TextInput style={styles.input} onChangeValue={onChangeName} value={name} />
      <TextInput style={styles.input} onChangeValue={onChangeUsername} value={username} />
      <TextInput style={styles.input} onChangeValue={onChangeAbout} value={about} />
      <TextInput style={styles.input} onChangeValue={onChangeOccupation} value={occupation} />
      <Button title="Save" onPress={() => console.log('saved')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});