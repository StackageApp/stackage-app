import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function Settings({ navigation }) {
  const [name, onChangeName] = React.useState('Current Name');
  const [username, onChangeUsername] = React.useState('Current Name');

  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <TextInput style={styles.input} onChangeValue={onChangeName} value={name} />
      <TextInput style={styles.input} onChangeValue={onChangeUsername} value={username} />
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