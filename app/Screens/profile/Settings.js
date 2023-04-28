import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Image, Text } from 'react-native';
// import { useRouter } from "expo-router";
import { useSelector } from 'react-redux';
import profileApi from '../../api';

export default function Settings() {
  // const router = useRouter();
  const uid = useSelector(store => store.currentUser.uid);
  const userInfo = useSelector(store => store.currentUser.userInfo);
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
        location
      }
    }
    profileApi.updateProfile(uid, newUserInfo);
  }

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.profilePicture} source={require('./example-profile.jpeg')} />
        <Text>Update profile picture</Text>
      </View>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} onChangeText={setOccupation} value={occupation} />
      <TextInput style={styles.input} onChangeText={setLocation} value={location} />
      <Button title="Save" onPress={handleSubmit} />
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