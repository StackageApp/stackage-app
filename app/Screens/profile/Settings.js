import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function Settings() {
  const [name, onChangeName] = React.useState('Current Name');
  const [username, onChangeUsername] = React.useState('Username');
  const [about, onChangeAbout] = React.useState('About');
  const [occupation, onChangeOccupation] = React.useState('Occupation');

  return (
    <View>
      <TextInput style={styles.input} onChangeValue={onChangeName} value={name} />
      <TextInput style={styles.input} onChangeValue={onChangeUsername} value={username} />
      <TextInput style={styles.input} onChangeValue={onChangeAbout} value={about} />
      <TextInput style={styles.input} onChangeValue={onChangeOccupation} value={occupation} />
      <Button title="Save" onPress={() => console.log('submit')} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  }
});