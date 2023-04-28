import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Image, Text } from 'react-native';
// import { useRouter } from "expo-router";
import { useSelector } from 'react-redux';
import { profileApi } from '../../api';

export default function Settings({ navigation }) {
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
    navigation.navigate('Profile')
  }

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.profilePicture} source={userInfo.profileUrl} />
        {/* <Text>Update profile picture</Text> */}
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <Text style={styles.label}>Occupation</Text>
      <TextInput style={styles.input} onChangeText={setOccupation} value={occupation} />
      <Text style={styles.label}>Location</Text>
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
  label: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 25,
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});