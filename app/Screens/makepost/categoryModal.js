import React, { useEffect, useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function CategoryModal(props) {
  const [category, setCategory] = useState('');

  const onChangeCategory = (event) => {
    event.preventDefault();
  };

  const onDone = () => {
    props.setShowView('main');
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.fixToRight}>
        <Button
          title="X"
          onPress={() => {
            onDone();
          }}
          color="#54bab9"
        />
      </View>
      <Text>We are in the category modal now.</Text>
      <TextInput
        onChangeText={onChangeCategory}
        placeholder="Add tags here"
        style={styles.input}
        KeyboardType="default"
      />
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
});

export default CategoryModal;
