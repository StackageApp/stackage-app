import React from 'react';
import { Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native';

function SuccessModal(props) {
  const onReturnToEdit = () => {
    props.setShowView('main');
  };

  const onSubmit = () => {
    props.sendPost();
    props.setShowView('after success');
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
      <View style={styles.centerDiv}>
        <Text style={styles.mainTitle}>Is the following information correct?</Text>
        <Text style={styles.mainTitle}>If so, press Submit.</Text>
        <View style={styles.rowWrapper}>
          <Text style={styles.fieldTitle}>Title:</Text>
          <Text style={styles.otherValueStyle}>{props.postObj.title}</Text>
        </View>
        <View style={styles.rowWrapper}>
          <Text style={styles.fieldTitle}>Text:</Text>
          <Text style={styles.otherValueStyle}>{props.postObj.text}</Text>
        </View>
        <View style={styles.rowWrapper}>
          <Text style={styles.fieldTitle}>Category:</Text>
          <Text style={styles.categoryValueStyle}>{props.postObj.category}</Text>
        </View>
        <View style={styles.rowWrapper}>
          <Text style={styles.fieldTitle}>Tags:</Text>
          <View style={styles.littleList}>
            {props.postObj.tags.map((tag) => (
              <Text style={styles.otherValueStyle}>{tag}</Text>
            ))}
          </View>
        </View>
        <View style={styles.rowWrapper}>
          <Text style={styles.fieldTitle}>Links:</Text>
          <View style={styles.littleList}>
            {props.postObj.links.map((link) => (
              <Text style={styles.otherValueStyle}>{link}</Text>
            ))}
          </View>
        </View>
      </View>

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

        <Pressable title="Submit" onPress={onSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fixToRight: {
    flexDirection: 'row-reverse',
    padding: 10,
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  fieldTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
  otherValueStyle: {
    marginLeft: 44,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 15,
  },
  categoryValueStyle: {
    margin: 10,
    fontSize: 15,
  },
  littleList: {
    flexDirection: 'column',
  },
  centerDiv: {
    width: 300,
    marginLeft: 40,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
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
