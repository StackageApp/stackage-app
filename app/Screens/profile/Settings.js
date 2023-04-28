import React, { useState } from 'react';
import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useSelector } from 'react-redux';

import sharedStyles from '../../../sharedStyles';
// import { useRouter } from "expo-router";
import { profileApi } from '../../api';

export default function Settings({ navigation }) {
  // const router = useRouter();
  const uid = useSelector((store) => store.currentUser.uid);
  const userInfo = useSelector((store) => store.currentUser.userInfo);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [occupation, setOccupation] = useState(userInfo.occupation);
  const [location, setLocation] = useState(userInfo.location);

  const handleSubmit = () => {
    const newUserInfo = {
      userInfo: {
        name,
        email,
        occupation,
        location,
      },
    };
    profileApi.updateProfile(uid, newUserInfo);
    navigation.navigate('Profile');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView style={styles.mainContainer} enabled behavior="padding">
        <View style={styles.mainContainer2}>
          <View style={styles.imgContainer}>
            <Image style={styles.profilePicture} source={userInfo.photoURL} />
            {/* <Text>Update profile picture</Text> */}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput style={styles.input} onChangeText={setName} value={name} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Occupation:</Text>
            <TextInput style={styles.input} onChangeText={setOccupation} value={occupation} />
          </View>
          <View style={[styles.inputContainer, { paddingBottom: 30 }]}>
            <Text style={styles.label}>Location:</Text>
            <TextInput style={styles.input} onChangeText={setLocation} value={location} />
          </View>
          {/* <Button title="Save" onPress={handleSubmit} /> */}
          <View style={[sharedStyles.button, { alignSelf: 'center' }]}>
            <Text
              style={sharedStyles.buttonText}
              onPress={() => {
                handleSubmit();
              }}
            >
              Save
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  mainContainer2: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  inputContainer: {
    flex: 0.2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imgContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  label: {
    fontSize: 20,
    paddingLeft: 50,
    fontWeight: 'bold',
    width: '100%',
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 20,
    fontSize: 18,
    paddingLeft: 22,
    width: '85%',
    // borderWidth: 1,
    padding: 10,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
