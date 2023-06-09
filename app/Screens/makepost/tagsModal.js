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

import { AntDesign } from '@expo/vector-icons';

function TagsModal(props) {
  const [currentTag, setCurrentTag] = useState('');
  const [tags, setTags] = useState(props.tags);

  const handleTag = (input) => {
    setCurrentTag(input);
  };

  const onAddTag = () => {
    if (currentTag.length > 0) {
      const newTags = tags.slice();
      newTags.push(currentTag);
      setTags(newTags);
      setCurrentTag('');
    }
  };

  const onDone = () => {
    onAddTag();
    props.updateTags(tags);
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
        <Text style={styles.instructions}>Add your tags here</Text>
        <View>
          {tags.map((tag) => (
            <Text style={styles.listItem}>{tag}</Text>
          ))}
        </View>
      </View>
      <TextInput
        onChangeText={(input) => {
          handleTag(input);
        }}
        placeholder="Add a tag here"
        style={styles.input}
        value={currentTag}
        KeyboardType="default"
      />
      <View style={styles.evenRow}>
        {tags.length < 11 ? (
          <Pressable>
            <AntDesign
              name="pluscircle"
              size={45}
              color="#54bab9"
              onPress={() => {
                onAddTag();
              }}
            />
          </Pressable>
        ) : null}

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
  },
  doneButtonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
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
  listItem: {
    margin: 10,
    fontSize: 15,
  },
});

export default TagsModal;
