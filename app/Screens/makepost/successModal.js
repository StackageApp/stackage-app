import React, { useEffect, useState } from 'react';
import { Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function SuccessModal(props) {
  const onWriteAnotherPost = () => {
    props.setShowView('main');
  };
  return (
    <KeyboardAvoidingView>
      <View style={styles.fixToRight}>
        <Button
          title="X"
          onPress={() => {
            onWriteAnotherPost();
          }}
          color="#54bab9"
        />
      </View>
      <Text>Console logging some stuff here for now.</Text>
      <Text>Here's the complete post ready to send:</Text>
      <Text>Title:{props.postObj.title}</Text>
      <Text>Text:{props.postObj.text}</Text>
      <Text>Tags:{props.postObj.tags}</Text>
      <Text>Category:{props.postObj.category}</Text>
      <Text>Links:{props.postObj.links}</Text>
      <Text>uid:{props.postObj.uid}</Text>
      <Text>timestamp:{props.postObj.timestamp}</Text>
      <Pressable
        title="Write another post"
        onPress={() => {
          onWriteAnotherPost();
        }}
        style={styles.anotherButton}
      >
        <Text style={styles.anotherButtonText}>Write another post.</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  fixToRight: {
    flexDirection: 'row-reverse',
    padding: 10,
  },
  anotherButton: {
    height: 50,
    width: 300,
    backgroundColor: '#54bab9',
    color: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 3,
  },
  anotherButtonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default SuccessModal;
