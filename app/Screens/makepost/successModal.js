import React from 'react';
import { Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';

function SuccessModal(props) {
  const onReturnToEdit = () => {
    props.setShowView('main');
  };
  return (
    <KeyboardAvoidingView>
      <View style={styles.fixToRight}>
        <Button
          title="X"
          onPress={() => {
            onReturnToEdit();
          }}
          color="#54bab9"
        />
      </View>
      <Text>Here's the complete post ready to send:</Text>
      <Text>Title:{props.postObj.title}</Text>
      <Text>Text:{props.postObj.text}</Text>
      <Text>Tags:{props.postObj.tags}</Text>
      <Text>Category:{props.postObj.category}</Text>
      <Text>Links:{props.postObj.links}</Text>
      <Text>uid:{props.postObj.uid}</Text>
      <Text>timestamp:{props.postObj.timestamp}</Text>
      <View style={styles.buttonsWrapper}>
        <Pressable
          title="Return to edit"
          onPress={() => {
            onReturnToEdit();
          }}
          style={styles.editButton}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </Pressable>

        <Pressable
          title="Submit"
          onPress={() => {
            props.sendPost();
          }}
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>Submit</Text>
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
  editButton: {
    height: 50,
    width: 100,
    backgroundColor: '#e8dac1',
    color: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 3,
    margin: 2,
  },
  submitButton: {
    height: 50,
    width: 150,
    backgroundColor: '#54bab9',
    color: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 3,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonsWrapper: {
    margin: 10,
    alignItems: 'center',
  },
});

export default SuccessModal;
