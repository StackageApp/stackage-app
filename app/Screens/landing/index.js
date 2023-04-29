import React, { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useRouter } from 'expo-router';

import logo from '../../../assets/updatedLogo.png';
import styles from '../../../sharedStyles';
import CreateAccount from './CreateAccount';
import controllers from './controllers';

export default function LandingPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const signIn = () => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (password.length < 6) {
      Alert.alert('Password too short', 'must be longer than 6 characters', [
        { text: 'OK', onPress: () => console.log('cancel'), style: 'cancel' },
      ]);
      return;
    }

    if (!email.match(regexEmail)) {
      Alert.alert('Must be a valid email', '', [
        { text: 'OK', onPress: () => console.log('cancel'), style: 'cancel' },
      ]);
      return;
    }

    controllers.signIn(email, password);
    router.push('../../Navigation/HomeFeed');
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
            secureTextEntry
          />
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={signIn}>
              Log In
            </Text>
          </View>

          <View style={localStyles.bottomText}>
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

            <Text
              style={localStyles.guest}
              onPress={() => {
                controllers.continueAsGuest();
                router.push('../../Navigation/HomeFeed');
              }}
            >
              Continue as Guest
            </Text>
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
    // height: 200,
    width: '70%',
  },
});
