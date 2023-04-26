import React from 'react';
import { StyleSheet, TextInput, Button, View, Image, Text } from 'react-native';
// import { useRouter } from "expo-router";

export default function Settings() {
  // const router = useRouter();
  const [name, setName] = React.useState('Current Name');
  const [username, setUsername] = React.useState('Username');
  const [about, setAbout] = React.useState('About');
  const [occupation, setOccupation] = React.useState('Occupation');

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.profilePicture} source={require('./example-profile.jpeg')} />
        <Text>Update profile picture</Text>
      </View>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <TextInput style={styles.input} onChangeText={setUsername} value={username} />
      <TextInput style={styles.input} onChangeText={setAbout} value={about} />
      <TextInput style={styles.input} onChangeText={setOccupation} value={occupation} />
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