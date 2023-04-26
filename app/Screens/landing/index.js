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

import { useSelector } from 'react-redux';

import logo from '../../../assets/stackageLogo2.png';
import styles from '../../../sharedStyles';
import CreateAccount from './CreateAccount';
import controllers from './controllers';

export default function LandingPage() {
  const userInfoName = useSelector((store) => store.currentUser.currentUser.userInfo.name);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleInput = (input, field) => {
    if (field === 'email') {
      setEmail(input);
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
          <Image style={localStyles.logo} source={logo} />
          <TextInput
            id="email"
            editable
            numberOfLines={1}
            maxLength={20}
            onChangeText={(input) => {
              handleInput(input, 'email');
            }}
            value={email}
            style={styles.loginField}
            placeholder="Email..."
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

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <View style={localStyles.bottomText}>
            <TouchableHighlight>
              <Text
                id="createAccount"
                style={localStyles.clickHere}
                onPress={() => {
                  Keyboard.dismiss();
                  showModal();
                }}
              >
                Create Account
              </Text>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text
                id="guestContinue"
                style={localStyles.guest}
                onPress={() => {
                  controllers.continueAsGuest();
                }}
              >
                Continue as Guest
              </Text>
            </TouchableHighlight>
            <Text>{userInfoName}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
