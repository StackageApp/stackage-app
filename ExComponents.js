import React, { useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import logo from './assets/stackageLogo2.png';
import styles from './styles';

export default function ExComponents() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPress = (e) => {
    e.preventDefault();
    // console.log('values here', username, password);
    setUsername('');
    setPassword('');
  };

  const handleInput = (input, field) => {
    // console.log(input, field);
    if (field === 'username') {
      setUsername(input);
    }

    if (field === 'password') {
      setPassword(input);
    }
  };

  return (
    <View style={localStyles.container}>
      {/* logo was imported from assets folder at the top */}
      <Image style={localStyles.logo} source={logo} />
      {/* Input field example */}
      <TextInput
        id="username"
        editable
        numberOfLines={1}
        maxLength={20}
        onChangeText={(input) => {
          handleInput(input, 'username');
        }}
        value={username}
        style={styles.loginField}
        placeholder="Username..."
        allowFontScaling
      />
      <TextInput
        id="password"
        editable
        numberOfLines={1}
        maxLength={20}
        onChangeText={(input) => {
          handleInput(input, 'password');
        }}
        value={password}
        style={styles.loginField}
        placeholder="Password..."
        allowFontScaling
      />

      {/* TouchableOpacity if for a button that gets lighter with you press it
      It is the same as Pressable, but is a build in react component */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* View can be treated like a div */}
      <View style={localStyles.bottomText}>
        <Text>Don&#39;t Have An Account?</Text>
        <TouchableHighlight>
          <Text
            id="createAccount"
            style={localStyles.clickHere}
            onPress={() => {
              // I've seen a lot of examples using functions directly in the even handlers, but
              // that probably comes down to preference
              console.log('my click here');
            }}
          >
            Click Here!
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 15,
  },
  clickHere: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  bottomText: {
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },
});
