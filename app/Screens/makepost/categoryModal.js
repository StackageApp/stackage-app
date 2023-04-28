import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';

import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

// const isEqual = require('lodash.isequal');

function CategoryModal(props) {
  const [category, setCategory] = useState('');
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Travel',
      value: 'Travel',
    },
    {
      id: '2',
      label: 'Sports',
      value: 'Sports',
    },
    {
      id: '3',
      label: 'Technology',
      value: 'Technology',
    },
    {
      id: '4',
      label: 'Health',
      value: 'Health',
    },
    {
      id: '5',
      label: 'Politics',
      value: 'Politics',
    },
    {
      id: '6',
      label: 'Entertainment',
      value: 'Entertainment',
    },
    {
      id: '7',
      label: 'Business',
      value: 'Business',
    },
  ]);

  const onPressRadioButton = (radioButtonsArray) => {
    radioButtonsArray.forEach((selection) => {
      if (selection.selected === true) {
        setCategory(selection.value);
      }
    });
    setRadioButtons(radioButtonsArray);
  };

  const onDone = () => {
    props.setCategory(category);
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
      <View style={styles.centerEverything}>
        <Text style={styles.instructions}>Select a category</Text>
        <View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            containerStyle={styles.radioGroupStyle}
          />
        </View>
        <Pressable
          title="Done"
          onPress={() => {
            onDone();
          }}
          style={styles.doneButton}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </Pressable>
      </View>
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
  doneButton: {
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
    margin: 50,
  },
  doneButtonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  radioGroupStyle: {
    width: 200,
    alignItems: 'left',
    fontSize: 20,
  },
  centerEverything: {
    alignItems: 'center',
  },
  instructions: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    margin: 30,
  },
});

export default CategoryModal;
