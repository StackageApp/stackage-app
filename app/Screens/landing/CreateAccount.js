import React, { useState } from 'react';
import {
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

import sharedStyles from '../../../sharedStyles';
import controllers from './controllers';

export default function CreateAccount({ visible, showModal }) {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    // showModal();
    setname('');
    setPassword('');
    setEmail('');
    setOccupation('');
    setConfirmPassword('');
    setLocation('');
  };

  const createNewUser = () => {
    // setname('');
    // setPassword('');
    // setEmail('');
    // setOccupation('');
    // setConfirmPassword('');
    // setLocation('');
    // setSubmitted(!submitted);

    controllers.createNewUser(name, email, location, occupation, password);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Modal animationType="slide" transparent visible={visible} onRequestClose={showModal}>
          {submitted ? (
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
                    <Text style={localStyles.field}>name</Text>
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
                  <TouchableOpacity style={sharedStyles.button} onPress={createNewUser}>
                    <Text style={sharedStyles.buttonText} onPress={createNewUser}>
                      Create Account
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={localStyles.tapCancel}
                  onPress={() => {
                    Keyboard.dismiss();
                    resetValues();
                    // showModal();
                  }}
                >
                  <Text style={localStyles.cancel}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          ) : (
            <View style={localStyles.modalView}>
              <Text style={localStyles.confirmationText}>
                Your account has been created. Redirecting to home page shortly.
              </Text>
              <TouchableOpacity
                style={localStyles.tapCancel}
                onPress={() => {
                  Keyboard.dismiss();
                  resetValues();
                  setSubmitted(!submitted);
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
