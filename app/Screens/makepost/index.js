import React, { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function PostMessage() {
  const [title, onChangeTitle] = React.useState('');
  const [body, onChangeBody] = React.useState('');

  return (
    <View>
      <View style={styles.fixToRight}>
        <Button title="X" onPress={() => {}} color="#54bab9" />
      </View>
      <TextInput
        onChangeText={onChangeTitle}
        placeholder="Title"
        style={styles.input}
        KeyboardType="default"
      />
      <TextInput
        editable
        multiline
        numberOfLines={12}
        maxLength={500}
        onChangeText={onChangeBody}
        placeholder="Write your post here."
        style={styles.longInput}
        KeyboardType="default"
      />
      <View style={styles.evenRow}>
        <Ionicons name="ios-pricetags-outline" size={30} color="black" onPress={() => {}} />
        <Ionicons name="grid-outline" size={30} color="black" onPress={() => {}} />
        <Ionicons name="link-outline" size={30} color="black" onPress={() => {}} />
        <Pressable title="Post" onPress={() => {}} style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </Pressable>
      </View>
    </View>
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
  longInput: {
    height: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  fixToRight: {
    flexDirection: 'row-reverse',
    padding: 10,
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  postButton: {
    height: 50,
    width: 70,
    backgroundColor: '#54bab9',
    color: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 3,
  },
  postButtonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default PostMessage;
