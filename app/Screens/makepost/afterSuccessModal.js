import React from 'react';
import { Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';

function AfterSuccessModal(props) {
  const onWriteAnotherPost = () => {
    props.resetState();
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
      <View style={styles.successTextWrapper}>
        <Text style={styles.successText}>Your post has been submitted for approval. </Text>
        <Text style={styles.successText}>
          You should see it go live once five other members approve it.
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Pressable
          title="Write Another"
          onPress={onWriteAnotherPost}
          style={styles.writeAnotherButton}
        >
          <Text style={styles.buttonText}>Write Another Post</Text>
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
  writeAnotherButton: {
    height: 50,
    width: 250,
    backgroundColor: '#54bab9',
    color: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 3,
  },
  writeAnotherButtonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  successText: {
    fontSize: 20,
  },
  successTextWrapper: {
    alignItems: 'center',
  },
});

export default AfterSuccessModal;
