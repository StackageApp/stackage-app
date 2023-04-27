import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Link, useRouter } from 'expo-router';

import sharedStyles from '../../../sharedStyles';
import controllers from './controllers';

export default function CreateAccount({ visible, showModal }) {
  const router = useRouter();
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [location, setLocation] = useState('');
  const [notSubmitted, setNotSubmitted] = useState(true);

  const handleInput = (input, field) => {
    if (field === 'name') {
      setname(input);
    }

    if (field === 'password') {
      setPassword(input);
    }

    if (field === 'confirmPass') {
      setConfirmPassword(input);
    }

    if (field === 'email') {
      setEmail(input);
    }

    if (field === 'occupation') {
      setOccupation(input);
    }

    if (field === 'location') {
      setLocation(input);
    }
  };

  const resetValues = () => {
    showModal();
    setname('');
    setPassword('');
    setEmail('');
    setOccupation('');
    setConfirmPassword('');
    setLocation('');
  };

  const createNewUser = () => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (password.length < 6) {
      Alert.alert('Password too short', 'must be longer than 6 characters', [
        { text: 'OK', onPress: () => console.log('cancel'), style: 'cancel' },
      ]);
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', '', [
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
    controllers.createNewUser(name, email, location, occupation, password);

    setname('');
    setPassword('');
    setEmail('');
    setOccupation('');
    setConfirmPassword('');
    setLocation('');
    setNotSubmitted(!notSubmitted);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Modal animationType="slide" transparent visible={visible} onRequestClose={showModal}>
          {notSubmitted ? (
            <KeyboardAvoidingView
              enabled
              style={localStyles.container}
              behavior="padding"
              keyboardVerticalOffset={-10}
            >
              <View
                style={localStyles.modalView}
                onPress={() => {
                  Keyboard.dismiss();
                }}
              >
                <View>
                  <Text style={localStyles.signUp}>Sign Up</Text>
                  <View style={localStyles.fieldLabel}>
                    <Text style={localStyles.field}>Name</Text>
                    <Text style={localStyles.star}>*</Text>
                  </View>
                  <TextInput
                    id="name"
                    editable
                    numberOfLines={1}
                    maxLength={20}
                    onChangeText={(input) => {
                      handleInput(input, 'name');
                    }}
                    value={name}
                    style={sharedStyles.signUpField}
                    allowFontScaling
                  />
                </View>
                <View>
                  <View style={localStyles.fieldLabel}>
                    <Text style={localStyles.field}>Password</Text>
                    <Text style={localStyles.star}>*</Text>
                  </View>
                  <TextInput
                    id="password"
                    editable
                    numberOfLines={1}
                    maxLength={20}
                    onChangeText={(input) => {
                      handleInput(input, 'password');
                    }}
                    value={password}
                    style={sharedStyles.signUpField}
                    allowFontScaling
                  />
                </View>
                <View>
                  <View style={localStyles.fieldLabel}>
                    <Text style={localStyles.field}>Confirm Password</Text>
                    <Text style={localStyles.star}>*</Text>
                  </View>
                  <TextInput
                    id="confirmPass"
                    editable
                    numberOfLines={1}
                    maxLength={20}
                    onChangeText={(input) => {
                      handleInput(input, 'confirmPass');
                    }}
                    value={confirmPassword}
                    style={sharedStyles.signUpField}
                    allowFontScaling
                  />
                </View>
                <View>
                  <View style={localStyles.fieldLabel}>
                    <Text style={localStyles.field}>Email</Text>
                    <Text style={localStyles.star}>*</Text>
                  </View>
                  <TextInput
                    id="email"
                    editable
                    numberOfLines={1}
                    maxLength={20}
                    onChangeText={(input) => {
                      handleInput(input, 'email');
                    }}
                    value={email}
                    style={sharedStyles.signUpField}
                    allowFontScaling
                  />
                </View>
                <View>
                  <View style={localStyles.fieldLabel}>
                    <Text style={localStyles.field}>location</Text>
                    <Text style={localStyles.star}>*</Text>
                  </View>
                  <TextInput
                    id="location"
                    editable
                    numberOfLines={1}
                    maxLength={20}
                    onChangeText={(input) => {
                      handleInput(input, 'location');
                    }}
                    value={location}
                    style={sharedStyles.signUpField}
                    allowFontScaling
                  />
                </View>
                <View>
                  <View style={localStyles.fieldLabel}>
                    <Text style={localStyles.field}>Occupation</Text>
                    <Text style={localStyles.star}>*</Text>
                  </View>
                  <TextInput
                    id="occupation"
                    editable
                    numberOfLines={1}
                    maxLength={20}
                    onChangeText={(input) => {
                      handleInput(input, 'occupation');
                    }}
                    value={occupation}
                    style={sharedStyles.signUpField}
                    allowFontScaling
                  />
                </View>
                <View style={{ margin: 10 }}>
                  {/* <TouchableOpacity style={sharedStyles.button}> */}
                  <View style={sharedStyles.button}>
                    <Text
                      style={sharedStyles.buttonText}
                      onPress={() => {
                        createNewUser();
                      }}
                    >
                      Create Account
                    </Text>
                    {/* </TouchableOpacity> */}
                  </View>
                </View>
                <TouchableOpacity
                  style={localStyles.tapCancel}
                  onPress={() => {
                    Keyboard.dismiss();
                    resetValues();
                    showModal();
                  }}
                >
                  <Text style={localStyles.cancel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          ) : (
            <View style={localStyles.modalView}>
              <Text style={localStyles.confirmationText}>
                Your account has been successfully created.
              </Text>
              <View style={sharedStyles.button}>
                <Link href="../../Navigation/HomeFeed">
                  <Text style={sharedStyles.buttonText}>Continue</Text>
                </Link>
              </View>
              <TouchableOpacity
                style={localStyles.tapCancel}
                onPress={() => {
                  Keyboard.dismiss();
                  resetValues();
                  setNotSubmitted(!notSubmitted);
                }}
              >
                <Text style={localStyles.cancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const localStyles = StyleSheet.create({
  signUp: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  field: {
    fontSize: 20,
  },
  star: {
    color: 'red',
  },
  confirmationText: {
    width: '80%',
    textAlign: 'center',
    fontSize: 30,
  },
  tapCancel: {
    backgroundColor: 'white',
  },
  cancel: {
    textDecorationLine: 'underline',
  },
  modalView: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '80%',
    width: '85%',
    gap: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 100,
  },
  fieldLabel: {
    flex: 0,
    flexDirection: 'row',
    paddingLeft: 10,
  },
});
