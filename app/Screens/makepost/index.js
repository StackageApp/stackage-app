import React, { useEffect, useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

import CategoryModal from './categoryModal.js';
import LinksModal from './linksModal.js';
import SuccessModal from './successModal.js';
import TagsModal from './tagsModal.js';

moment().format();

function PostMessage() {
  const [showView, setShowView] = useState('tags');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const [links, setLinks] = useState([]);

  const handleInput = (input, field) => {
    if (field === 'title') {
      setTitle(input);
    }

    if (field === 'text') {
      setText(input);
    }
  };

  const updateTags = (tagsArray) => {
    setTags(tagsArray);
  };

  const updateLinks = (linksArray) => {
    setLinks(linksArray);
  };

  const openTagsModal = (event) => {
    event.preventDefault();
  };

  const openCategoryModal = (event) => {
    event.preventDefault();
  };

  const openLinksModal = (event) => {
    event.preventDefault();
  };

  const openSuccessModal = (event) => {
    event.preventDefault();
  };

  const closeModal = (event) => {};

  const buildPostObject = () => {
    const newPost = {};
  };

  return (
    <KeyboardAvoidingView>
      {showView === 'main' ? (
        <View>
          <View style={styles.fixToRight}>
            <Button title="X" onPress={() => {}} color="#54bab9" />
          </View>
          <TextInput
            id="title"
            editable
            numberOfLines={1}
            maxLength={100}
            onChangeText={(input) => {
              handleInput(input, 'title');
            }}
            value={title}
            placeholder="Title"
            style={styles.input}
            KeyboardType="default"
          />
          <TextInput
            id="text"
            editable
            multiline
            numberOfLines={12}
            maxLength={500}
            onChangeText={(input) => {
              handleInput(input, 'text');
            }}
            value={text}
            placeholder="Write your post here."
            style={styles.longInput}
            KeyboardType="default"
          />
          <View style={styles.evenRow}>
            <Ionicons
              name="ios-pricetags-outline"
              size={30}
              color="black"
              onPress={() => {
                setShowView('tags');
              }}
            />
            <Ionicons
              name="grid-outline"
              size={30}
              color="black"
              onPress={() => {
                setShowView('category');
              }}
            />
            <Ionicons
              name="link-outline"
              size={30}
              color="black"
              onPress={() => {
                setShowView('links');
              }}
            />
            <Pressable
              title="Post"
              onPress={() => {
                setShowView('success');
              }}
              style={styles.postButton}
            >
              <Text style={styles.postButtonText}>Post</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
      {showView === 'tags' ? <TagsModal updateTags={updateTags} setShowView={setShowView} /> : null}
      {showView === 'category' ? <CategoryModal setShowView={setShowView} /> : null}
      {showView === 'links' ? (
        <LinksModal updateLinks={updateLinks} setShowView={setShowView} />
      ) : null}
      {showView === 'success' ? <SuccessModal setShowView={setShowView} /> : null}
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
  longInput: {
    height: 200,
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
