import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Link,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
        <Text style={styles.successText1}>Your post has been submitted for approval. </Text>
        <Text style={styles.successText2}>
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
        {/* <View style={styles.writeAnotherButton}>
          <Link style={styles.buttonText}>Return to Home</Link>
        </View> */}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fixToRight: {
    flexDirection: 'row-reverse',
    padding: 10,
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
  successText1: {
    fontSize: 20,
    marginTop: 60,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  successText2: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  successTextWrapper: {
    alignItems: 'center',
  },
});

export default AfterSuccessModal;
