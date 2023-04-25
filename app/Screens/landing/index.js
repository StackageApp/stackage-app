import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Link } from 'expo-router';

import logo from '../../../assets/stackageLogo2.png';
import styles from '../../../sharedStyles';
import CreateAccount from './CreateAccount';

export default function ExComponents() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  const handleInput = (input, field) => {
    if (field === 'username') {
      setUsername(input);
    }

    if (field === 'password') {
      setPassword(input);
    }
  };

  const showModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <KeyboardAvoidingView enabled={!modalVisible} style={localStyles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={localStyles.container}>
          <CreateAccount visible={modalVisible} showModal={showModal} />
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
            enablesReturnKeyAutomatically
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
            enablesReturnKeyAutomatically
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
            <Link href="../Navigation">Click here!</Link>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7ECDE',
    width: '100%',
    gap: 20,
  },

  clickHere: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  guest: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  bottomText: {
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    height: 150,
    width: 150,
  },
});
