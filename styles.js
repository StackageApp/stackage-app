import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingPage: {
    flex: 3,
    gap: 20,
    height: '100%',
    backgroundColor: '#f7ecde',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 20,
  },
  StatusBar: {
    StatusBarStyle: 'auto',
  },
  button: {
    backgroundColor: '#54bab9',
    borderRadius: 5,
    height: 50,
    width: 180,
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 25,
  },
  loginField: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 180,
    borderRadius: 5,
    fontSize: 18,
  },
});

export default styles;
